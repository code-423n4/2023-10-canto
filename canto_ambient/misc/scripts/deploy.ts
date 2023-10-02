
import { CrocSwapDexSeed } from '../../typechain/CrocSwapDexSeed';
import { ethers } from 'hardhat';
import { ContractFactory, BytesLike, BigNumber } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import { toSqrtPrice, fromSqrtPrice, MIN_PRICE, MAX_PRICE, MIN_TICK, ZERO_ADDR } from '../../test/FixedPoint';
import { MockERC20 } from '../../typechain/MockERC20';
import { QueryHelper } from '../../typechain/QueryHelper';
import { CrocSwapDex } from '../../typechain/CrocSwapDex';
import { IERC20Minimal } from '../../typechain/IERC20Minimal';
import { ColdPath } from '../../typechain/ColdPath';
import { AddressZero } from '@ethersproject/constants';
import { WarmPath } from '../../typechain/WarmPath';
import { LongPath } from '../../typechain/LongPath';
import { MicroPaths } from '../../typechain/MicroPaths';
import { CrocPolicy } from '../../typechain/CrocPolicy';
import { CrocQuery } from '../../typechain/CrocQuery';
import { CrocShell } from '../../typechain/CrocShell';
import { HotPath } from '../../typechain/HotPath';
import { CrocImpact, KnockoutFlagPath, KnockoutLiqPath } from '../../typechain';

let override = { gasPrice: BigNumber.from("10").pow(9).mul(2), gasLimit: 6000000 }

/* Ropsten */
/*let addrs = {
    dex: "0x129bcaa67e211bfaf5f2d070405f3437282b5661",
    cold: "0x965a77f99d6aab400d5d13bccf47c63d192b3fa8",
    warm: "0x40ec968eEB324963127D86A5821FDa3379578301",
    long: "0x15ccfd33faba9651adc3ca779ab2fd6debda76a0",
    micro: "0xf9d00826c2692f379862ab8dfb06e14a6fd1f8ee",
    hot: "0x2975F2849B37a401f526a363e410B930c82A4f3d",
    policy: "0x8dce7b4583d1777671b3db2c80370e8053d4a90a",
    query: "0xc6768b1fb34035af90c0c994baced9ad86671a8c",
    shell: "0x2ee92b38056c28360467880bfa33c78cdbd1cab6"
}*/

// Kovan
/*let addrs = {
    dex: "0x5d42d6046927dee12b9b4a235be0cecd55d0e0fb",
    cold: "0x141e224f461a85006b2ef051a7c1c290e449202a",
    warm: "0x01B180D35125D31B4057d9ac7F46687dA1cAEFab",
    long: "0x66d34e1486d0bad1a8ced5a8505a73d0cfd41a0a",
    micro: "0x323172539b1b0d9eddffbd0318c4d6ab45292843",
    hot: "0x6291aa5812ff75412cf3f3258447139653a9a209",
    policy: "0xdcb3b5ec9170bef68e9fff21f0edd622f72f1899",
    query: "0x3a6e9cff691a473d4d0742e1dfc8ea263a99f6d0",
    shell: "0xf19D3dcdF82af0d40Cb3b4AaE4D266c638A3E454"
}*/

// Goerli
let addrs = {
    dex: "0xfafcd1f5530827e7398b6d3c509f450b1b24a209",
    cold: "0xb2ae163293c82dcf36b0ce704591edc2f9e2608d",
    warm: "0x01B180D35125D31B4057d9ac7F46687dA1cAEFab",
    long: "0x66d34e1486d0bad1a8ced5a8505a73d0cfd41a0a",
    micro: "0x323172539b1b0d9eddffbd0318c4d6ab45292843",
    hot: "0x141e224f461a85006b2ef051a7c1c290e449202a",
    knockout: "0x806859d4C974F9dCBB5f77e027062a02fC965987",
    koCross: "0xa7b87362b5b86f696a8027b409c20dba094744e2",
    policy: "0xaa391ee82f0c6b406e98ccd76d637cac2f712228",
    query: "0x93a4baFDd49dB0e06f3F3f9FddC1A67792F47518", 
    impact: "0x142BE02F2A3A27ecD6e2f18a43c2C234F372C831",
    shell: "0xdf2a97ae85e8ce33ad20ad2d3960fd92e8079861"
}

