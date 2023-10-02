import { TestEncoding } from '../typechain/TestEncoding';
import { expect } from "chai";
import chai from "chai";
import "@nomiclabs/hardhat-ethers";
import { ethers } from 'hardhat';
import { solidity } from "ethereum-waffle";
import { toSqrtPrice } from './FixedPoint';
import { OrderDirective, PassiveDirective, SwapDirective, PoolDirective, ConcentratedDirective, SettlementDirective, HopDirective, encodeOrderDirective, ImproveDirective, ChainingDirective } from './EncodeOrder';
import { BigNumber } from 'ethers';

chai.use(solidity);

describe('Encoding', () => {
    let encoder: TestEncoding
    let order: OrderDirective

    beforeEach("deploy", async () => {
        const libFactory = await ethers.getContractFactory("TestEncoding");
        encoder = (await libFactory.deploy()) as TestEncoding
        order = buildOrder()
    })

    function buildOrder(): OrderDirective {
        let poolJ = buildPool(5600, emptyPassive(), 
            buildSwap(15, true, false, 2500, 1.5), 
            { rollExit: false, swapDefer: false, offsetSurplus: false })
        let poolK = buildPool(5601, 
            buildPassive(281*1024, [250, 20], [[-50, 50], [-200]], [[80*1024, 85*1024], [5000*1024]]),
            buildSwap(0, false, true, 750000, 0.25), 
            { rollExit: true, swapDefer: false, offsetSurplus: false })
        let poolL = buildPool(84, 
            buildPassive(281*1024, [200], [[]], [[]]),
            buildSwap(100, true, true, 7500000, 95.0), 
            { rollExit: false, swapDefer: false, offsetSurplus: false })
        let poolM = buildPool(84, 
            buildPassive(-295*1024, [200], [[]], [[]]),
            buildSwap(100, true, true, 7500000, 95.0), 
            { rollExit: false, swapDefer: true, offsetSurplus: false })
        let poolN = buildPool(128, 
            buildPassive(281*1024, [200], [[]], [[]]),
            buildSwap(0, false, false, 0, 0), 
            { rollExit: false, swapDefer: false, offsetSurplus: false })
        let poolQ = buildPool(250, emptyPassive(),
            buildSwap(0, true, false, 50000, 0.0625), 
            { rollExit: false, swapDefer: false, offsetSurplus: false })
        let poolR = buildPool(0, buildAmbientOnly(25000),
            buildSwap(1, false, true, 80000, 64000), 
            { rollExit: false, swapDefer: false, offsetSurplus: true })
        
        let hopA = buildHop(buildSettle("DE0", 65000, 10, false),
            { isEnabled: false, useBaseSide: false },
            [poolJ, poolK, poolL])
        let hopB = buildHop(buildSettle("9A8", -50000, 15, false),
            { isEnabled: true, useBaseSide: false },
            [poolM, poolN])
        let hopC = buildHop(buildSettle("7C5", -800000, 5000, true),
            { isEnabled: false, useBaseSide: true },
            [poolQ, poolR])

        return { schemaType: 1, open: buildSettle("A25", 512, 128, true),
            hops: [hopA, hopB, hopC] }
    }

    function buildHop (settle: SettlementDirective, 
        improve: ImproveDirective,
        pools: PoolDirective[]): HopDirective {
        return { pools: pools, settlement: settle, 
            improve: improve }
    }

    function buildSettle (token: string, qty: number, 
        dust: number, useSurplus: boolean): SettlementDirective {
        return { token: toToken(token), limitQty: BigNumber.from(qty), 
            dustThresh: BigNumber.from(dust), useSurplus: useSurplus }
    }

    function toToken (token: string): string {
        return "0x00000000000000000" + token
    }

    function buildPool (poolIdx: number, passive: PassiveDirective, 
        swap: SwapDirective, chain: ChainingDirective): PoolDirective {
        return { poolIdx: poolIdx, passive: passive, swap: swap, chain: chain}
    }

    function buildSwap (liqMask: number, isBuy: boolean, inBaseQty: boolean, 
        qty: number, price: number): SwapDirective {
        return { isBuy: isBuy, inBaseQty: inBaseQty,
            qty: BigNumber.from(qty), limitPrice: toSqrtPrice(price) }
    }

    function emptyPassive(): PassiveDirective {
        return buildPassive(0, [], [], [])
    }

    function buildAmbientOnly (liq: number): PassiveDirective {
        return buildPassive(liq, [], [], [])
    }

    function buildPassive (ambientLiq: number, openTicks: number[], closeTicks: number[][],
        concLiqs: number[][]): PassiveDirective {
        let concs: ConcentratedDirective[] = []
        for (let i = 0; i < openTicks.length; ++i) {
            concs = concs.concat(buildConcentrated(openTicks[i], closeTicks[i], concLiqs[i]))
        }
        return { ambient: { isAdd: ambientLiq > 0,
            liquidity: BigNumber.from(ambientLiq).abs() }, concentrated: concs }
    }

    function buildConcentrated (openTick: number, closeTicks: number[],
        concLiqs: number[]): ConcentratedDirective[] {
        let dirs: ConcentratedDirective[] = []
        for (let i = 0; i < closeTicks.length; ++i) {
            let lowTick = openTick < closeTicks[i] ? openTick : closeTicks[i]
            let highTick = openTick >= closeTicks[i] ? openTick : closeTicks[i]
            dirs.push({lowTick: lowTick, highTick: highTick, isRelTick: false,
                isAdd: concLiqs[i] > 0, liquidity: BigNumber.from(concLiqs[i]).abs()})
        }        
        return dirs
    }

    it ("open settlement", async() => {
        await encoder.testEncodeOpen(encodeOrderDirective(order))
        let settle = (await encoder.settleOpen())
        expect(settle.token_).to.equal(ethers.utils.hexZeroPad(order.open.token, 20))
        expect(settle.limitQty_).to.equal(order.open.limitQty)
        expect(settle.dustThresh_).to.equal(order.open.dustThresh)
        expect(settle.useSurplus_).to.equal(order.open.useSurplus)
    })

    it ("hop settlement", async() => {
        await encoder.testEncodeHop(1, encodeOrderDirective(order))
        let settle = (await encoder.settleHop())
        let cmp = order.hops[1].settlement
        expect(settle.token_).to.equal(ethers.utils.hexZeroPad(cmp.token, 20))
        expect(settle.limitQty_).to.equal(cmp.limitQty)
        expect(settle.dustThresh_).to.equal(cmp.dustThresh)
        expect(settle.useSurplus_).to.equal(cmp.useSurplus)
    })

    it ("hop improve", async() => {
        await encoder.testEncodeHop(0, encodeOrderDirective(order))
        let improve = (await encoder.priceImprove())
        let chain = (await encoder.chaining())
        let cmp = order.hops[0]
        expect(improve.isEnabled_).to.equal(cmp.improve.isEnabled)
        expect(improve.useBaseSide_).to.equal(cmp.improve.useBaseSide)
        
        await encoder.testEncodeHop(1, encodeOrderDirective(order))
        improve = (await encoder.priceImprove())
        chain = (await encoder.chaining())
        cmp = order.hops[1]
        expect(improve.isEnabled_).to.equal(cmp.improve.isEnabled)
        expect(improve.useBaseSide_).to.equal(cmp.improve.useBaseSide)

        await encoder.testEncodeHop(2, encodeOrderDirective(order))
        improve = (await encoder.priceImprove())
        chain = (await encoder.chaining())
        cmp = order.hops[2]
        expect(improve.isEnabled_).to.equal(cmp.improve.isEnabled)
        expect(improve.useBaseSide_).to.equal(cmp.improve.useBaseSide)
    })

    it ("pool idx", async() => {
        await encoder.testEncodePool(2, 1, encodeOrderDirective(order))
        let cmp = order.hops[2].pools[1]
        expect((await encoder.poolIdx())).to.equal(cmp.poolIdx)
    })

    it ("swap", async() => {
        await encoder.testEncodePool(0, 1, encodeOrderDirective(order))
        let cmp = order.hops[0].pools[1].swap
        let swap = (await encoder.swap())
        expect(swap.isBuy_).to.equal(cmp.isBuy)
        expect(swap.inBaseQty_).to.equal(cmp.inBaseQty)
        expect(swap.limitPrice_).to.equal(cmp.limitPrice)
        expect(swap.qty_).to.equal(cmp.qty)                
    })

    it ("ambient", async() => {
        await encoder.testEncodePool(0, 2, encodeOrderDirective(order))
        let cmp = order.hops[0].pools[2]
        expect((await encoder.ambientOpen()).liquidity_).to.equal(cmp.passive.ambient.liquidity)
        expect((await encoder.ambientOpen()).isAdd_).to.equal(cmp.passive.ambient.isAdd)

        await encoder.testEncodePool(1, 0, encodeOrderDirective(order))
        cmp = order.hops[1].pools[0]
        expect((await encoder.ambientOpen()).liquidity_).to.equal(cmp.passive.ambient.liquidity)
        expect((await encoder.ambientOpen()).isAdd_).to.equal(cmp.passive.ambient.isAdd)
    })

    it ("concentrated", async() => {
        await encoder.testEncodePassive(0, 1, 1, encodeOrderDirective(order))
        let cmp = order.hops[0].pools[1].passive.concentrated[1]
        
        expect((await encoder.bookend()).lowTick_).to.equal(cmp.lowTick)
        expect((await encoder.bookend()).highTick_).to.equal(cmp.highTick)
        expect((await encoder.bookend()).liquidity_).to.equal(cmp.liquidity)
        expect((await encoder.bookend()).isAdd_).to.equal(cmp.isAdd)
        expect((await encoder.bookend()).isTickRel_).to.equal(cmp.isRelTick)
    })

    it ("chain flags", async() => {
        await encoder.testEncodePool(0, 1, encodeOrderDirective(order))
        let chain = (await encoder.chaining())
        let cmp = order.hops[0].pools[1].chain
        expect(chain.offsetSurplus_).to.equal(cmp.offsetSurplus)
        expect(chain.rollExit_).to.equal(cmp.rollExit)
        expect(chain.swapDefer_).to.equal(cmp.swapDefer)

        await encoder.testEncodePool(1, 0, encodeOrderDirective(order))
        chain = (await encoder.chaining())
        cmp = order.hops[1].pools[0].chain
        expect(chain.offsetSurplus_).to.equal(cmp.offsetSurplus)
        expect(chain.rollExit_).to.equal(cmp.rollExit)
        expect(chain.swapDefer_).to.equal(cmp.swapDefer)

        await encoder.testEncodePool(2, 1, encodeOrderDirective(order))
        chain = (await encoder.chaining())
        cmp = order.hops[2].pools[1].chain
        expect(chain.offsetSurplus_).to.equal(cmp.offsetSurplus)
        expect(chain.rollExit_).to.equal(cmp.rollExit)
        expect(chain.swapDefer_).to.equal(cmp.swapDefer)
    })
})