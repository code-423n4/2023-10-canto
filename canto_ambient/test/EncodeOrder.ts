import { AbiCoder } from '@ethersproject/abi';
import { BigNumber, BytesLike, ethers, BigNumberish } from 'ethers';

export function encodeOrderDirective (directive: OrderDirective): BytesLike {
    let schema = encodeWord(directive.schemaType)
    let open = encodeSettlement(directive.open)
    let hops = listEncoding(directive.hops, encodeHop)
    return ethers.utils.concat([schema, open, hops])
}

export interface OrderDirective {
    schemaType: 1
    open: SettlementDirective
    hops: HopDirective[]
}

export interface SettlementDirective {
    token: string
    limitQty: BigNumber,
    dustThresh: BigNumber,
    useSurplus: boolean
}

export interface ImproveDirective {
    isEnabled: boolean,
    useBaseSide: boolean
}

export interface ChainingDirective {
    rollExit: boolean,
    swapDefer: boolean,
    offsetSurplus: boolean
}

export interface HopDirective {
    pools: PoolDirective[]
    settlement: SettlementDirective
    improve: ImproveDirective
}

export interface PoolDirective {
    poolIdx: BigNumberish
    passive: PassiveDirective,
    swap: SwapDirective
    chain: ChainingDirective
}

export interface SwapDirective {
    isBuy: boolean,
    inBaseQty: boolean,
    qty: BigNumber,
    rollType?: number,
    limitPrice: BigNumber
}

export interface PassiveDirective {
    ambient: AmbientDirective
    concentrated: ConcentratedDirective[]
}

export interface AmbientDirective {
    isAdd: boolean,
    rollType?: number,
    liquidity: BigNumber
}

export interface ConcentratedDirective {
    lowTick: number,
    highTick: number,
    isRelTick: boolean,
    isAdd: boolean,
    rollType?: number,
    liquidity: BigNumber
}


function encodeSettlement (dir: SettlementDirective): BytesLike {
    let token = encodeToken(dir.token)
    let limit = encodeSigned(dir.limitQty)
    let dust = encodeFull(dir.dustThresh)
    let reserveFlag = encodeWord(dir.useSurplus ? 1 : 0)
    return ethers.utils.concat([token, limit, dust, reserveFlag])
}

function encodeHop (hop: HopDirective): BytesLike {
    let pools = listEncoding(hop.pools, encodePool)
    let settle = encodeSettlement(hop.settlement)
    let improve = encodeImprove(hop.improve)
    return ethers.utils.concat([pools, settle, improve])
}

function encodeImprove (improve: ImproveDirective): BytesLike {
    let abiCoder = new ethers.utils.AbiCoder()
    return abiCoder.encode(["bool", "bool"], [improve.isEnabled, improve.useBaseSide])
}

function encodeChain (chain: ChainingDirective): BytesLike {
    let abiCoder = new ethers.utils.AbiCoder()
    return abiCoder.encode(["bool", "bool", "bool"], [chain.rollExit, chain.swapDefer, chain.offsetSurplus])
}

function encodePool (pool: PoolDirective): BytesLike {
    let poolIdx = encodeFull(pool.poolIdx)
    let passive = encodePassive(pool.passive)
    let swap = encodeSwap(pool.swap)
    let chain = encodeChain(pool.chain)
    return ethers.utils.concat([poolIdx, passive, swap, chain])
}

function encodeSwap (swap: SwapDirective): BytesLike {
    let abiCoder = new ethers.utils.AbiCoder()
    return abiCoder.encode(["bool", "bool", "uint8", "uint128", "uint128"],
        [swap.isBuy, swap.inBaseQty, swap.rollType ? swap.rollType : 0, swap.qty, swap.limitPrice])
}

function encodePassive (passive: PassiveDirective): BytesLike {
    let ambAdd = encodeBool(passive.ambient.isAdd)
    let rollType = encodeWord(passive.ambient.rollType ? passive.ambient.rollType : 0)
    let ambLiq = encodeFull(passive.ambient.liquidity)
    let conc = listEncoding(passive.concentrated, encodeConc)
    return ethers.utils.concat([ambAdd, rollType, ambLiq, conc])
}

function encodeConc (conc: ConcentratedDirective): BytesLike {
    let openTick = encodeJsSigned(conc.lowTick)
    let closeTick = encodeJsSigned(conc.highTick)
    let isRelTick = encodeBool(conc.isRelTick)
    let isAdd = encodeBool(conc.isAdd)
    let rollType = encodeWord(conc.rollType ? conc.rollType : 0)
    let liq = encodeFull(conc.liquidity)
    return ethers.utils.concat([openTick, closeTick, isRelTick, isAdd, rollType, liq])
}

function listEncoding<T> (elems: T[], encoderFn: (x: T) => BytesLike): BytesLike {
    let count = encodeWord(elems.length)
    let vals = elems.map(encoderFn)
    return ethers.utils.concat([count].concat(vals))
}

function encodeToken (tokenAddr: BytesLike): BytesLike {    
    return ethers.utils.hexZeroPad(tokenAddr, 32)
}

function encodeFull (val: BigNumberish): BytesLike {
    let abiCoder = new ethers.utils.AbiCoder()
    return abiCoder.encode(["uint256"], [val]);
}

function encodeSigned (val: BigNumber): BytesLike {
    let abiCoder = new ethers.utils.AbiCoder()
    return abiCoder.encode(["int256"], [val]);
}

function encodeJsNum (val: number): BytesLike {
    return encodeFull(BigNumber.from(val))
}

function encodeJsSigned (val: number): BytesLike {
    return encodeSigned(BigNumber.from(val))
}

function encodeWord (val: number): BytesLike {
    return encodeJsNum(val)
}

function encodeBool (flag: boolean): BytesLike {
    return encodeWord(flag ? 1 : 0)
}