// Ropsten
/*let tokens = {
    eth: ZERO_ADDR,
    dai: "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
    usdc: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F"
}*/

// Kovan
/*let tokens = {
    eth: ZERO_ADDR,
    dai: "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa",
    usdc: "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede"
}*/

// Goerli
let tokens = {
    eth: ZERO_ADDR,
    dai: "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60",
    usdc: "0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C"
}

async function deploy() {
    let authority = (await ethers.getSigners())[0]

    let abi = new ethers.utils.AbiCoder()
    let cmd;
    let factory
    let tx;

    console.log("Deploying with the following addresses...")
    console.log("Protocol Authority: ", await authority.address)

    factory = await ethers.getContractFactory("WarmPath")
    let warmPath = addrs.warm ? factory.attach(addrs.warm) :
        await factory.deploy(override) as WarmPath
    
    factory = await ethers.getContractFactory("LongPath")
    let longPath = addrs.long ? factory.attach(addrs.long) :
        await factory.deploy(override) as LongPath
    
    factory = await ethers.getContractFactory("MicroPaths")
    let microPath = addrs.micro ? factory.attach(addrs.micro) :
        await factory.deploy(override) as MicroPaths

    factory = await ethers.getContractFactory("ColdPath")
    let coldPath = addrs.cold ? factory.attach(addrs.cold) :
        await factory.deploy(override) as ColdPath

    factory = await ethers.getContractFactory("HotProxy")
    let hotPath = addrs.hot ? factory.attach(addrs.hot) :
        await factory.deploy(override) as HotPath

    factory = await ethers.getContractFactory("KnockoutLiqPath")
    let knockoutPath = addrs.knockout ? factory.attach(addrs.knockout) :
        await factory.deploy(override) as KnockoutLiqPath    

    factory = await ethers.getContractFactory("KnockoutFlagPath")
    let crossPath = addrs.koCross ? factory.attach(addrs.koCross) :
        await factory.deploy(override) as KnockoutFlagPath    
        
    factory = await ethers.getContractFactory("CrocSwapDex")
    let dex = addrs.dex ? factory.attach(addrs.dex) :
        await factory.deploy(authority.address, coldPath.address, override) as CrocSwapDex
            
    factory = await ethers.getContractFactory("CrocPolicy")
    let policy = (addrs.policy ? factory.attach(addrs.policy) :
        await factory.deploy(dex.address, await authority.getAddress(),
        await authority.getAddress(), await authority.getAddress())) as CrocPolicy

    factory = await ethers.getContractFactory("CrocQuery")
    let query = (addrs.query ? factory.attach(addrs.query) :
        await factory.deploy(dex.address, override)) as CrocQuery

    factory = await ethers.getContractFactory("CrocImpact")
    let impact = (addrs.impact ? factory.attach(addrs.impact) :
        await factory.deploy(dex.address, override)) as CrocImpact
        
    console.log(impact.address)
    
    factory = await ethers.getContractFactory("CrocShell")
    let shell = (addrs.shell ? factory.attach(addrs.shell) :
        await factory.deploy(override)) as CrocShell

    console.log({ warm: warmPath.addrs, long: longPath.addrs, micro: microPath.addrs, hot: hotPath.addrs, 
        dex: dex.addrs, policy: policy.addrs, query: query.addrs, shell: shell.addrs})

    factory = await ethers.getContractFactory("MockERC20")
    let dai = factory.attach(tokens.dai) as MockERC20
    let usdc = factory.attach(tokens.usdc) as MockERC20

    /*tx = await dai.approve(dex.address, BigNumber.from(10).pow(36))
    await tx.wait()

    tx = await usdc.approve(dex.address, BigNumber.from(10).pow(36))
    await tx.wait()*/

    /*let authCmd = abi.encode(["uint8", "address"], [20, policy.address])
    tx = await dex.protocolCmd(0, authCmd, true, override);
    await tx.wait()

    let upCmd = abi.encode(["uint8", "address", "uint16"], [21, warmPath.address, 2])
    tx = await policy.treasuryResolution(dex.address, 0, upCmd, true, override);
    await tx.wait()

    upCmd = abi.encode(["uint8", "address", "uint16"], [21, longPath.address, 4])
    tx = await policy.treasuryResolution(dex.address, 0, upCmd, true, override);
    await tx.wait()

    upCmd = abi.encode(["uint8", "address", "uint16"], [21, microPath.address, 5])
    tx = await policy.treasuryResolution(dex.address, 0, upCmd, true, override);
    await tx.wait() 

    let upCmd = abi.encode(["uint8", "address", "uint16"], [21, knockoutPath.address, 7])
    tx = await policy.treasuryResolution(dex.address, 0, upCmd, true, override);
    await tx.wait()

    upCmd = abi.encode(["uint8", "address", "uint16"], [21, crossPath.address, 3500])
    tx = await policy.treasuryResolution(dex.address, 0, upCmd, true, override);
    await tx.wait()*/

    /*let setPoolLiqCmd = abi.encode(["uint8", "uint128"], [112, 10000])
    tx = await policy.treasuryResolution(dex.address, 0, setPoolLiqCmd, false)
    await tx.wait()

    let templateCmd = abi.encode(["uint8", "uint256", "uint16", "uint16", "uint8", "uint8", "uint8"],
        [110, 36000, 500, 64, 5, 64, 0])
    tx = await policy.opsResolution(dex.address, 0, templateCmd)
    await tx.wait()

    return*/

    /*console.log("Q")
    let initPoolCmd = abi.encode(["uint8", "address", "address", "uint256", "uint128"],
        [71, tokens.eth, tokens.dai, 36000, toSqrtPrice(1/3000)])
    tx = await dex.userCmd(0, initPoolCmd, { value: BigNumber.from(10).pow(15), gasLimit: 6000000})
    console.log(tx)
    await tx.wait()

    let initUsdcCmd = abi.encode(["uint8", "address", "address", "uint256", "uint128"],
        [71, tokens.usdc, tokens.dai, 36000, toSqrtPrice(Math.pow(10, -12))])
    tx = await dex.userCmd(0, initUsdcCmd, { gasLimit: 6000000})
    console.log(tx)
    await tx.wait()*/

    // Enable knockout liquidity
    /*const knockoutFlag = 32 + 6 // Enabled, on grid, 32-ticks wide
    let reviseCmd = abi.encode(["uint8", "address", "address", "uint256", "uint16", "uint16", "uint8", "uint8"],
        [111, tokens.eth, tokens.dai, 36000, 1000, 64, 5, knockoutFlag])
    tx = await policy.treasuryResolution(dex.address, 0, reviseCmd, false)
    await tx.wait()*/

    /*reviseCmd = abi.encode(["uint8", "address", "address", "uint256", "uint16", "uint16", "uint8", "uint8"],
        [111, tokens.eth, tokens.usdc, 36000, 500, 64, 5, knockoutFlag])
    tx = await policy.treasuryResolution(dex.address, 0, reviseCmd, false)
    await tx.wait()

    reviseCmd = abi.encode(["uint8", "address", "address", "uint256", "uint16", "uint16", "uint8", "uint8"],
        [111, tokens.usdc, tokens.dai, 36000, 500, 64, 5, knockoutFlag])
    tx = await policy.treasuryResolution(dex.address, 0, reviseCmd, false)
    await tx.wait()*/

    /*let mintCmd = abi.encode(["uint8", "address", "address", "uint256", "int24", "int24", "uint128", "uint128", "uint128", "uint8", "address"],
        [31, tokens.eth, tokens.dai, 36000, 0, 0, BigNumber.from(10).pow(15), MIN_PRICE, MAX_PRICE, 0, ZERO_ADDR ])
    tx = await dex.userCmd(2, mintCmd, { value: BigNumber.from(10).pow(15), gasLimit: 6000000})
    console.log(tx)
    await tx.wait()*/

    /*cmd = abi.encode(["uint8", "address", "address", "uint256", "int24", "int24", "uint128", "uint128", "uint128", "uint8", "address"],
        [31, tokens.usdc, tokens.dai, 36000, 0, 0, BigNumber.from(10).pow(3), MIN_PRICE, MAX_PRICE, 0, ZERO_ADDR ])
    tx = await dex.userCmd(2, cmd, { gasLimit: 6000000})
    console.log(tx)
    await tx.wait()*/

    /*tx = await dex.swap(tokens.eth, tokens.dai, 36000, true, true, BigNumber.from(10).pow(12), 0, MAX_PRICE, 0, 0,
        {value: BigNumber.from(10).pow(12)})
    await tx.wait()

    tx = await dex.swap(tokens.eth, tokens.dai, 36000, false, true, BigNumber.from(10).pow(12), 0, MIN_PRICE, 0, 0)
    await tx.wait()*/

    /*tx = await dex.swap(tokens.dai, tokens.usdc, 36000, true, false, BigNumber.from(10).pow(2), 0, MAX_PRICE, 0, 0)
    await tx.wait()*/

    // Burn ambient
    /*cmd = abi.encode(["uint8", "address", "address", "uint256", "int24", "int24", "uint128", "uint128", "uint128", "uint8", "address"],
        [41, tokens.eth, tokens.dai, 36000, 0, 0, BigNumber.from(10).pow(15), MIN_PRICE, MAX_PRICE, 0, ZERO_ADDR ])
    tx = await dex.userCmd(2, cmd, {gasLimit: 6000000})
    await tx.wait()*/
    
    // Remint
    /*cmd = abi.encode(["uint8", "address", "address", "uint256", "int24", "int24", "uint128", "uint128", "uint128", "uint8", "address"],
        [31, tokens.eth, tokens.dai, 36000, 0, 0, BigNumber.from(10).pow(15), MIN_PRICE, MAX_PRICE, 0, ZERO_ADDR ])
    tx = await dex.userCmd(2, cmd, {gasLimit: 6000000, value: BigNumber.from(10).pow(15) })
    console.log(tx)
    await tx.wait()*/

    // Mint concentrated liquidity
    /*cmd = abi.encode(["uint8", "address", "address", "uint256", "int24", "int24", "uint128", "uint128", "uint128", "uint8", "address"],
        [11, tokens.eth, tokens.dai, 36000, -128000+256, 128000-256, BigNumber.from(10).pow(15), MIN_PRICE, MAX_PRICE, 0, ZERO_ADDR ])
    tx = await dex.userCmd(2, cmd, {gasLimit: 6000000, value: BigNumber.from(10).pow(15) })
    console.log(tx)
    await tx.wait()*/

    /*cmd = abi.encode(["uint8", "address", "address", "uint256", "int24", "int24", "uint128", "uint128", "uint128", "uint8", "address"],
        [21, tokens.eth, tokens.dai, 36000, -128000+64, 128000-64, BigNumber.from(10).pow(15), MIN_PRICE, MAX_PRICE, 0, ZERO_ADDR ])
    tx = await dex.userCmd(2, cmd, {gasLimit: 6000000, value: BigNumber.from(10).pow(16) })
    console.log(tx)
    await tx.wait()*/
}

deploy()