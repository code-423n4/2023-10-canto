# Canto Ambient Liquidity Mining audit details

-   Total Prize Pool: $24,500
    -   HM awards: $16,500
    -   Analysis awards: $1,000
    -   QA awards: $500
    -   Bot Race awards: $1,500
    -   Gas awards: $500
    -   Judge awards: $2,400
    -   Lookout awards: $1,600
    -   Scout awards: $500 USDC
-   Join [C4 Discord](https://discord.gg/code4rena) to register
-   Submit findings [using the C4 form](https://code4rena.com/contests/2023-10-canto/submit)
-   [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
-   Starts October 04, 2023 20:00 UTC
-   Ends October 10, 2023 20:00 UTC

❗️Awarding Note for Wardens, Judges, and Lookouts: If you want to claim your awards in $ worth of CANTO, you must follow the steps outlined in [this thread](https://discord.com/channels/810916927919620096/1157328189731917855); otherwise you'll be paid out in USDC.

## Automated Findings / Publicly Known Issues

Automated findings output for the audit can be found [here](https://github.com/code-423n4/2023-10-canto/blob/main/bot-report.md) within 24 hours of audit opening.

_Note for C4 wardens: Anything included in the automated findings output is considered a publicly known issue and is ineligible for awards._

# Overview

# Canto Liquidity Mining Audit

## Overview

Canto is releasing a new liquidity mining feature, built specifically for [Ambient Finance](https://docs.ambient.finance/).

We are implementing the feature as a sidecar contract that plugs into Ambient using their proxy contract pattern.

To implement liquidity mining, we introduce 2 new contracts:

-   `LiquidityMiningPath.sol` (provides interfaces for users to interact with the contract)
-   `LiquidityMining.sol` (provides all of the logic)

## About LiquidityMining Sidecar

The LiquidityMining sidecar was built to implement a liquidity mining protocol for Ambient. Canto plans to use this sidecar to incentivize liquidity for Ambient pools deployed on Canto.

### Incentive Mechanism

The LiquidityMining sidecar works by incentivizing a specific width of liquidity, based on the current tick. As Canto plans to use LiquidityMining to incentivize stable pools, the range currentTick-10 to currentTick+10 is incentivized. This means that the range in which a user provides liquidity **must be a superset** of [currentTick-10, currentTick+10] in order for them to receive incentives. If the user's range only includes part of [currentTick-10, currentTick+10], they will not receive incentives. In total, the user must be providing liquidity across at least 21 ticks (the current tick, and 10 on either side).

It is expected that users will provide liquidity with a small buffer on either side of the range to ensure they will always be receiving rewards, even in the case of small price movements.

### Liquidity Mining Rewards

From a high level, the idea behind the liquidity mining sidecar is to track the time weighted liquidity (global and per-user) for ambient & concentrated (per tick) positions. This enables the protocol to calculate the percentage of in-range liquidity that was provided by a user over a time span and then pays out this percentage of the global rewards to the user.

Let's look at a simple example. If the rewards for 1 week are 10 CANTO, and only `LP A` is providing liquidity to the protocol, then`LP A` will receive all 10 CANTO as their reward.

If there are 2 liquidity providers, `LP A` and `LP B`, and they each provide liquidity for the entirety of the week, they will split the rewards in half and each receive 5 CANTO.

### Implementation

[These](https://github.com/Canto-Network/CrocSwap-protocol/blob/7566620ec5861ef910a89ba559120fd476847d66/contracts/callpaths/LiquidityMiningPath.sol#L31-L47) funtions are used to set the weekly reward rate for the liquidity mining sidecar. Reward rates are set by determining a total amount that will be disbursed per week. Governance can choose how many weeks that the reward rate will be set for.

`LiquidityMining.sol` contains all of the logic for accruing and claiming rewards. This is the most important part of the codebase and should be the main focus for wardens.

# Scope

| Contract                                                                                                 | SLOC                   | Purpose                                                                                                    | Libraries used                                             |
| -------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [contracts/callpaths/LiquidityMiningPath.sol](canto-ambient/contracts/callpaths/LiquidityMiningPath.sol) | 19                     | This contract provides the interface for the CrocSwapDex contract to call with `userCmd` and `protocolCmd` | [SafeCast](canto-ambient/contracts/libraries/SafeCast.sol) |
| [contracts/mixins/LiquidityMining.sol](canto-ambient/contracts/mixins/LiquidityMining.sol)               | 126 (before formatter) | This contract contains the logic used for liquidity mining                                                 | [SafeCast](canto-ambient/contracts/libraries/SafeCast.sol) |

#### Ambient Hooks (where functions in `LiquidityMining.sol` are called)

| Liquidity Mining Hooks                                                                     | Line Number                                                   | Purpose                                                                      |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [contracts/mixins/MarketSequencer.sol](canto-ambient/contracts/mixins/MarketSequencer.sol) | 244                                                           | Initializes tick tracking                                                    |
| [contracts/mixins/TradeMatcher.sol](contracts/mixins/TradeMatcher.sol)                     | 67-68, 103-104, 140-142, 177-178, 244, 270, 342, 440-443, 486 | Logic to accrue rewards on dex actions such as minting and burning liquidity |

## Out of scope

All other contracts are out of scope. However, for the purpose of this audit, it will be useful to understand other Ambient Finance contracts.

# Additional Context

### Ambient Overview

-   [Ambient Docs](https://docs.ambient.finance/)
-   [Ambient Github](https://github.com/CrocSwap/CrocSwap-protocol) (was formerly named CrocSwap)

Ambient is a single-contract dex that allows liquidity providers to deposit "ambient" liquidity (uniV2 style) or concentrated liquidity (uniV3 style) into any token pair.

The main contract in Ambient Finance is `CrocSwapDex`. This is the only contract that users will ever need to interface with.

Ambient uses proxy contracts called "sidecars" which contain all of the logic that doesn't fit in `CrocSwapDex` due to the EVM contract limit. Sidecar contracts are modular in nature and each one is responsible for a unique function.

**Sidecar Contracts:**

-   BootPath
    -   special sidecar contract used to install other sidecar contracts
-   ColdPath
    -   handles creation of new pools
-   WarmPath
    -   handles liquidity management, such as minting/burning
-   **LiquidityMiningPath**
    -   new sidecar developed by Canto to handle liquidity mining for both ambient and concentrated liquidity
-   KnockoutPath
    -   handles logic for knockout liquidity
-   LongPath
    -   contains logic for parsing and executing arbitrarily long compound orders
-   MicroPaths
    -   contains functions related to single atomic actions to be called within the context of a longer compound action on a pre-loaded pool's liquidity curve
-   SafeModePath
    -   for emergency mode

### How to interact with Ambient Contracts

To interact with Ambient, users must send ABI encoded parameters to the CrocSwapDex. For all actions that can be made by users, the `userCmd` function is used. For things related to governance, the `protocolCmd` function is used.

The `userCmd` and `protocolCmd` function signatures are as shown:

```solidity=
function protocolCmd (uint16 callpath, bytes calldata cmd, bool sudo)
function userCmd (uint16 callpath, bytes calldata cmd)
```

#### Callpath

The `callpath` parameter is used to determine which sidecar contract to send the cmd to.

Sidecar paths are defined below:

```solidity=
uint16 constant BOOT_PROXY_IDX = 0;
uint16 constant SWAP_PROXY_IDX = 1;
uint16 constant LP_PROXY_IDX = 2;
uint16 constant COLD_PROXY_IDX = 3;
uint16 constant LONG_PROXY_IDX = 4;
uint16 constant MICRO_PROXY_IDX = 5;
uint16 constant MULTICALL_PROXY_IDX = 6;
uint16 constant KNOCKOUT_LP_PROXY_IDX = 7;
uint16 constant LIQUIDITY_MINING_PROXY_IDX = 8;
uint16 constant FLAG_CROSS_PROXY_IDX = 3500;
uint16 constant SAFE_MODE_PROXY_PATH = 9999;
```

For example, if a user wanted to provide liquidity (which is handled by WarmPath), they would call the `userCmd` function with `callpath` set to 2.

#### Cmd

`cmd` is an ABI encoded calldata that is fed to the sidecar contract specified by `callpath`. The sidecar will parse the ABI encoded parameters in order to get all of the parameters necessary for the specific action that is desired.

The first parameter that is encoded into `cmd` will always be the `code`. `code` is used to determine which specific function inside the sidecar will be called.

Continuing the example from above, if a user wanted to provide liquidity, they call the WarmPath using `code` 11, which would would trigger the `mintConcentratedQty()` function inside WarmPath.

Here is a sample transaction to provide liquidity, scripted in JS.

```javascript
const CrocSwapDex = await hre.ethers.getContractFactory("CrocSwapDex");
const dex = await CrocSwapDex.attach(dexAddress);

const currentTick = 276324;
const ZERO_ADDR = "0x0000000000000000000000000000000000000000";

// Mint concentrated liquidity
let mintConcentratedLiqCmd = abi.encode(
	[
		"uint8",
		"address",
		"address",
		"uint256",
		"int24",
		"int24",
		"uint128",
		"uint128",
		"uint128",
		"uint8",
		"address",
	],
	[
		11, // <== CODE (call function mintConcentratedQty in WarmPath)
		cNoteAddress, // base token
		usdcAddress, // quote token
		36000, // poolIDX
		currentTick - 10, // tickLower
		currentTick + 10, // tickUpper
		BigNumber.from("5000000000000000000"), // amount of base token to send
		BigNumber.from("16602069666338596454400000"), // min price
		BigNumber.from("20291418481080506777600000"), // max price
		0, // reserve flag
		ZERO_ADDR, // lp conduit address (0 if not using)
	]
);

// use callpath 2 to send cmd to WarmPath, which handles liquidity management
tx = await dex.userCmd(2, mintConcentratedLiqCmd, { gasLimit: 6000000 });
```

## Attack ideas (Where to look for bugs)

-   liquidity providers being able to withdraw more rewards than they have accrued
-   liquidity providers getting less rewards than they are owed

## Scoping Details

[ ⭐️ SPONSORS: please confirm/edit the information below. ]

| Question                                                                                      | Answer                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Repository                                                                                    | https://github.com/Canto-Network/CrocSwap-protocol/tree/audit-final                                                                                                                                                                                                            |
| How many contracts are in scope                                                               | 2                                                                                                                                                                                                                                                                              |
| Total SLoC for these contracts                                                                | 145                                                                                                                                                                                                                                                                            |
| How many external imports are there?                                                          | 3                                                                                                                                                                                                                                                                              |
| How many separate interfaces and struct definitions are there for the contracts within scope? | 1                                                                                                                                                                                                                                                                              |
| Does most of your code generally use composition or inheritance?                              | Inheritance                                                                                                                                                                                                                                                                    |
| How many external calls                                                                       | 0                                                                                                                                                                                                                                                                              |
| What is the overall line coverage percentage provided by your tests?:                         | 75                                                                                                                                                                                                                                                                             |
| Please describe required context:                                                             |                                                                                                                                                                                                                                                                                |
| Are there any novel or unique curve logic or mathematical models?:                            | n/a                                                                                                                                                                                                                                                                            |
| Upgrade of existing system?                                                                   | False -                                                                                                                                                                                                                                                                        |
| "All that apply" checked:                                                                     | AMM, ERC-20 Token                                                                                                                                                                                                                                                              |
| Need to understand other part of codebase:                                                    | Yes -                                                                                                                                                                                                                                                                          |
| Other codebase context                                                                        | This is a liquidity mining protocol for Ambient Dex. As such, an understanding of Ambient Dex will be very helpful for this audit. However, it is not necessary to understand all parts of Ambient. Just an understanding of how providing liquidity works will be sufficient. |
| Oracle                                                                                        | No -                                                                                                                                                                                                                                                                           |
| Fork?                                                                                         | False                                                                                                                                                                                                                                                                          |
| If fork, describe your customizations/differences:                                            |                                                                                                                                                                                                                                                                                |
| Unique logic                                                                                  | concentrated liquidity (uni v3 style)                                                                                                                                                                                                                                          |
| Does it use a side chain?                                                                     | False                                                                                                                                                                                                                                                                          |
| If yes, is it EVM-compatible?                                                                 |                                                                                                                                                                                                                                                                                |
| Areas to focus on/break                                                                       | This LM protocol will be used to incentivize pools on Canto. We would like to ensure that the amount of incentives released is exactly as we specify and the wallets who receive the incentives are the correct ones (LPing the correct ranges)                                |

# Tests

Check [README](canto-ambient/README.md)
