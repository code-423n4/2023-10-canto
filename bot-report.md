**Note:** There is a section for disputed findings below the usual findings sections

## Summary

### Low Risk Issues

| |Issue|Instances|
|-|:-|:-:|
| [[L&#x2011;01](#l01-payable-function-does-not-transfer-eth)] | `payable` function does not transfer Eth | 5 | 
| [[L&#x2011;02](#l02-loss-of-precision)] | Loss of precision | 2 | 
| [[L&#x2011;03](#l03-state-variables-not-capped-at-reasonable-values)] | State variables not capped at reasonable values | 2 | 
| [[L&#x2011;04](#l04-unsafe-downcast)] | Unsafe downcast | 20 | 

Total: 29 instances over 4 issues

### Non-critical Issues

| |Issue|Instances|
|-|:-|:-:|
| [[N&#x2011;01](#n01-if-statement-can-be-converted-to-a-ternary)] | `if`-statement can be converted to a ternary | 1 | 
| [[N&#x2011;02](#n02-public-functions-not-called-by-the-contract-should-be-declared-external-instead)] | `public` functions not called by the contract should be declared `external` instead | 3 | 
| [[N&#x2011;03](#n03-array-is-pushed-but-not-poped)] | Array is `push()`ed but not `pop()`ed | 2 | 
| [[N&#x2011;04](#n04-consider-adding-formal-verification-proofs)] | Consider adding formal verification proofs | 1 | 
| [[N&#x2011;05](#n05-consider-bounding-input-array-length)] | Consider bounding input array length | 2 | 
| [[N&#x2011;06](#n06-consider-using-safetransferlibsafetransfereth-or-addresssendvalue-for-clearer-semantic-meaning)] | Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning | 2 | 
| [[N&#x2011;07](#n07-constants-in-comparisons-should-appear-on-the-left-side)] | Constants in comparisons should appear on the left side | 10 | 
| [[N&#x2011;08](#n08-contract-should-expose-an-interface)] | Contract should expose an `interface` | 7 | 
| [[N&#x2011;09](#n09-contract-timekeeping-will-break-earlier-than-the-ethereum-network-itself-will-stop-working)] | Contract timekeeping will break earlier than the Ethereum network itself will stop working | 12 | 
| [[N&#x2011;10](#n10-contracts-should-have-full-test-coverage)] | Contracts should have full test coverage | 1 | 
| [[N&#x2011;11](#n11-custom-errors-should-be-used-rather-than-revertrequire)] | Custom errors should be used rather than `revert()`/`require()` | 8 | 
| [[N&#x2011;12](#n12-duplicated-requirerevert-checks-should-be-refactored-to-a-modifier-or-function)] | Duplicated `require()`/`revert()` checks should be refactored to a modifier or function | 3 | 
| [[N&#x2011;13](#n13-high-cyclomatic-complexity)] | High cyclomatic complexity | 1 | 
| [[N&#x2011;14](#n14-import-declarations-should-import-specific-identifiers-rather-than-the-whole-file)] | Import declarations should import specific identifiers, rather than the whole file | 8 | 
| [[N&#x2011;15](#n15-large-numeric-literals-should-use-underscores-for-readability)] | Large numeric literals should use underscores for readability | 1 | 
| [[N&#x2011;16](#n16-large-or-complicated-code-bases-should-implement-invariant-tests)] | Large or complicated code bases should implement invariant tests | 1 | 
| [[N&#x2011;17](#n17-long-functions-should-be-refactored-into-multiple-smaller-functions)] | Long functions should be refactored into multiple, smaller, functions | 1 | 
| [[N&#x2011;18](#n18-missing-event-and-or-timelock-for-critical-parameter-change)] | Missing event and or timelock for critical parameter change | 2 | 
| [[N&#x2011;19](#n19-named-imports-of-parent-contracts-are-missing)] | Named imports of parent contracts are missing | 2 | 
| [[N&#x2011;20](#n20-natspec-contract-declarations-should-have-author-tags)] | NatSpec: Contract declarations should have `@author` tags | 2 | 
| [[N&#x2011;21](#n21-natspec-contract-declarations-should-have-dev-tags)] | NatSpec: Contract declarations should have `@dev` tags | 2 | 
| [[N&#x2011;22](#n22-natspec-contract-declarations-should-have-notice-tags)] | NatSpec: Contract declarations should have `@notice` tags | 2 | 
| [[N&#x2011;23](#n23-natspec-contract-declarations-should-have-title-tags)] | NatSpec: Contract declarations should have `@title` tags | 2 | 
| [[N&#x2011;24](#n24-natspec-contract-declarations-should-have-descriptions)] | NatSpec: Contract declarations should have descriptions | 2 | 
| [[N&#x2011;25](#n25-natspec-function-param-tag-is-missing)] | NatSpec: Function `@param` tag is missing | 40 | 
| [[N&#x2011;26](#n26-natspec-function-return-tag-is-missing)] | NatSpec: Function `@return` tag is missing | 1 | 
| [[N&#x2011;27](#n27-natspec-function-declarations-should-have-notice-tags)] | NatSpec: Function declarations should have `@notice` tags | 7 | 
| [[N&#x2011;28](#n28-natspec-function-declarations-should-have-descriptions)] | NatSpec: Function declarations should have descriptions | 7 | 
| [[N&#x2011;29](#n29-natspec-state-variable-declarations-should-have-descriptions)] | NatSpec: State variable declarations should have descriptions | 1 | 
| [[N&#x2011;30](#n30-numeric-values-having-to-do-with-time-should-use-time-units-for-readability)] | Numeric values having to do with time should use time units for readability | 1 | 
| [[N&#x2011;31](#n31-setters-should-prevent-re-setting-of-the-same-value)] | Setters should prevent re-setting of the same value | 2 | 
| [[N&#x2011;32](#n32-style-guide-lines-are-too-long)] | Style guide: Lines are too long | 6 | 
| [[N&#x2011;33](#n33-style-guide-non-externalpublic-function-names-should-begin-with-an-underscore)] | Style guide: Non-`external`/`public` function names should begin with an underscore | 8 | 
| [[N&#x2011;34](#n34-style-guide-non-externalpublic-variable-names-should-begin-with-an-underscore)] | Style guide: Non-`external`/`public` variable names should begin with an underscore | 1 | 
| [[N&#x2011;35](#n35-visibility-should-be-set-explicitly-rather-than-defaulting-to-internal)] | Visibility should be set explicitly rather than defaulting to `internal` | 1 | 
| [[N&#x2011;36](#n36-vulnerable-versions-of-packages-are-being-used)] | Vulnerable versions of packages are being used | 1 | 

Total: 154 instances over 36 issues

### Gas Optimizations

| |Issue|Instances|Total Gas Saved|
|-|:-|:-:|:-:|
| [[G&#x2011;01](#g01-using-storage-instead-of-memory-for-state-variables-saves-gas)] | Using `storage` instead of `memory` for state variables saves gas | 3 |  6300 |
| [[G&#x2011;02](#g02-avoid-updating-storage-when-the-value-hasnt-changed)] | Avoid updating storage when the value hasn't changed | 2 |  1600 |
| [[G&#x2011;03](#g03-avoid-fetching-a-low-level-calls-return-data-by-using-assembly)] | Avoid fetching a low-level call's return data by using assembly | 2 |  318 |
| [[G&#x2011;04](#g04-ii-should-be-uncheckediuncheckedi-when-it-is-not-possible-for-them-to-overflow-as-is-the-case-when-used-in-for--and-while-loops)] | `++i`/`i++` should be `unchecked{++i}`/`unchecked{i++}` when it is not possible for them to overflow, as is the case when used in `for`- and `while`-loops | 5 |  300 |
| [[G&#x2011;05](#g05-usage-of-uintsints-smaller-than-32-bytes-256-bits-incurs-overhead)] | Usage of `uints`/`ints` smaller than 32 bytes (256 bits) incurs overhead | 6 |  132 |
| [[G&#x2011;06](#g06-optimize-names-to-save-gas)] | Optimize names to save gas | 1 |  22 |
| [[G&#x2011;07](#g07-unchecked---can-be-used-on-the-division-of-two-uints-in-order-to-save-gas)] | `unchecked {}`  can be used on the division of two `uint`s in order to save gas | 6 |  120 |
| [[G&#x2011;08](#g08-internalprivate-functions-only-called-once-can-be-inlined-to-save-gas)] | `internal`/`private` functions only called once can be inlined to save gas | 4 |  80 |
| [[G&#x2011;09](#g09-i-costs-less-gas-than-i-especially-when-its-used-in-for-loops---ii---too)] | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 1 |  5 |
| [[G&#x2011;10](#g10--costs-less-gas-than-)] | `>=` costs less gas than `>` | 8 |  24 |
| [[G&#x2011;11](#g11-arraylength-should-not-be-looked-up-in-every-loop-of-a-for-looparray)] | `<array>.length` should not be looked up in every loop of a `for`-loop | 2 |  6 |
| [[G&#x2011;12](#g12-splitting-require-statements-that-use--saves-gas)] | Splitting `require()` statements that use `&&` saves gas | 2 |  6 |
| [[G&#x2011;13](#g13-use-custom-errors-rather-than-revertrequire-strings-to-save-gas)] | Use custom errors rather than `revert()`/`require()` strings to save gas | 8 |  - |

Total: 50 instances over 13 issues with **8913 gas** saved

Gas totals are estimates based on data from the Ethereum Yellowpaper. The estimates use the lower bounds of ranges and count two iterations of each `for`-loop. All values above are runtime, not deployment, values; deployment values are listed in the individual issue descriptions. The table above as well as its gas numbers do not include any of the excluded findings.

### Disputed Issues

The issues below may be reported by other bots/wardens, but can be penalized/ignored since either the rule or the specified instances are invalid

| |Issue|Instances|
|-|:-|:-:|
| [[D&#x2011;01](#d01-internal-functions-not-called-by-the-contract-should-be-removed)] | ~~`internal` functions not called by the contract should be removed~~ | 4 | 
| [[D&#x2011;02](#d02-array-lengths-not-checked)] | ~~Array lengths not checked~~ | 4 | 
| [[D&#x2011;03](#d03-avoid-fetching-a-low-level-calls-return-data-by-using-assembly)] | ~~Avoid fetching a low-level call's return data by using assembly~~ | 2 | 
| [[D&#x2011;04](#d04-change-public-function-visibility-to-external-to-save-gas)] | ~~Change `public` function visibility to `external` to save gas~~ | 2 | 
| [[D&#x2011;05](#d05-consider-implementing-two-step-procedure-for-updating-protocol-addresses)] | ~~Consider implementing two-step procedure for updating protocol addresses~~ | 2 | 
| [[D&#x2011;06](#d06-default-bool-values-are-manually-reset)] | ~~Default `bool` values are manually reset~~ | 2 | 
| [[D&#x2011;07](#d07-duplicated-requirerevert-checks-should-be-refactored-to-a-modifier-or-function)] | ~~Duplicated `require()`/`revert()` checks should be refactored to a modifier or function~~ | 4 | 
| [[D&#x2011;08](#d08-duplicated-requirerevert-checks-should-be-refactored-to-a-modifier-or-function-to-save-gas)] | ~~Duplicated require()/revert() checks should be refactored to a modifier Or function to save gas~~ | 3 | 
| [[D&#x2011;09](#d09-enable-ir-based-code-generation)] | ~~Enable IR-based code generation~~ | 1 | 
| [[D&#x2011;10](#d10-external-call-recipient-may-consume-all-transaction-gas)] | ~~External call recipient may consume all transaction gas~~ | 2 | 
| [[D&#x2011;11](#d11-initialization-can-be-front-run)] | ~~Initialization can be front-run~~ | 1 | 
| [[D&#x2011;12](#d12-loss-of-precision)] | ~~Loss of precision~~ | 8 | 
| [[D&#x2011;13](#d13-missing-contract-existence-checks-before-low-level-calls)] | ~~Missing contract-existence checks before low-level calls~~ | 2 | 
| [[D&#x2011;14](#d14-operator--costs-more-gas-than---for-state-variables)] | ~~Operator += costs more gas than = + for state variables~~ | 4 | 
| [[D&#x2011;15](#d15-public-functions-not-used-internally-can-be-marked-as-external-to-save-gas)] | ~~Public functions not used internally can be marked as external to save gas~~ | 3 | 
| [[D&#x2011;16](#d16-save-gas-with-the-use-of-specific-import-statements)] | ~~Save gas with the use of specific import statements~~ | 8 | 
| [[D&#x2011;17](#d17-spdx-identifier-should-be-the-in-the-first-line-of-a-solidity-file)] | ~~SPDX identifier should be the in the first line of a solidity file~~ | 2 | 
| [[D&#x2011;18](#d18-state-variable-read-in-a-loop)] | ~~State variable read in a loop~~ | 24 | 
| [[D&#x2011;19](#d19-style-guide-contract-does-not-follow-the-solidity-style-guides-suggested-layout-ordering)] | ~~Style guide: Contract does not follow the Solidity style guide's suggested layout ordering~~ | 2 | 
| [[D&#x2011;20](#d20-timestamp-may-be-manipulation)] | ~~Timestamp may be manipulation~~ | 23 | 
| [[D&#x2011;21](#d21-unsafe-downcast)] | ~~Unsafe downcast~~ | 2 | 
| [[D&#x2011;22](#d22-unusual-loop-variable)] | ~~Unusual loop variable~~ | 4 | 
| [[D&#x2011;23](#d23-use--0-instead-of--0-for-unsigned-integer-comparison)] | ~~Use != 0 instead of > 0 for unsigned integer comparison~~ | 5 | 
| [[D&#x2011;24](#d24-using-calldata-instead-of-memory-for-read-only-arguments-in-external-functions-saves-gas)] | ~~Using `calldata` instead of `memory` for read-only arguments in `external` functions saves gas~~ | 4 | 

Total: 118 instances over 24 issues





## Low Risk Issues


### [L&#x2011;01] `payable` function does not transfer Eth
Funds sent along with the call to this function will be lost

*There are 5 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

41       function userCmd(bytes calldata input) public payable {
42           (uint8 code, bytes32 poolHash, int24 lowerTick, int24 upperTick, uint32[] memory weeksToClaim) =
43               abi.decode(input, (uint8, bytes32, int24, int24, uint32[]));
44   
45           if (code == UserCmd.CLAIM_CONC_REWARDS_CODE) {
46               claimConcentratedRewards(poolHash, lowerTick, upperTick, weeksToClaim);
47           } else if (code == UserCmd.CLAIM_AMB_REWARDS_CODE) {
48               claimAmbientRewards(poolHash, weeksToClaim);
49           } else {
50               revert("Invalid user command");
51           }
52:      }

54       function claimConcentratedRewards(bytes32 poolIdx, int24 lowerTick, int24 upperTick, uint32[] memory weeksToClaim)
55           public
56           payable
57       {
58           claimConcentratedRewards(payable(msg.sender), poolIdx, lowerTick, upperTick, weeksToClaim);
59:      }

61       function claimAmbientRewards(bytes32 poolIdx, uint32[] memory weeksToClaim) public payable {
62           claimAmbientRewards(payable(msg.sender), poolIdx, weeksToClaim);
63:      }

65       function setConcRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
66           // require(msg.sender == governance_, "Only callable by governance");
67           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
68           while (weekFrom <= weekTo) {
69               concRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
70               weekFrom += uint32(WEEK);
71           }
72:      }

74       function setAmbRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
75           // require(msg.sender == governance_, "Only callable by governance");
76           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
77           while (weekFrom <= weekTo) {
78               ambRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
79               weekFrom += uint32(WEEK);
80           }
81:      }

```
*GitHub*: [41](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L41-L52), [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L54-L59), [61](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L61-L63), [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L72), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L81)


### [L&#x2011;02] Loss of precision
Division by large numbers may result in the result being zero, due to solidity not supporting fractions. Consider requiring a minimum amount for the numerator to ensure that it is always larger than the denominator

*There are 2 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

188:                  rewardsToSend += inRangeLiquidityOfPosition * concRewardPerWeek_[poolIdx][week] / overallInRangeLiquidity;

277                   uint256 rewardsForWeek = (timeWeightedWeeklyPositionAmbLiquidity_[
278                       poolIdx
279                   ][posKey][week] * ambRewardPerWeek_[poolIdx][week]) /
280:                      overallTimeWeightedLiquidity;

```
*GitHub*: [188](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L188), [277](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L277-L280)


### [L&#x2011;03] State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

69:              concRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;

78:              ambRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;

```
*GitHub*: [69](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L69-L69), [78](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L78-L78)


### [L&#x2011;04] Unsafe downcast
When a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*There are 20 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

/// @audit uint32
18:               .TickTracking(uint32(block.timestamp), 0);

/// @audit uint32
31:               .exitTimestamp = uint32(block.timestamp);

/// @audit uint32
33:               .TickTracking(uint32(block.timestamp), 0);

/// @audit uint32
51:                   uint32 currWeek = uint32((time / WEEK) * WEEK);

/// @audit uint32
52:                   uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

/// @audit uint32
53                    uint32 dt = uint32(
54                        nextWeek < block.timestamp
55                            ? nextWeek - time
56                            : block.timestamp - time
57:                   );

/// @audit uint32
62            timeWeightedWeeklyGlobalConcLiquidityLastSet_[poolIdx] = uint32(
63                block.timestamp
64:           );

/// @audit uint32
96:                       uint32 currWeek = uint32((time / WEEK) * WEEK);

/// @audit uint32
97:                       uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

/// @audit uint32
98                        uint32 dt = uint32(
99                            nextWeek < block.timestamp
100                               ? nextWeek - time
101                               : block.timestamp - time
102:                      );

/// @audit uint32
116:                              tickActiveEnd = uint32(nextWeek < block.timestamp ? nextWeek : block.timestamp);

/// @audit uint32
153:          ] = uint32(block.timestamp);

/// @audit uint32
208:                  uint32 currWeek = uint32((time / WEEK) * WEEK);

/// @audit uint32
209:                  uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

/// @audit uint32
210                   uint32 dt = uint32(
211                       nextWeek < block.timestamp
212                           ? nextWeek - time
213                           : block.timestamp - time
214:                  );

/// @audit uint32
219           timeWeightedWeeklyGlobalAmbLiquidityLastSet_[poolIdx] = uint32(
220               block.timestamp
221:          );

/// @audit uint32
238:                  uint32 currWeek = uint32((time / WEEK) * WEEK);

/// @audit uint32
239:                  uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

/// @audit uint32
240                   uint32 dt = uint32(
241                       nextWeek < block.timestamp
242                           ? nextWeek - time
243                           : block.timestamp - time
244:                  );

/// @audit uint32
253:          ] = uint32(block.timestamp);

```
*GitHub*: [18](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L18), [31](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L31), [33](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L33), [51](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L51), [52](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L52), [53](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L53-L57), [62](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L62-L64), [96](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L96), [97](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L97), [98](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L98-L102), [116](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L116), [153](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L153), [208](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L208), [209](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L209), [210](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L210-L214), [219](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L219-L221), [238](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L238), [239](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L239), [240](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L240-L244), [253](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L253)

## Non-critical Issues


### [N&#x2011;01] `if`-statement can be converted to a ternary
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*There is one instance of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

107                          if (tickTracking.enterTimestamp < time) {
108                              // Tick was already active when last claim happened, only accrue from last claim timestamp
109                              tickActiveStart = time;
110                          } else {
111                              // Tick has become active this week
112                              tickActiveStart = tickTracking.enterTimestamp;
113:                         }

```
*GitHub*: [107](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L107-L113)


### [N&#x2011;02] `public` functions not called by the contract should be declared `external` instead
Contracts [are allowed](https://docs.soliditylang.org/en/latest/contracts.html#function-overriding) to override their parents' functions and change the visibility from `external` to `public`.

*There are 3 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

26:       function protocolCmd(bytes calldata cmd) public virtual {

41:       function userCmd(bytes calldata input) public payable {

85:       function acceptCrocProxyRole(address, uint16 slot) public pure returns (bool) {

```
*GitHub*: [26](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L26), [41](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L41), [85](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L85)


### [N&#x2011;03] Array is `push()`ed but not `pop()`ed
Array entries are added but are never removed. Consider whether this should be the case, or whether there should be a maximum, or whether old entries should be removed. Cases where there are specific potential problems will be flagged separately under a different issue.

*There are 2 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

19:          tickTracking_[poolIdx][tick].push(tickTrackingData);

34:          tickTracking_[poolIdx][entryTick].push(tickTrackingData);

```
*GitHub*: [19](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L19-L19), [34](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L34-L34)


### [N&#x2011;04] Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)

*There is one instance of this issue:*

```solidity
File: Various Files


```


### [N&#x2011;05] Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to `require()` that the length of the array is below some reasonable maximum, so that the user doesn't have to use up a full transaction's gas only to see that the transaction reverts.

*There are 2 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

174          for (uint256 i; i < weeksToClaim.length; ++i) {
175              uint32 week = weeksToClaim[i];
176              require(week + WEEK < block.timestamp, "Week not over yet");
177              require(
178                  !concLiquidityRewardsClaimed_[poolIdx][posKey][week],
179                  "Already claimed"
180              );
181              uint256 overallInRangeLiquidity = timeWeightedWeeklyGlobalConcLiquidity_[poolIdx][week];
182              if (overallInRangeLiquidity > 0) {
183                  uint256 inRangeLiquidityOfPosition;
184                  for (int24 j = lowerTick + 10; j <= upperTick - 10; ++j) {
185                      inRangeLiquidityOfPosition += timeWeightedWeeklyPositionInRangeConcLiquidity_[poolIdx][posKey][week][j];
186                  }
187                  // Percentage of this weeks overall in range liquidity that was provided by the user times the overall weekly rewards
188                  rewardsToSend += inRangeLiquidityOfPosition * concRewardPerWeek_[poolIdx][week] / overallInRangeLiquidity;
189              }
190              concLiquidityRewardsClaimed_[poolIdx][posKey][week] = true;
191:         }

266          for (uint256 i; i < weeksToClaim.length; ++i) {
267              uint32 week = weeksToClaim[i];
268              require(week + WEEK < block.timestamp, "Week not over yet");
269              require(
270                  !ambLiquidityRewardsClaimed_[poolIdx][posKey][week],
271                  "Already claimed"
272              );
273              uint256 overallTimeWeightedLiquidity = timeWeightedWeeklyGlobalAmbLiquidity_[
274                      poolIdx
275                  ][week];
276              if (overallTimeWeightedLiquidity > 0) {
277                  uint256 rewardsForWeek = (timeWeightedWeeklyPositionAmbLiquidity_[
278                      poolIdx
279                  ][posKey][week] * ambRewardPerWeek_[poolIdx][week]) /
280                      overallTimeWeightedLiquidity;
281                  rewardsToSend += rewardsForWeek;
282              }
283              ambLiquidityRewardsClaimed_[poolIdx][posKey][week] = true;
284:         }

```
*GitHub*: [174](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L174-L191), [266](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L266-L284)


### [N&#x2011;06] Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning
These Functions indicate their purpose with their name more clearly than using low-level calls.

*There are 2 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

193:             (bool sent, ) = owner.call{value: rewardsToSend}("");

286:             (bool sent, ) = owner.call{value: rewardsToSend}("");

```
*GitHub*: [193](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L193-L193), [286](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L286-L286)


### [N&#x2011;07] Constants in comparisons should appear on the left side
Doing so will prevent [typo bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*There are 10 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

67:          require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");

76:          require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");

```
*GitHub*: [67](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L67-L67), [67](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L67-L67), [76](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L76-L76), [76](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L76-L76)

```solidity
File: contracts/mixins/LiquidityMining.sol

47:          if (lastAccrued != 0) {

86:          if (lastAccrued != 0) {

142:                     if (tickTracking_[poolIdx][i][numTickTracking - 1].exitTimestamp == 0) {

114:                         if (tickTracking.exitTimestamp == 0) {

204:         if (lastAccrued != 0) {

233:         if (lastAccrued != 0) {

```
*GitHub*: [47](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L47-L47), [86](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L86-L86), [142](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L142-L142), [114](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L114-L114), [204](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L204-L204), [233](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L233-L233)


### [N&#x2011;08] Contract should expose an `interface`
The `contract`s should expose an `interface` so that other projects can more easily integrate with it, without having to develop their own non-standard variants.

*There are 7 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

26:      function protocolCmd(bytes calldata cmd) public virtual {

41:      function userCmd(bytes calldata input) public payable {

54       function claimConcentratedRewards(bytes32 poolIdx, int24 lowerTick, int24 upperTick, uint32[] memory weeksToClaim)
55           public
56           payable
57:      {

61:      function claimAmbientRewards(bytes32 poolIdx, uint32[] memory weeksToClaim) public payable {

65       function setConcRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
66:          // require(msg.sender == governance_, "Only callable by governance");

74       function setAmbRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
75:          // require(msg.sender == governance_, "Only callable by governance");

85:      function acceptCrocProxyRole(address, uint16 slot) public pure returns (bool) {

```
*GitHub*: [26](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L26-L26), [41](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L41-L41), [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L54-L57), [61](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L61-L61), [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L66), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L75), [85](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L85-L85)


### [N&#x2011;09] Contract timekeeping will break earlier than the Ethereum network itself will stop working
When a timestamp is downcast from `uint256` to `uint32`, the value will wrap in the year 2106, and the contracts will break. Other downcasts will have different endpoints. Consider whether your contract is intended to live past the size of the type being used.

*There are 12 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

18:              .TickTracking(uint32(block.timestamp), 0);

31:              .exitTimestamp = uint32(block.timestamp);

33:              .TickTracking(uint32(block.timestamp), 0);

53                   uint32 dt = uint32(
54                       nextWeek < block.timestamp
55                           ? nextWeek - time
56                           : block.timestamp - time
57:                  );

62           timeWeightedWeeklyGlobalConcLiquidityLastSet_[poolIdx] = uint32(
63               block.timestamp
64:          );

98                       uint32 dt = uint32(
99                           nextWeek < block.timestamp
100                              ? nextWeek - time
101                              : block.timestamp - time
102:                     );

116:                             tickActiveEnd = uint32(nextWeek < block.timestamp ? nextWeek : block.timestamp);

153:         ] = uint32(block.timestamp);

210                  uint32 dt = uint32(
211                      nextWeek < block.timestamp
212                          ? nextWeek - time
213                          : block.timestamp - time
214:                 );

219          timeWeightedWeeklyGlobalAmbLiquidityLastSet_[poolIdx] = uint32(
220              block.timestamp
221:         );

240                  uint32 dt = uint32(
241                      nextWeek < block.timestamp
242                          ? nextWeek - time
243                          : block.timestamp - time
244:                 );

253:         ] = uint32(block.timestamp);

```
*GitHub*: [18](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L18-L18), [31](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L31-L31), [33](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L33-L33), [53](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L53-L57), [62](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L62-L64), [98](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L98-L102), [116](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L116-L116), [153](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L153-L153), [210](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L210-L214), [219](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L219-L221), [240](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L240-L244), [253](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L253-L253)


### [N&#x2011;10] Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*There is one instance of this issue:*

```solidity
File: Various Files


```


### [N&#x2011;11] Custom errors should be used rather than `revert()`/`require()`
Custom errors are available from solidity version 0.8.4. Custom errors are more easily processed in `try`-`catch` blocks, and are easier to re-use and maintain.

*There are 8 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

67:           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");

76:           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");

```
*GitHub*: [67](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L67), [76](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L76)

```solidity
File: contracts/mixins/LiquidityMining.sol

176:              require(week + WEEK < block.timestamp, "Week not over yet");

177               require(
178                   !concLiquidityRewardsClaimed_[poolIdx][posKey][week],
179                   "Already claimed"
180:              );

194:              require(sent, "Sending rewards failed");

268:              require(week + WEEK < block.timestamp, "Week not over yet");

269               require(
270                   !ambLiquidityRewardsClaimed_[poolIdx][posKey][week],
271                   "Already claimed"
272:              );

287:              require(sent, "Sending rewards failed");

```
*GitHub*: [176](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L176), [177](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L177-L180), [194](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L194), [268](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L268), [269](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L269-L272), [287](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L287)


### [N&#x2011;12] Duplicated `require()`/`revert()` checks should be refactored to a modifier or function
The compiler will inline the function, which will avoid `JUMP` instructions usually associated with functions

*There are 3 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

76:           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");

```
*GitHub*: [76](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L76)

```solidity
File: contracts/mixins/LiquidityMining.sol

268:              require(week + WEEK < block.timestamp, "Week not over yet");

287:              require(sent, "Sending rewards failed");

```
*GitHub*: [268](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L268), [287](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L287)


### [N&#x2011;13] High cyclomatic complexity
Consider breaking down these blocks into more manageable units, by splitting things into utility functions, by reducing nesting, and by using early returns

*There is one instance of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

69       function accrueConcentratedPositionTimeWeightedLiquidity(
70           address payable owner,
71           bytes32 poolIdx,
72           int24 lowerTick,
73           int24 upperTick
74       ) internal {
75           RangePosition72 storage pos = lookupPosition(
76               owner,
77               poolIdx,
78               lowerTick,
79               upperTick
80           );
81           bytes32 posKey = encodePosKey(owner, poolIdx, lowerTick, upperTick);
82           uint32 lastAccrued = timeWeightedWeeklyPositionConcLiquidityLastSet_[
83               poolIdx
84           ][posKey];
85           // Only set time on first call
86           if (lastAccrued != 0) {
87               uint256 liquidity = pos.liquidity_;
88               for (int24 i = lowerTick + 10; i <= upperTick - 10; ++i) {
89                   uint32 tickTrackingIndex = tickTrackingIndexAccruedUpTo_[poolIdx][posKey][i];
90                   uint32 origIndex = tickTrackingIndex;
91                   uint32 numTickTracking = uint32(tickTracking_[poolIdx][i].length);
92                   uint32 time = lastAccrued;
93                   // Loop through all in-range time spans for the tick or up to the current time (if it is still in range)
94                   while (time < block.timestamp && tickTrackingIndex < numTickTracking) {
95                       TickTracking memory tickTracking = tickTracking_[poolIdx][i][tickTrackingIndex];
96                       uint32 currWeek = uint32((time / WEEK) * WEEK);
97                       uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);
98                       uint32 dt = uint32(
99                           nextWeek < block.timestamp
100                              ? nextWeek - time
101                              : block.timestamp - time
102                      );
103                      uint32 tickActiveStart; // Timestamp to use for the liquidity addition
104                      uint32 tickActiveEnd;
105                      if (tickTracking.enterTimestamp < nextWeek) {
106                          // Tick was active before next week, need to add the liquidity
107                          if (tickTracking.enterTimestamp < time) {
108                              // Tick was already active when last claim happened, only accrue from last claim timestamp
109                              tickActiveStart = time;
110                          } else {
111                              // Tick has become active this week
112                              tickActiveStart = tickTracking.enterTimestamp;
113                          }
114                          if (tickTracking.exitTimestamp == 0) {
115                              // Tick still active, do not increase index because we need to continue from here
116                              tickActiveEnd = uint32(nextWeek < block.timestamp ? nextWeek : block.timestamp);
117                          } else {
118                              // Tick is no longer active
119                              if (tickTracking.exitTimestamp < nextWeek) {
120                                  // Exit was in this week, continue with next tick
121                                  tickActiveEnd = tickTracking.exitTimestamp;
122                                  tickTrackingIndex++;
123                                  dt = tickActiveEnd - tickActiveStart;
124                              } else {
125                                  // Exit was in next week, we need to consider the current tick there (i.e. not increase the index)
126                                  tickActiveEnd = nextWeek;
127                              }
128                          }
129                          timeWeightedWeeklyPositionInRangeConcLiquidity_[poolIdx][posKey][currWeek][i] +=
130                              (tickActiveEnd - tickActiveStart) * liquidity;
131                      }
132                      time += dt;
133                  }
134                  if (tickTrackingIndex != origIndex) {
135                      tickTrackingIndexAccruedUpTo_[poolIdx][posKey][i] = tickTrackingIndex;
136                  }
137              }
138          } else {
139              for (int24 i = lowerTick + 10; i <= upperTick - 10; ++i) {
140                  uint32 numTickTracking = uint32(tickTracking_[poolIdx][i].length);
141                  if (numTickTracking > 0) {
142                      if (tickTracking_[poolIdx][i][numTickTracking - 1].exitTimestamp == 0) {
143                          // Tick currently active
144                          tickTrackingIndexAccruedUpTo_[poolIdx][posKey][i] = numTickTracking - 1;
145                      } else {
146                          tickTrackingIndexAccruedUpTo_[poolIdx][posKey][i] = numTickTracking;
147                      }
148                  }
149              }
150          }
151          timeWeightedWeeklyPositionConcLiquidityLastSet_[poolIdx][
152              posKey
153          ] = uint32(block.timestamp);
154:     }

```
*GitHub*: [69](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L69-L154)


### [N&#x2011;14] Import declarations should import specific identifiers, rather than the whole file
Using import declarations of the form `import {<identifier_name>} from "some/file.sol"` avoids polluting the symbol namespace making flattened files smaller, and speeds up compilation (but does not save any gas)

*There are 8 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

5:    import "../libraries/SafeCast.sol";

6:    import "../mixins/StorageLayout.sol";

7:    import "../mixins/LiquidityMining.sol";

8:    import "../libraries/ProtocolCmd.sol";

```
*GitHub*: [5](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L5), [6](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L6), [7](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L7), [8](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L8)

```solidity
File: contracts/mixins/LiquidityMining.sol

5:    import "../libraries/SafeCast.sol";

6:    import "./PositionRegistrar.sol";

7:    import "./StorageLayout.sol";

8:    import "./PoolRegistry.sol";

```
*GitHub*: [5](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L5), [6](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L6), [7](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L7), [8](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L8)


### [N&#x2011;15] Large numeric literals should use underscores for readability


*There is one instance of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

13:      uint256 constant WEEK = 604800; // Week in seconds 604800

```
*GitHub*: [13](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L13-L13)


### [N&#x2011;16] Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.

*There is one instance of this issue:*

```solidity
File: Various Files


```


### [N&#x2011;17] Long functions should be refactored into multiple, smaller, functions


*There is one instance of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

/// @audit 86 lines (79 in the body)
69        function accrueConcentratedPositionTimeWeightedLiquidity(
70            address payable owner,
71            bytes32 poolIdx,
72            int24 lowerTick,
73:           int24 upperTick

```
*GitHub*: [69](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L69-L73)


### [N&#x2011;18] Missing event and or timelock for critical parameter change
Events help non-contract tools to track changes, and timelocks prevent users from being surprised by changes

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

65       function setConcRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
66           // require(msg.sender == governance_, "Only callable by governance");
67           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
68           while (weekFrom <= weekTo) {
69               concRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
70               weekFrom += uint32(WEEK);
71           }
72:      }

74       function setAmbRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
75           // require(msg.sender == governance_, "Only callable by governance");
76           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
77           while (weekFrom <= weekTo) {
78               ambRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
79               weekFrom += uint32(WEEK);
80           }
81:      }

```
*GitHub*: [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L72), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L81)


### [N&#x2011;19] Named imports of parent contracts are missing


*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

/// @audit LiquidityMining
23:  contract LiquidityMiningPath is LiquidityMining {

```
*GitHub*: [23](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L23-L23)

```solidity
File: contracts/mixins/LiquidityMining.sol

/// @audit PositionRegistrar
12:  contract LiquidityMining is PositionRegistrar {

```
*GitHub*: [12](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L12-L12)


### [N&#x2011;20] NatSpec: Contract declarations should have `@author` tags


*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

23   contract LiquidityMiningPath is LiquidityMining {
24       /* @notice Consolidated method for protocol control related commands. 
25:       *         Used to set reward rates */

```
*GitHub*: [23](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L23-L25)

```solidity
File: contracts/mixins/LiquidityMining.sol

12:  contract LiquidityMining is PositionRegistrar {

```
*GitHub*: [12](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L12-L12)


### [N&#x2011;21] NatSpec: Contract declarations should have `@dev` tags
`@dev` is used to explain extra details to developers

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

23   contract LiquidityMiningPath is LiquidityMining {
24       /* @notice Consolidated method for protocol control related commands. 
25:       *         Used to set reward rates */

```
*GitHub*: [23](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L23-L25)

```solidity
File: contracts/mixins/LiquidityMining.sol

12:  contract LiquidityMining is PositionRegistrar {

```
*GitHub*: [12](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L12-L12)


### [N&#x2011;22] NatSpec: Contract declarations should have `@notice` tags
`@notice` is used to explain to end users what the contract does, and the compiler interprets `///` or `/**` comments as this tag if one wasn't explicitly provided

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

23   contract LiquidityMiningPath is LiquidityMining {
24       /* @notice Consolidated method for protocol control related commands. 
25:       *         Used to set reward rates */

```
*GitHub*: [23](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L23-L25)

```solidity
File: contracts/mixins/LiquidityMining.sol

12:  contract LiquidityMining is PositionRegistrar {

```
*GitHub*: [12](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L12-L12)


### [N&#x2011;23] NatSpec: Contract declarations should have `@title` tags


*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

23   contract LiquidityMiningPath is LiquidityMining {
24       /* @notice Consolidated method for protocol control related commands. 
25:       *         Used to set reward rates */

```
*GitHub*: [23](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L23-L25)

```solidity
File: contracts/mixins/LiquidityMining.sol

12:  contract LiquidityMining is PositionRegistrar {

```
*GitHub*: [12](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L12-L12)


### [N&#x2011;24] NatSpec: Contract declarations should have descriptions
e.g. `@dev` or `@notice`, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

23   contract LiquidityMiningPath is LiquidityMining {
24       /* @notice Consolidated method for protocol control related commands. 
25:       *         Used to set reward rates */

```
*GitHub*: [23](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L23-L25)

```solidity
File: contracts/mixins/LiquidityMining.sol

12:  contract LiquidityMining is PositionRegistrar {

```
*GitHub*: [12](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L12-L12)


### [N&#x2011;25] NatSpec: Function `@param` tag is missing


*There are 40 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

/// @audit Missing '@param cmd'
26:      function protocolCmd(bytes calldata cmd) public virtual {

/// @audit Missing '@param input'
41:      function userCmd(bytes calldata input) public payable {

/// @audit Missing '@param poolIdx'
/// @audit Missing '@param lowerTick'
/// @audit Missing '@param upperTick'
/// @audit Missing '@param weeksToClaim'
54:      function claimConcentratedRewards(bytes32 poolIdx, int24 lowerTick, int24 upperTick, uint32[] memory weeksToClaim)

/// @audit Missing '@param poolIdx'
/// @audit Missing '@param weeksToClaim'
61:      function claimAmbientRewards(bytes32 poolIdx, uint32[] memory weeksToClaim) public payable {

/// @audit Missing '@param poolIdx'
/// @audit Missing '@param weekFrom'
/// @audit Missing '@param weekTo'
/// @audit Missing '@param weeklyReward'
65:      function setConcRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {

/// @audit Missing '@param poolIdx'
/// @audit Missing '@param weekFrom'
/// @audit Missing '@param weekTo'
/// @audit Missing '@param weeklyReward'
74:      function setAmbRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {

/// @audit Missing '@param slot'
85:      function acceptCrocProxyRole(address, uint16 slot) public pure returns (bool) {

```
*GitHub*: [26](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L26-L26), [41](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L41-L41), [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L54-L54), [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L54-L54), [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L54-L54), [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L54-L54), [61](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L61-L61), [61](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L61-L61), [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L65), [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L65), [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L65), [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L65), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L74), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L74), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L74), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L74), [85](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L85-L85)

```solidity
File: contracts/mixins/LiquidityMining.sol

/// @audit Missing '@param poolIdx'
/// @audit Missing '@param tick'
15       /// @notice Initialize the tick tracking for the first tick of a pool
16:      function initTickTracking(bytes32 poolIdx, int24 tick) internal {

/// @audit Missing '@param poolIdx'
22       /// @notice Keeps track of the tick crossings
23       /// @dev Needs to be called whenever a tick is crossed
24       function crossTicks(
25:          bytes32 poolIdx,

/// @audit Missing '@param exitTick'
22       /// @notice Keeps track of the tick crossings
23       /// @dev Needs to be called whenever a tick is crossed
24       function crossTicks(
25           bytes32 poolIdx,
26:          int24 exitTick,

/// @audit Missing '@param entryTick'
22       /// @notice Keeps track of the tick crossings
23       /// @dev Needs to be called whenever a tick is crossed
24       function crossTicks(
25           bytes32 poolIdx,
26           int24 exitTick,
27:          int24 entryTick

/// @audit Missing '@param poolIdx'
37       /// @notice Keeps track of the global in-range time-weighted concentrated liquidity per week
38       /// @dev Needs to be called whenever the concentrated liquidity is modified (tick crossed, positions changed)
39       function accrueConcentratedGlobalTimeWeightedLiquidity(
40:          bytes32 poolIdx,

/// @audit Missing '@param curve'
37       /// @notice Keeps track of the global in-range time-weighted concentrated liquidity per week
38       /// @dev Needs to be called whenever the concentrated liquidity is modified (tick crossed, positions changed)
39       function accrueConcentratedGlobalTimeWeightedLiquidity(
40           bytes32 poolIdx,
41:          CurveMath.CurveState memory curve

/// @audit Missing '@param owner'
67       /// @notice Accrues the in-range time-weighted concentrated liquidity for a position by going over the tick entry / exit history
68       /// @dev Needs to be called whenever a position is modified
69       function accrueConcentratedPositionTimeWeightedLiquidity(
70:          address payable owner,

/// @audit Missing '@param poolIdx'
67       /// @notice Accrues the in-range time-weighted concentrated liquidity for a position by going over the tick entry / exit history
68       /// @dev Needs to be called whenever a position is modified
69       function accrueConcentratedPositionTimeWeightedLiquidity(
70           address payable owner,
71:          bytes32 poolIdx,

/// @audit Missing '@param lowerTick'
67       /// @notice Accrues the in-range time-weighted concentrated liquidity for a position by going over the tick entry / exit history
68       /// @dev Needs to be called whenever a position is modified
69       function accrueConcentratedPositionTimeWeightedLiquidity(
70           address payable owner,
71           bytes32 poolIdx,
72:          int24 lowerTick,

/// @audit Missing '@param upperTick'
67       /// @notice Accrues the in-range time-weighted concentrated liquidity for a position by going over the tick entry / exit history
68       /// @dev Needs to be called whenever a position is modified
69       function accrueConcentratedPositionTimeWeightedLiquidity(
70           address payable owner,
71           bytes32 poolIdx,
72           int24 lowerTick,
73:          int24 upperTick

/// @audit Missing '@param owner'
156      function claimConcentratedRewards(
157:         address payable owner,

/// @audit Missing '@param poolIdx'
156      function claimConcentratedRewards(
157          address payable owner,
158:         bytes32 poolIdx,

/// @audit Missing '@param lowerTick'
156      function claimConcentratedRewards(
157          address payable owner,
158          bytes32 poolIdx,
159:         int24 lowerTick,

/// @audit Missing '@param upperTick'
156      function claimConcentratedRewards(
157          address payable owner,
158          bytes32 poolIdx,
159          int24 lowerTick,
160:         int24 upperTick,

/// @audit Missing '@param weeksToClaim'
156      function claimConcentratedRewards(
157          address payable owner,
158          bytes32 poolIdx,
159          int24 lowerTick,
160          int24 upperTick,
161:         uint32[] memory weeksToClaim

/// @audit Missing '@param poolIdx'
198      function accrueAmbientGlobalTimeWeightedLiquidity(
199:         bytes32 poolIdx,

/// @audit Missing '@param curve'
198      function accrueAmbientGlobalTimeWeightedLiquidity(
199          bytes32 poolIdx,
200:         CurveMath.CurveState memory curve

/// @audit Missing '@param owner'
224      function accrueAmbientPositionTimeWeightedLiquidity(
225:         address payable owner,

/// @audit Missing '@param poolIdx'
224      function accrueAmbientPositionTimeWeightedLiquidity(
225          address payable owner,
226:         bytes32 poolIdx

/// @audit Missing '@param owner'
256      function claimAmbientRewards(
257:         address owner,

/// @audit Missing '@param poolIdx'
256      function claimAmbientRewards(
257          address owner,
258:         bytes32 poolIdx,

/// @audit Missing '@param weeksToClaim'
256      function claimAmbientRewards(
257          address owner,
258          bytes32 poolIdx,
259:         uint32[] memory weeksToClaim

```
*GitHub*: [15](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L15-L16), [15](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L15-L16), [22](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L22-L25), [22](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L22-L26), [22](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L22-L27), [37](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L37-L40), [37](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L37-L41), [67](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L67-L70), [67](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L67-L71), [67](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L67-L72), [67](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L67-L73), [156](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L156-L157), [156](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L156-L158), [156](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L156-L159), [156](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L156-L160), [156](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L156-L161), [198](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L198-L199), [198](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L198-L200), [224](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L224-L225), [224](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L224-L226), [256](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L256-L257), [256](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L256-L258), [256](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L256-L259)


### [N&#x2011;26] NatSpec: Function `@return` tag is missing


*There is one instance of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

/// @audit Missing '@return '
85:      function acceptCrocProxyRole(address, uint16 slot) public pure returns (bool) {

```
*GitHub*: [85](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L85-L85)


### [N&#x2011;27] NatSpec: Function declarations should have `@notice` tags
`@notice` is used to explain to end users what the function does, and the compiler interprets `///` or `/**` comments as this tag if one wasn't explicitly provided

*There are 7 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

26:      function protocolCmd(bytes calldata cmd) public virtual {

41:      function userCmd(bytes calldata input) public payable {

54       function claimConcentratedRewards(bytes32 poolIdx, int24 lowerTick, int24 upperTick, uint32[] memory weeksToClaim)
55           public
56           payable
57:      {

61:      function claimAmbientRewards(bytes32 poolIdx, uint32[] memory weeksToClaim) public payable {

65       function setConcRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
66:          // require(msg.sender == governance_, "Only callable by governance");

74       function setAmbRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
75:          // require(msg.sender == governance_, "Only callable by governance");

85:      function acceptCrocProxyRole(address, uint16 slot) public pure returns (bool) {

```
*GitHub*: [26](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L26-L26), [41](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L41-L41), [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L54-L57), [61](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L61-L61), [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L66), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L75), [85](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L85-L85)


### [N&#x2011;28] NatSpec: Function declarations should have descriptions


*There are 7 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

26:      function protocolCmd(bytes calldata cmd) public virtual {

41:      function userCmd(bytes calldata input) public payable {

54       function claimConcentratedRewards(bytes32 poolIdx, int24 lowerTick, int24 upperTick, uint32[] memory weeksToClaim)
55           public
56           payable
57:      {

61:      function claimAmbientRewards(bytes32 poolIdx, uint32[] memory weeksToClaim) public payable {

65       function setConcRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
66:          // require(msg.sender == governance_, "Only callable by governance");

74       function setAmbRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
75:          // require(msg.sender == governance_, "Only callable by governance");

85:      function acceptCrocProxyRole(address, uint16 slot) public pure returns (bool) {

```
*GitHub*: [26](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L26-L26), [41](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L41-L41), [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L54-L57), [61](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L61-L61), [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L66), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L75), [85](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L85-L85)


### [N&#x2011;29] NatSpec: State variable declarations should have descriptions
e.g. `@notice` for public state variables, and `@dev` for [non-public](https://docs.soliditylang.org/en/latest/natspec-format.html#tags) ones

*There is one instance of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

13:      uint256 constant WEEK = 604800; // Week in seconds 604800

```
*GitHub*: [13](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L13-L13)


### [N&#x2011;30] Numeric values having to do with time should use time units for readability
There are [units](https://docs.soliditylang.org/en/latest/units-and-global-variables.html#time-units) for seconds, minutes, hours, days, and weeks, and since they're defined, they should be used

*There is one instance of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

/// @audit 604800
13:       uint256 constant WEEK = 604800; // Week in seconds 604800

```
*GitHub*: [13](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L13)


### [N&#x2011;31] Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

65       function setConcRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
66           // require(msg.sender == governance_, "Only callable by governance");
67           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
68           while (weekFrom <= weekTo) {
69               concRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
70               weekFrom += uint32(WEEK);
71           }
72:      }

74       function setAmbRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
75           // require(msg.sender == governance_, "Only callable by governance");
76           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
77           while (weekFrom <= weekTo) {
78               ambRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
79               weekFrom += uint32(WEEK);
80           }
81:      }

```
*GitHub*: [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L72), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L81)


### [N&#x2011;32] Style guide: Lines are too long
Usually lines in source code are limited to [80](https://softwareengineering.stackexchange.com/questions/148677/why-is-80-characters-the-standard-limit-for-code-width) characters. Today's screens are much larger so it's reasonable to stretch this in some cases. The solidity style guide recommends a maximumum line length of [120 characters](https://docs.soliditylang.org/en/v0.8.17/style-guide.html#maximum-line-length), so the lines below should be split when they reach that length.

*There are 6 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

67:       /// @notice Accrues the in-range time-weighted concentrated liquidity for a position by going over the tick entry / exit history

125:                                  // Exit was in next week, we need to consider the current tick there (i.e. not increase the index)

170:          // Need to do a global accrual in case the current tick was already in range for a long time without any modifications that triggered an accrual

185:                      inRangeLiquidityOfPosition += timeWeightedWeeklyPositionInRangeConcLiquidity_[poolIdx][posKey][week][j];

187:                  // Percentage of this weeks overall in range liquidity that was provided by the user times the overall weekly rewards

188:                  rewardsToSend += inRangeLiquidityOfPosition * concRewardPerWeek_[poolIdx][week] / overallInRangeLiquidity;

```
*GitHub*: [67](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L67), [125](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L125), [170](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L170), [185](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L185), [187](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L187), [188](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L188)


### [N&#x2011;33] Style guide: Non-`external`/`public` function names should begin with an underscore
According to the Solidity Style Guide, non-`external`/`public` function names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*There are 8 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

16:      function initTickTracking(bytes32 poolIdx, int24 tick) internal {

24       function crossTicks(
25           bytes32 poolIdx,
26           int24 exitTick,
27           int24 entryTick
28:      ) internal {

39       function accrueConcentratedGlobalTimeWeightedLiquidity(
40           bytes32 poolIdx,
41           CurveMath.CurveState memory curve
42:      ) internal {

69       function accrueConcentratedPositionTimeWeightedLiquidity(
70           address payable owner,
71           bytes32 poolIdx,
72           int24 lowerTick,
73           int24 upperTick
74:      ) internal {

156      function claimConcentratedRewards(
157          address payable owner,
158          bytes32 poolIdx,
159          int24 lowerTick,
160          int24 upperTick,
161          uint32[] memory weeksToClaim
162:     ) internal {

198      function accrueAmbientGlobalTimeWeightedLiquidity(
199          bytes32 poolIdx,
200          CurveMath.CurveState memory curve
201:     ) internal {

224      function accrueAmbientPositionTimeWeightedLiquidity(
225          address payable owner,
226          bytes32 poolIdx
227:     ) internal {

256      function claimAmbientRewards(
257          address owner,
258          bytes32 poolIdx,
259          uint32[] memory weeksToClaim
260:     ) internal {

```
*GitHub*: [16](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L16-L16), [24](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L24-L28), [39](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L39-L42), [69](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L69-L74), [156](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L156-L162), [198](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L198-L201), [224](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L224-L227), [256](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L256-L260)


### [N&#x2011;34] Style guide: Non-`external`/`public` variable names should begin with an underscore
According to the Solidity Style Guide, non-`external`/`public` variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*There is one instance of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

13:      uint256 constant WEEK = 604800; // Week in seconds 604800

```
*GitHub*: [13](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L13-L13)


### [N&#x2011;35] Visibility should be set explicitly rather than defaulting to `internal`


*There is one instance of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

13:       uint256 constant WEEK = 604800; // Week in seconds 604800

```
*GitHub*: [13](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L13)


### [N&#x2011;36] Vulnerable versions of packages are being used
This project's specific package versions are vulnerable to the specific CVEs listed below. While the CVEs may involve code not in use by your project, consider switching to more recent versions of these packages that don't have these vulnerabilities, to avoid reviewers wasting time trying to determine whether there is vulnerable code from these packages in use.

*There is one instance of this issue:*

```solidity
File: Various Files

/// @audit Vulnerabilities:
///          
```



- [CVE-2023-34234](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-34234) - **MEDIUM** -  (`@openzeppelin/contracts >=4.3.0 <4.9.1`):  OpenZeppelin Contracts is a library for smart contract development. By frontrunning the creation of a proposal, an attacker can become the proposer and gain the ability to cancel it. The attacker can do this repeatedly to try to prevent a proposal from being proposed at all. This impacts the `Governor` contract in v4.9.0 only, and the `GovernorCompatibilityBravo` contract since v4.3.0. This problem has been patched in 4.9.1 by introducing opt-in frontrunning protection. Users are advised to upgrade. Users unable to upgrade may submit the proposal creation transaction to an endpoint with frontrunning protection as a workaround.
- [CVE-2023-34459](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-34459) - **MEDIUM** -  (`@openzeppelin/contracts >=4.7.0 <4.9.2`): OpenZeppelin Contracts is a library for smart contract development. Starting in version 4.7.0 and prior to version 4.9.2, when the `verifyMultiProof`, `verifyMultiProofCalldata`, `procesprocessMultiProof`, or `processMultiProofCalldat` functions are in use, it is possible to construct merkle trees that allow forging a valid multiproof for an arbitrary set of leaves.

A contract may be vulnerable if it uses multiproofs for verification and the merkle tree that is processed includes a node with value 0 at depth 1 (just under the root). This could happen inadvertedly for balanced trees with 3 leaves or less, if the leaves are not hashed. This could happen deliberately if a malicious tree builder includes such a node in the tree.

A contract is not vulnerable if it uses single-leaf proving (`verify`, `verifyCalldata`, `processProof`, or `processProofCalldata`), or if it uses multiproofs with a known tree that has hashed leaves. Standard merkle trees produced or validated with the @openzeppelin/merkle-tree library are safe.

The problem has been patched in version 4.9.2.

Some workarounds are available. For those using multiproofs: When constructing merkle trees hash the leaves and do not insert empty nodes in your trees. Using the @openzeppelin/merkle-tree package eliminates this issue. Do not accept user-provided merkle roots without reconstructing at least the first level of the tree. Verify the merkle tree structure by reconstructing it from the leaves.
- [CVE-2023-40014](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-40014) - **MEDIUM** -  (`@openzeppelin/contracts >=4.0.0 <4.9.3`): OpenZeppelin Contracts is a library for secure smart contract development. Starting in version 4.0.0 and prior to version 4.9.3, contracts using `ERC2771Context` along with a custom trusted forwarder may see `_msgSender` return `address(0)` in calls that originate from the forwarder with calldata shorter than 20 bytes. This combination of circumstances does not appear to be common, in particular it is not the case for `MinimalForwarder` from OpenZeppelin Contracts, or any deployed forwarder the team is aware of, given that the signer address is appended to all calls that originate from these forwarders. The problem has been patched in v4.9.3.

```

```

## Gas Optimizations


### [G&#x2011;01] Using `storage` instead of `memory` for state variables saves gas
When fetching data from a storage location, assigning the data to a `memory` variable causes all fields of the struct/array to be read from storage, which incurs a Gcoldsload (**2100 gas**) for *each* field of the struct/array. If the fields are read from the new memory variable, they incur an additional `MLOAD` rather than a cheap stack read. Instead of declaring the variable with the `memory` keyword, declaring the variable with the `storage` keyword and caching any fields that need to be re-read in stack variables, will be much cheaper, only incurring the Gcoldsload for the fields actually read. The only time it makes sense to read the whole struct/array into a `memory` variable, is if the full struct/array is being returned by the function, is being passed to a function that requires `memory`, or if the array/struct is being read from another `memory` array/struct

*There are 3 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

95:                      TickTracking memory tickTracking = tickTracking_[poolIdx][i][tickTrackingIndex];

169:         CurveMath.CurveState memory curve = curves_[poolIdx];

261:         CurveMath.CurveState memory curve = curves_[poolIdx];

```
*GitHub*: [95](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L95-L95), [169](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L169-L169), [261](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L261-L261)


### [G&#x2011;02] Avoid updating storage when the value hasn't changed
If the old value is equal to the new value, not re-storing the value will avoid a Gsreset (**2900 gas**), potentially at the expense of a Gcoldsload (**2100 gas**) or a Gwarmaccess (**100 gas**)

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

65       function setConcRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
66           // require(msg.sender == governance_, "Only callable by governance");
67           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
68           while (weekFrom <= weekTo) {
69               concRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
70               weekFrom += uint32(WEEK);
71           }
72:      }

74       function setAmbRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
75           // require(msg.sender == governance_, "Only callable by governance");
76           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
77           while (weekFrom <= weekTo) {
78               ambRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
79               weekFrom += uint32(WEEK);
80           }
81:      }

```
*GitHub*: [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L72), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L81)


### [G&#x2011;03] Avoid fetching a low-level call's return data by using assembly
Even if you don't assign the call's second return value, it still gets copied to memory. Use assembly instead to prevent this and save **159 [gas](https://gist.github.com/IllIllI000/0e18a40f3afb0b83f9a347b10ee89ad2)**:

`(bool success,) = payable(receiver).call{gas: gas, value: value}("");` -> `bool success; assembly { success := call(gas, receiver, value, 0, 0, 0, 0) }`

*There are 2 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

193:             (bool sent, ) = owner.call{value: rewardsToSend}("");

286:             (bool sent, ) = owner.call{value: rewardsToSend}("");

```
*GitHub*: [193](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L193-L193), [286](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L286-L286)


### [G&#x2011;04] `++i`/`i++` should be `unchecked{++i}`/`unchecked{i++}` when it is not possible for them to overflow, as is the case when used in `for`- and `while`-loops
The `unchecked` keyword is new in solidity version 0.8.0, so this only applies to that version or higher, which these instances are. This saves **30-40 gas [per loop](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#the-increment-in-for-loop-post-condition-can-be-made-unchecked)**

*There are 5 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

88:               for (int24 i = lowerTick + 10; i <= upperTick - 10; ++i) {

139:              for (int24 i = lowerTick + 10; i <= upperTick - 10; ++i) {

174:          for (uint256 i; i < weeksToClaim.length; ++i) {

184:                  for (int24 j = lowerTick + 10; j <= upperTick - 10; ++j) {

266:          for (uint256 i; i < weeksToClaim.length; ++i) {

```
*GitHub*: [88](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L88), [139](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L139), [174](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L174), [184](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L184), [266](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L266)


### [G&#x2011;05] Usage of `uints`/`ints` smaller than 32 bytes (256 bits) incurs overhead
> When using elements that are smaller than 32 bytes, your contract’s gas usage may be higher. This is because the EVM operates on 32 bytes at a time. Therefore, if the element is smaller than that, the EVM must use more operations in order to reduce the size of the element from 32 bytes to the desired size.

https://docs.soliditylang.org/en/v0.8.11/internals/layout_in_storage.html
Each operation involving a `uint8` costs an extra [**22-28 gas**](https://gist.github.com/IllIllI000/9388d20c70f9a4632eb3ca7836f54977) (depending on whether the other operand is also a variable of type `uint8`) as compared to ones involving `uint256`, due to the compiler having to clear the higher bits of the memory word before operating on the `uint8`, as well as the associated stack operations of doing so. Use a larger size then downcast where needed

*There are 6 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

/// @audit uint32 weekFrom
70:               weekFrom += uint32(WEEK);

/// @audit uint32 weekFrom
79:               weekFrom += uint32(WEEK);

```
*GitHub*: [70](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L70), [79](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L79)

```solidity
File: contracts/mixins/LiquidityMining.sol

/// @audit uint32 tickActiveStart
112:                              tickActiveStart = tickTracking.enterTimestamp;

/// @audit uint32 tickActiveEnd
116:                              tickActiveEnd = uint32(nextWeek < block.timestamp ? nextWeek : block.timestamp);

/// @audit uint32 tickActiveEnd
121:                                  tickActiveEnd = tickTracking.exitTimestamp;

/// @audit uint32 dt
123:                                  dt = tickActiveEnd - tickActiveStart;

```
*GitHub*: [112](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L112), [116](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L116), [121](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L121), [123](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L123)


### [G&#x2011;06] Optimize names to save gas
`public`/`external` function names and `public` member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save **128 gas** each during deployment, and renaming functions to have lower method IDs will save **22 gas** per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*There is one instance of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

/// @audit protocolCmd(), userCmd(), claimConcentratedRewards(), claimAmbientRewards(), setConcRewards(), setAmbRewards(), acceptCrocProxyRole()
23:   contract LiquidityMiningPath is LiquidityMining {

```
*GitHub*: [23](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L23)


### [G&#x2011;07] `unchecked {}`  can be used on the division of two `uint`s in order to save gas
The division cannot overflow, since both the numerator and the denominator are non-negative

*There are 6 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

52:                  uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

97:                      uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

188:                 rewardsToSend += inRangeLiquidityOfPosition * concRewardPerWeek_[poolIdx][week] / overallInRangeLiquidity;

209:                 uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

239:                 uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

277                  uint256 rewardsForWeek = (timeWeightedWeeklyPositionAmbLiquidity_[
278                      poolIdx
279                  ][posKey][week] * ambRewardPerWeek_[poolIdx][week]) /
280:                     overallTimeWeightedLiquidity;

```
*GitHub*: [52](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L52-L52), [97](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L97-L97), [188](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L188-L188), [209](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L209-L209), [239](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L239-L239), [277](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L277-L280)


### [G&#x2011;08] `internal`/`private` functions only called once can be inlined to save gas
Not inlining costs **20 to 40 gas** because of two extra `JUMP` instructions and additional stack operations needed for function calls.

*There are 4 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

16:      function initTickTracking(bytes32 poolIdx, int24 tick) internal {

24       function crossTicks(
25           bytes32 poolIdx,
26           int24 exitTick,
27           int24 entryTick
28:      ) internal {

156      function claimConcentratedRewards(
157          address payable owner,
158          bytes32 poolIdx,
159          int24 lowerTick,
160          int24 upperTick,
161          uint32[] memory weeksToClaim
162:     ) internal {

256      function claimAmbientRewards(
257          address owner,
258          bytes32 poolIdx,
259          uint32[] memory weeksToClaim
260:     ) internal {

```
*GitHub*: [16](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L16-L16), [24](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L24-L28), [156](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L156-L162), [256](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L256-L260)


### [G&#x2011;09] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
Saves **5 gas per loop**

*There is one instance of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

122:                                  tickTrackingIndex++;

```
*GitHub*: [122](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L122)


### [G&#x2011;10] `>=` costs less gas than `>`
The compiler uses opcodes `GT` and `ISZERO` for solidity code that uses `>`, but only requires `LT` for `>=`, [which saves **3 gas**](https://gist.github.com/IllIllI000/3dc79d25acccfa16dee4e83ffdc6ffde). If `<` is being used, the condition can be inverted.

*There are 8 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

141:                 if (numTickTracking > 0) {

105:                     if (tickTracking.enterTimestamp < nextWeek) {

107:                         if (tickTracking.enterTimestamp < time) {

119:                             if (tickTracking.exitTimestamp < nextWeek) {

182:             if (overallInRangeLiquidity > 0) {

192:         if (rewardsToSend > 0) {

276:             if (overallTimeWeightedLiquidity > 0) {

285:         if (rewardsToSend > 0) {

```
*GitHub*: [141](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L141-L141), [105](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L105-L105), [107](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L107-L107), [119](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L119-L119), [182](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L182-L182), [192](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L192-L192), [276](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L276-L276), [285](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L285-L285)


### [G&#x2011;11] `<array>.length` should not be looked up in every loop of a `for`-loop
The overheads outlined below are _PER LOOP_, excluding the first loop
* storage arrays incur a Gwarmaccess (**100 gas**)
* memory arrays use `MLOAD` (**3 gas**)
* calldata arrays use `CALLDATALOAD` (**3 gas**)

Caching the length changes each of these to a `DUP<N>` (**3 gas**), and gets rid of the extra `DUP<N>` needed to store the stack offset

*There are 2 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

174:          for (uint256 i; i < weeksToClaim.length; ++i) {

266:          for (uint256 i; i < weeksToClaim.length; ++i) {

```
*GitHub*: [174](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L174), [266](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L266)


### [G&#x2011;12] Splitting `require()` statements that use `&&` saves gas
See [this issue](https://github.com/code-423n4/2022-01-xdefi-findings/issues/128) which describes the fact that there is a larger deployment gas cost, but with enough runtime calls, the change ends up being cheaper by **3 gas**

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

67:          require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");

76:          require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");

```
*GitHub*: [67](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L67-L67), [76](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L76-L76)


### [G&#x2011;13] Use custom errors rather than `revert()`/`require()` strings to save gas
Custom errors are available from solidity version 0.8.4. Custom errors save [**~50 gas**](https://gist.github.com/IllIllI000/ad1bd0d29a0101b25e57c293b4b0c746) each time they're hit by [avoiding having to allocate and store the revert string](https://blog.soliditylang.org/2021/04/21/custom-errors/#errors-in-depth). Not defining the strings also save deployment gas

*There are 8 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

67:           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");

76:           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");

```
*GitHub*: [67](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L67), [76](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L76)

```solidity
File: contracts/mixins/LiquidityMining.sol

176:              require(week + WEEK < block.timestamp, "Week not over yet");

177               require(
178                   !concLiquidityRewardsClaimed_[poolIdx][posKey][week],
179                   "Already claimed"
180:              );

194:              require(sent, "Sending rewards failed");

268:              require(week + WEEK < block.timestamp, "Week not over yet");

269               require(
270                   !ambLiquidityRewardsClaimed_[poolIdx][posKey][week],
271                   "Already claimed"
272:              );

287:              require(sent, "Sending rewards failed");

```
*GitHub*: [176](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L176), [177](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L177-L180), [194](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L194), [268](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L268), [269](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L269-L272), [287](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L287)

## Disputed Issues

The issues below may be reported by other bots/wardens, but can be penalized/ignored since either the rule or the specified instances are invalid


### [D&#x2011;01] ~~`internal` functions not called by the contract should be removed~~
These functions are referenced by other contracts extending the current one

*There are 4 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

16:      function initTickTracking(bytes32 poolIdx, int24 tick) internal {

24       function crossTicks(
25           bytes32 poolIdx,
26           int24 exitTick,
27           int24 entryTick
28:      ) internal {

156      function claimConcentratedRewards(
157          address payable owner,
158          bytes32 poolIdx,
159          int24 lowerTick,
160          int24 upperTick,
161          uint32[] memory weeksToClaim
162:     ) internal {

256      function claimAmbientRewards(
257          address owner,
258          bytes32 poolIdx,
259          uint32[] memory weeksToClaim
260:     ) internal {

```
*GitHub*: [16](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L16-L16), [24](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L24-L28), [156](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L156-L162), [256](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L256-L260)


### [D&#x2011;02] ~~Array lengths not checked~~
These instances only have one array

*There are 4 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

54       function claimConcentratedRewards(bytes32 poolIdx, int24 lowerTick, int24 upperTick, uint32[] memory weeksToClaim)
55           public
56           payable
57:      {

61:      function claimAmbientRewards(bytes32 poolIdx, uint32[] memory weeksToClaim) public payable {

```
*GitHub*: [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L54-L57), [61](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L61-L61)

```solidity
File: contracts/mixins/LiquidityMining.sol

156      function claimConcentratedRewards(
157          address payable owner,
158          bytes32 poolIdx,
159          int24 lowerTick,
160          int24 upperTick,
161          uint32[] memory weeksToClaim
162:     ) internal {

256      function claimAmbientRewards(
257          address owner,
258          bytes32 poolIdx,
259          uint32[] memory weeksToClaim
260:     ) internal {

```
*GitHub*: [156](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L156-L162), [256](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L256-L260)


### [D&#x2011;03] ~~Avoid fetching a low-level call's return data by using assembly~~
The return data is in fact used, so assembly provides no gas savings

*There are 2 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

193:             (bool sent, ) = owner.call{value: rewardsToSend}("");

286:             (bool sent, ) = owner.call{value: rewardsToSend}("");

```
*GitHub*: [193](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L193-L193), [286](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L286-L286)


### [D&#x2011;04] ~~Change `public` function visibility to `external` to save gas~~
Both `public` and `external` functions use the same amount of gas (both deployment and runtime gas), so this finding is invalid

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

41:      function userCmd(bytes calldata input) public payable {

85:      function acceptCrocProxyRole(address, uint16 slot) public pure returns (bool) {

```
*GitHub*: [41](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L41-L41), [85](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L85-L85)


### [D&#x2011;05] ~~Consider implementing two-step procedure for updating protocol addresses~~
The general rule is valid, but the instances below are invalid

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

65       function setConcRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
66           // require(msg.sender == governance_, "Only callable by governance");
67           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
68           while (weekFrom <= weekTo) {
69               concRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
70               weekFrom += uint32(WEEK);
71           }
72:      }

74       function setAmbRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
75           // require(msg.sender == governance_, "Only callable by governance");
76           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
77           while (weekFrom <= weekTo) {
78               ambRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
79               weekFrom += uint32(WEEK);
80           }
81:      }

```
*GitHub*: [65](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L65-L72), [74](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L74-L81)


### [D&#x2011;06] ~~Default `bool` values are manually reset~~
Using delete instead of assigning zero/false to state variables does not save any extra gas with the optimizer [on](https://gist.github.com/IllIllI000/ef8ec3a70aede7f12433fe63dc418515#with-the-optimizer-set-at-200-runs) (saves 5-8 gas with optimizer completely off), so this finding is invalid, especially since if they were interested in gas savings, they'd have the optimizer enabled. Some bots are also flagging `true` rather than just `false`

*There are 2 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

190:             concLiquidityRewardsClaimed_[poolIdx][posKey][week] = true;

283:             ambLiquidityRewardsClaimed_[poolIdx][posKey][week] = true;

```
*GitHub*: [190](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L190-L190), [283](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L283-L283)


### [D&#x2011;07] ~~Duplicated `require()`/`revert()` checks should be refactored to a modifier or function~~
This instance appears only once

*There are 4 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

35:               revert("Invalid protocol command");

50:               revert("Invalid user command");

```
*GitHub*: [35](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L35), [50](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L50)

```solidity
File: contracts/mixins/LiquidityMining.sol

177               require(
178                   !concLiquidityRewardsClaimed_[poolIdx][posKey][week],
179                   "Already claimed"
180:              );

269               require(
270                   !ambLiquidityRewardsClaimed_[poolIdx][posKey][week],
271                   "Already claimed"
272:              );

```
*GitHub*: [177](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L177-L180), [269](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L269-L272)


### [D&#x2011;08] ~~Duplicated require()/revert() checks should be refactored to a modifier Or function to save gas~~
If the compiler inlines the function, there will be no gas savings. If it doesn't, there's extra runtime overhead due to the JUMP instructions. Either way, this suggestion is not helpful.

*There are 3 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

76:           require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");

```
*GitHub*: [76](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L76)

```solidity
File: contracts/mixins/LiquidityMining.sol

268:              require(week + WEEK < block.timestamp, "Week not over yet");

287:              require(sent, "Sending rewards failed");

```
*GitHub*: [268](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L268), [287](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L287)


### [D&#x2011;09] ~~Enable IR-based code generation~~
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*There is one instance of this issue:*

```solidity
File: Various Files


```


### [D&#x2011;10] ~~External call recipient may consume all transaction gas~~
The general rule is valid, but the instances below are invalid

*There are 2 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

/// @audit `claimConcentratedRewards()`
193:             (bool sent, ) = owner.call{value: rewardsToSend}("");

/// @audit `claimAmbientRewards()`
286:             (bool sent, ) = owner.call{value: rewardsToSend}("");

```
*GitHub*: [193](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L193-L193), [286](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L286-L286)


### [D&#x2011;11] ~~Initialization can be front-run~~
These initializers are called by other contracts in the project, and thus cannot be front-run

*There is one instance of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

16:      function initTickTracking(bytes32 poolIdx, int24 tick) internal {

```
*GitHub*: [16](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L16-L16)


### [D&#x2011;12] ~~Loss of precision~~
Division by large numbers may result in the result being zero, due to solidity not supporting fractions. Consider requiring a minimum amount for the numerator to ensure that it is always larger than the denominator

*There are 8 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

51:                   uint32 currWeek = uint32((time / WEEK) * WEEK);

52:                   uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

96:                       uint32 currWeek = uint32((time / WEEK) * WEEK);

97:                       uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

208:                  uint32 currWeek = uint32((time / WEEK) * WEEK);

209:                  uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

238:                  uint32 currWeek = uint32((time / WEEK) * WEEK);

239:                  uint32 nextWeek = uint32(((time + WEEK) / WEEK) * WEEK);

```
*GitHub*: [51](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L51), [52](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L52), [96](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L96), [97](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L97), [208](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L208), [209](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L209), [238](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L238), [239](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L239)


### [D&#x2011;13] ~~Missing contract-existence checks before low-level calls~~
The contract or caller exists, or it's a transfer of funds

*There are 2 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

183                  uint256 inRangeLiquidityOfPosition;
184                  for (int24 j = lowerTick + 10; j <= upperTick - 10; ++j) {
185                      inRangeLiquidityOfPosition += timeWeightedWeeklyPositionInRangeConcLiquidity_[poolIdx][posKey][week][j];
186                  }
187                  // Percentage of this weeks overall in range liquidity that was provided by the user times the overall weekly rewards
188                  rewardsToSend += inRangeLiquidityOfPosition * concRewardPerWeek_[poolIdx][week] / overallInRangeLiquidity;
189              }
190              concLiquidityRewardsClaimed_[poolIdx][posKey][week] = true;
191          }
192          if (rewardsToSend > 0) {
193              (bool sent, ) = owner.call{value: rewardsToSend}("");
194              require(sent, "Sending rewards failed");
195          }
196:     }

276              if (overallTimeWeightedLiquidity > 0) {
277                  uint256 rewardsForWeek = (timeWeightedWeeklyPositionAmbLiquidity_[
278                      poolIdx
279                  ][posKey][week] * ambRewardPerWeek_[poolIdx][week]) /
280                      overallTimeWeightedLiquidity;
281                  rewardsToSend += rewardsForWeek;
282              }
283              ambLiquidityRewardsClaimed_[poolIdx][posKey][week] = true;
284          }
285          if (rewardsToSend > 0) {
286              (bool sent, ) = owner.call{value: rewardsToSend}("");
287              require(sent, "Sending rewards failed");
288          }
289:     }

```
*GitHub*: [183](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L183-L196), [276](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L276-L289)


### [D&#x2011;14] ~~Operator += costs more gas than = + for state variables~~
Not using `+=` for non-basic-typed state variables costs an extra **[40 gas](https://gist.github.com/IllIllI000/4fc5f83a9edc6ed16677258bf58f32a5)** due to having to recalculate the mapping's value's hash

*There are 4 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

58:                  timeWeightedWeeklyGlobalConcLiquidity_[poolIdx][currWeek] += dt * liquidity;

129                          timeWeightedWeeklyPositionInRangeConcLiquidity_[poolIdx][posKey][currWeek][i] +=
130:                             (tickActiveEnd - tickActiveStart) * liquidity;

215:                 timeWeightedWeeklyGlobalAmbLiquidity_[poolIdx][currWeek] += dt * liquidity;

245                  timeWeightedWeeklyPositionAmbLiquidity_[poolIdx][posKey][
246                      currWeek
247:                 ] += dt * liquidity;

```
*GitHub*: [58](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L58-L58), [129](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L129-L130), [215](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L215-L215), [245](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L245-L247)


### [D&#x2011;15] ~~Public functions not used internally can be marked as external to save gas~~
After Solidity version 0.6.9 both `public` and `external` functions save the [same amount of gas](https://ethereum.stackexchange.com/a/107939), and since these files are >0.6.9, these findings are invalid

*There are 3 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

26:       function protocolCmd(bytes calldata cmd) public virtual {

41:       function userCmd(bytes calldata input) public payable {

85:       function acceptCrocProxyRole(address, uint16 slot) public pure returns (bool) {

```
*GitHub*: [26](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L26), [41](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L41), [85](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L85)


### [D&#x2011;16] ~~Save gas with the use of specific import statements~~
Importing whole files rather than specific identifiers [does not waste gas](https://ethereum.stackexchange.com/questions/138876/does-solidity-optimizer-eliminate-unused-internal-functions-of-libraries), so this finding is invalid

*There are 8 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

5:   import "../libraries/SafeCast.sol";

6:   import "../mixins/StorageLayout.sol";

7:   import "../mixins/LiquidityMining.sol";

8:   import "../libraries/ProtocolCmd.sol";

```
*GitHub*: [5](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L5-L5), [6](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L6-L6), [7](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L7-L7), [8](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L8-L8)

```solidity
File: contracts/mixins/LiquidityMining.sol

5:   import "../libraries/SafeCast.sol";

6:   import "./PositionRegistrar.sol";

7:   import "./StorageLayout.sol";

8:   import "./PoolRegistry.sol";

```
*GitHub*: [5](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L5-L5), [6](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L6-L6), [7](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L7-L7), [8](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L8-L8)


### [D&#x2011;17] ~~SPDX identifier should be the in the first line of a solidity file~~
It's already on the first line

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

1:    // SPDX-License-Identifier: GPL-3

```
*GitHub*: [1](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L1)

```solidity
File: contracts/mixins/LiquidityMining.sol

1:    // SPDX-License-Identifier: GPL-3

```
*GitHub*: [1](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L1)


### [D&#x2011;18] ~~State variable read in a loop~~
these references to the variable cannot be cached, or that are `constant`/`immutable`

*There are 24 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

/// @audit concRewardPerWeek_
69:              concRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;

/// @audit ambRewardPerWeek_
78:              ambRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;

```
*GitHub*: [69](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L69-L69), [78](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L78-L78)

```solidity
File: contracts/mixins/LiquidityMining.sol

/// @audit timeWeightedWeeklyGlobalConcLiquidity_
58:                  timeWeightedWeeklyGlobalConcLiquidity_[poolIdx][currWeek] += dt * liquidity;

/// @audit tickTracking_
140:                 uint32 numTickTracking = uint32(tickTracking_[poolIdx][i].length);

/// @audit tickTracking_
142:                     if (tickTracking_[poolIdx][i][numTickTracking - 1].exitTimestamp == 0) {

/// @audit tickTrackingIndexAccruedUpTo_
146:                         tickTrackingIndexAccruedUpTo_[poolIdx][posKey][i] = numTickTracking;

/// @audit tickTrackingIndexAccruedUpTo_
144:                         tickTrackingIndexAccruedUpTo_[poolIdx][posKey][i] = numTickTracking - 1;

/// @audit tickTrackingIndexAccruedUpTo_
89:                  uint32 tickTrackingIndex = tickTrackingIndexAccruedUpTo_[poolIdx][posKey][i];

/// @audit tickTracking_
91:                  uint32 numTickTracking = uint32(tickTracking_[poolIdx][i].length);

/// @audit tickTracking_
95:                      TickTracking memory tickTracking = tickTracking_[poolIdx][i][tickTrackingIndex];

/// @audit timeWeightedWeeklyPositionInRangeConcLiquidity_
129:                         timeWeightedWeeklyPositionInRangeConcLiquidity_[poolIdx][posKey][currWeek][i] +=

/// @audit tickTrackingIndexAccruedUpTo_
135:                     tickTrackingIndexAccruedUpTo_[poolIdx][posKey][i] = tickTrackingIndex;

/// @audit concLiquidityRewardsClaimed_
178:                 !concLiquidityRewardsClaimed_[poolIdx][posKey][week],

/// @audit timeWeightedWeeklyGlobalConcLiquidity_
181:             uint256 overallInRangeLiquidity = timeWeightedWeeklyGlobalConcLiquidity_[poolIdx][week];

/// @audit timeWeightedWeeklyPositionInRangeConcLiquidity_
185:                     inRangeLiquidityOfPosition += timeWeightedWeeklyPositionInRangeConcLiquidity_[poolIdx][posKey][week][j];

/// @audit concRewardPerWeek_
188:                 rewardsToSend += inRangeLiquidityOfPosition * concRewardPerWeek_[poolIdx][week] / overallInRangeLiquidity;

/// @audit concLiquidityRewardsClaimed_
190:             concLiquidityRewardsClaimed_[poolIdx][posKey][week] = true;

/// @audit timeWeightedWeeklyGlobalAmbLiquidity_
215:                 timeWeightedWeeklyGlobalAmbLiquidity_[poolIdx][currWeek] += dt * liquidity;

/// @audit timeWeightedWeeklyPositionAmbLiquidity_
245:                 timeWeightedWeeklyPositionAmbLiquidity_[poolIdx][posKey][

/// @audit ambLiquidityRewardsClaimed_
270:                 !ambLiquidityRewardsClaimed_[poolIdx][posKey][week],

/// @audit timeWeightedWeeklyGlobalAmbLiquidity_
273:             uint256 overallTimeWeightedLiquidity = timeWeightedWeeklyGlobalAmbLiquidity_[

/// @audit timeWeightedWeeklyPositionAmbLiquidity_
277:                 uint256 rewardsForWeek = (timeWeightedWeeklyPositionAmbLiquidity_[

/// @audit ambRewardPerWeek_
279:                 ][posKey][week] * ambRewardPerWeek_[poolIdx][week]) /

/// @audit ambLiquidityRewardsClaimed_
283:             ambLiquidityRewardsClaimed_[poolIdx][posKey][week] = true;

```
*GitHub*: [58](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L58-L58), [140](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L140-L140), [142](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L142-L142), [146](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L146-L146), [144](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L144-L144), [89](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L89-L89), [91](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L91-L91), [95](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L95-L95), [129](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L129-L129), [135](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L135-L135), [178](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L178-L178), [181](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L181-L181), [185](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L185-L185), [188](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L188-L188), [190](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L190-L190), [215](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L215-L215), [245](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L245-L245), [270](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L270-L270), [273](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L273-L273), [277](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L277-L277), [279](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L279-L279), [283](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L283-L283)


### [D&#x2011;19] ~~Style guide: Contract does not follow the Solidity style guide's suggested layout ordering~~
There are no issues with contract layout in these contracts

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

23:   contract LiquidityMiningPath is LiquidityMining {

```
*GitHub*: [23](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L23)

```solidity
File: contracts/mixins/LiquidityMining.sol

12:   contract LiquidityMining is PositionRegistrar {

```
*GitHub*: [12](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L12)


### [D&#x2011;20] ~~Timestamp may be manipulation~~
Use of `block.timestamp`, in and of itself, is not evidence of an issue; there must be an incorrect usage in the code in order for there to be a vulnerability. There should also be a corresponding suggested fix.

*There are 23 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

18:              .TickTracking(uint32(block.timestamp), 0);

31:              .exitTimestamp = uint32(block.timestamp);

33:              .TickTracking(uint32(block.timestamp), 0);

54:                      nextWeek < block.timestamp

56:                          : block.timestamp - time

50:              while (time < block.timestamp) {

63:              block.timestamp

99:                          nextWeek < block.timestamp

101:                             : block.timestamp - time

116:                             tickActiveEnd = uint32(nextWeek < block.timestamp ? nextWeek : block.timestamp);

94:                  while (time < block.timestamp && tickTrackingIndex < numTickTracking) {

153:         ] = uint32(block.timestamp);

176:             require(week + WEEK < block.timestamp, "Week not over yet");

211:                     nextWeek < block.timestamp

213:                         : block.timestamp - time

207:             while (time < block.timestamp) {

220:             block.timestamp

241:                     nextWeek < block.timestamp

243:                         : block.timestamp - time

237:             while (time < block.timestamp) {

253:         ] = uint32(block.timestamp);

268:             require(week + WEEK < block.timestamp, "Week not over yet");

```
*GitHub*: [18](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L18-L18), [31](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L31-L31), [33](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L33-L33), [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L54-L54), [56](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L56-L56), [50](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L50-L50), [63](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L63-L63), [99](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L99-L99), [101](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L101-L101), [116](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L116-L116), [116](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L116-L116), [94](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L94-L94), [153](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L153-L153), [176](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L176-L176), [211](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L211-L211), [213](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L213-L213), [207](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L207-L207), [220](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L220-L220), [241](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L241-L241), [243](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L243-L243), [237](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L237-L237), [253](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L253-L253), [268](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L268-L268)


### [D&#x2011;21] ~~Unsafe downcast~~
When a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*There are 2 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

/// @audit uint32
70:               weekFrom += uint32(WEEK);

/// @audit uint32
79:               weekFrom += uint32(WEEK);

```
*GitHub*: [70](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L70), [79](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L79)


### [D&#x2011;22] ~~Unusual loop variable~~
These instances all properly use 'i' as the outer for-loop loop variable

*There are 4 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

139:             for (int24 i = lowerTick + 10; i <= upperTick - 10; ++i) {

88:              for (int24 i = lowerTick + 10; i <= upperTick - 10; ++i) {

174:         for (uint256 i; i < weeksToClaim.length; ++i) {

266:         for (uint256 i; i < weeksToClaim.length; ++i) {

```
*GitHub*: [139](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L139-L139), [88](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L88-L88), [174](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L174-L174), [266](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L266-L266)


### [D&#x2011;23] ~~Use != 0 instead of > 0 for unsigned integer comparison~~
Only valid prior to Solidity version 0.8.13, and only for `require()` statements, and at least one of those is not true for the examples below

*There are 5 instances of this issue:*

```solidity
File: contracts/mixins/LiquidityMining.sol

141:                 if (numTickTracking > 0) {

182:             if (overallInRangeLiquidity > 0) {

192:         if (rewardsToSend > 0) {

276:             if (overallTimeWeightedLiquidity > 0) {

285:         if (rewardsToSend > 0) {

```
*GitHub*: [141](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L141-L141), [182](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L182-L182), [192](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L192-L192), [276](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L276-L276), [285](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L285-L285)


### [D&#x2011;24] ~~Using `calldata` instead of `memory` for read-only arguments in `external` functions saves gas~~
[Invalid](https://gist.github.com/IllIllI000/2ac9a647be917f58ffe5baa2cecbbc42) for arrays of non-word-sized types

*There are 4 instances of this issue:*

```solidity
File: contracts/callpaths/LiquidityMiningPath.sol

/// @audit claimConcentratedRewards(weeksToClaim)
54:      function claimConcentratedRewards(bytes32 poolIdx, int24 lowerTick, int24 upperTick, uint32[] memory weeksToClaim)

/// @audit claimAmbientRewards(weeksToClaim)
61:      function claimAmbientRewards(bytes32 poolIdx, uint32[] memory weeksToClaim) public payable {

```
*GitHub*: [54](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L54-L54), [61](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/callpaths/LiquidityMiningPath.sol#L61-L61)

```solidity
File: contracts/mixins/LiquidityMining.sol

/// @audit claimConcentratedRewards(weeksToClaim)
161:         uint32[] memory weeksToClaim

/// @audit claimAmbientRewards(weeksToClaim)
259:         uint32[] memory weeksToClaim

```
*GitHub*: [161](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L161-L161), [259](https://github.com/code-423n4/2023-10-canto/blob/29c92a926453a49c8935025a4d3de449150fc2ff/canto_ambient/contracts/mixins/LiquidityMining.sol#L259-L259)


## Rubric
See [this](https://illilli000.github.io/races/2023-07-lens/scorer.html) link for how to use this rubric:
```json
{"salt":"9172e8","hashes":["a09a0c2fca","9d501f14b0","1eea2f1d12","8c1aa23932","01d7b962ed","f074fb6536","3aaf3ad5b4","a09a0c2fca","9d501f14b0","1eea2f1d12","8c1aa23932","01d7b962ed","f074fb6536","3aaf3ad5b4","46b8912d96","b27c9de6cb","a6996782a9","92952b717c","eb84cab491","4d85a0a79b","0d2ffae06d","ebb32b79d4","542429a1bb","7e14cc9b2e","1f32991194","3f54c964f5","02a0bad93c","c919a33408","0677b50828","fb3262ca75","d7b0b575e7","eb2233d38a","e1faca48df","c138c095f1","c931af9638","855135f784","80eede5e59","813e3661d9","fb0f503294","6efe724a76","6a51bf5351","05b0145738","0e7f6e5b45","e759d1e156","9e48f5daa7","0a2cccf80c","e6d95fe3d1","e973024587","0052b8e943","9fc3279bcc","a9aa54c220","d1b4b31cd7","690cf3a5e4","5a2176680c","e811e39e34","50d21969bc","2b72dfb443","77d20e0e8c","3633004bc4","b471d616c6","abb684228a","d77494ed79","e245767676","46b8912d96","b27c9de6cb","a6996782a9","92952b717c","eb84cab491","4d85a0a79b","0d2ffae06d","1bd1fbb242","d0c35b3408","2a64f2a02c","678a1a0d95","927f5cc0c5","4c9be247b3","2e5f257b28","ba8e6c9495","826fa6d954","915eed7127","cd692d198f","bbce862a9e","f797b5a0db","d97d5e5788","683a516acd","c08bfc7a88","d4c21ece34","278c28f7d9","76cd227958","944a436037","04729eca2a","4e16b9b53b","25f8ad00f1","602fc0a7ac","25b3bdf677","1288e6b6c9","3b88464d34","cd1f53b828","4e16b9b53b","25f8ad00f1","602fc0a7ac","25b3bdf677","1288e6b6c9","3b88464d34","cd1f53b828","c91b6c8dd2","d62daa7706","ca58fb4685","09cae0ba6d","1c5afc1b3a","f27d23b776","7759026bd2","75c0c766f8","1c8d3e42ce","ca47a5c720","735b844787","5e431e6bd1","9d3d7c6047","72c60c0aaa","30a70c796b","10b5428be1","ae7795e0b7","ac47f1470d","365816ca97","8458b0c3f4","152eac0c15","4d6be10802","c1150e1117","233094fc39","e67617b0fa","48ce52684c","cd285aedea","c8b8176a23","a3c27ed629","e3e3780d87","2cd483b48d","6f0a0b9af8","8dc1634fde","55f8a04708","b133987efe","411c755409","8e0cbb496c","d5b36b9382","52b042115f","b00a048887","89021a1916","07c3921f03","b7ffb33302","d8a36cba32","b169412f70","62abf69398","7674d0c47c","6bdbb6f009","2ee60eb0ba","c1e0963758","2da0538529","02ad7a89fe","bf7d569e7a","e840d9a6c7","7885980cc1","eebb6f8f59","c1e0963758","2da0538529","02ad7a89fe","bf7d569e7a","e840d9a6c7","7885980cc1","eebb6f8f59","8ff968f4fe","4ce0abefb0","fa270c4360","0de525dde3","67fb5ee8c9","8a64c8f059","fd2eff1769","a5ae69c377","0d321d96e6","88f8bd5d47","ec6e9d712a","2af429123f","31e2752d65","9dc4ed68b3","6774b155a1","4040cc0809","6110123f24","0bb0d78454","ce05e85663","9c7c1c875d","ea87447fb8","eada595ea3","e1d2e6dbaa","bb679e2b18","45663a53ac","3ac977dd5a","ba61ab8aa8","eb7e321d0d","6774b155a1","4040cc0809","6110123f24","0bb0d78454","ce05e85663","9c7c1c875d","ea87447fb8","dde28e85de","df6a722d25","12c2d48858","7e90fc8adb","25f0025f7a","f529bd45aa","83672efa0e","d16f2b1431","2e79b99d07","53252ad385","dc6cdc678f","da2255b5f9","7a092a0234","59849d40ca","d16f2b1431","2e79b99d07","53252ad385","dc6cdc678f","da2255b5f9","7a092a0234","59849d40ca","dd53f6a4c7","308437f93b","a65ec64ce0","6b24493a76","f30ad2f135","f90785419e","261435c30f","fdbc9bd4c9","9f203a4044","4ea220d11c","b88917dc1e","85fa50680a","3cf11d830b","a137ff3745","63819b90c3","f50ffd522f","06767fe99d","98884b47e6","b5484d0266","a8c0d69fea","14fcb51f25","85a020bff1","b29c33bd8d","2692c91e76","067e0bee92","7d98d7c4f1","64d2f32949","4aafcb46ea","cd331efcee","dcd047573c","efc523fbba","68ac22582e","60011232eb","b0cfdca3ea","81076ea398","cd331efcee","dcd047573c","efc523fbba","68ac22582e","60011232eb","b0cfdca3ea","81076ea398","79dece29a4","26bac4aad2","00baf52a35","7ded8ae691","ddf4e9a42e","924cc7c784","584ba3c1be","f5c968b84c","1311d79e11","29a8c729c7","7f1d50c5e3","5da774e253","de4e968350","21353cf155","69d85dee6f","77a2828840","6b528c3e58","356c695d38","1d15133096","8c5fc0bfba","3ea9947ad4","759f59c52e","ccd1d6d9aa","30186ba07c","f77b11c686","3152196ee5","6aabf1797d","0d4369bc18","7558f0c914","304ed25bb7","214909e478","bcc3e16d5d","7f34dfdbd4","3bd11e0bdf","e08e702fa3","b48a344c50","601c9cfc2e","89b8ff1123","aa49b29450","f1f03fbe5b","31c05d0992","d454226eb1","b48a344c50","601c9cfc2e","89b8ff1123","aa49b29450","f1f03fbe5b","31c05d0992","d454226eb1","3380017fb0","b9d1a83a01","f5e6178f1d","97c2da02ad","df75a6ba51","c9da02e67f","69ed058ab3","f8f400df31","ba4eb69ad7","7c593e7ff2","fcff6f9ac1","efa5a5f7ce","6e0bab2a6c","14bed7329a","c84d744aa4","4ccb792355","fa5986ca7b","3ee21a2133","365edb5476","ea0990f2ba","3b4f3945b9","7e27e6a674","86c0f07585","afbfa65427","2ddb3355fb","d34f197769","dccda41ac4","10639cbf6c","7e27e6a674","86c0f07585","afbfa65427","2ddb3355fb","d34f197769","dccda41ac4","10639cbf6c","b35b051353","a3d66cea51","e09b850ffa","48c7d511e8","f77b8ed712","93394da816","91cdc2a2b7","34fb50624a","063e703fb0","4f420fd2ba","96cd4d8a53","af10682d6b","e5b4aea511","d63d7aacf4","747a547b5a","6788d9a788","499b606c90","1cd3c20380","a23fb98abf","0ac8b2180f","eba34cb3ea","b5b4b992c9","523b7842cf","907efe4571","60a57de714","af3db9c276","6eac884e1b","6c6ed733bd","b2fcdf1d51","00bc8b5600","870541c754","d341dfa4af","d81932b12b","ae24eaceae","c471a4fef3","b2fcdf1d51","00bc8b5600","870541c754","d341dfa4af","d81932b12b","ae24eaceae","c471a4fef3","024c74124e","825cac9d3c","327c187b72","15d38fbac9","dd42f8bdaa","40aeed25e7","97d1391f59","4418ce0df3","8f986cf205","2f8a67491e","fa4c1a46bd","80823bdf4e","10725014d6","93e7c1fc74","e08f15065c","b910aa964c","0b7e9056a0","3b42b9c011","90cbdf12fc","8be59ac902","f7096c0cd7","e08f15065c","b910aa964c","0b7e9056a0","3b42b9c011","90cbdf12fc","8be59ac902","f7096c0cd7","6814ac5368","a60c71548c","8abe8d61e0","da59c93254","a2046b052d","0df92dd02a","332a6d2048","ceb875fd38","146d5d3da7","f7a2fd72f9","75a4186f61","ce9b43af5d","8e3a0f2e4b","7e31bcb76a","57beae3de3","c778f82431","c267537217","fb48fe5d2f","a6f86c6293","015012d2a9","a9cb15592d","db89724df0","6cab0f32bb","b8dcf2edba","98c303ee4b","44b4545a7f","28fb9784df","9de16fb3fd","f347e6505b","746346b401","4f55a2d7ec","5087682b95","bcc6c9129b","fdcd8f6433","0ab7058a95","af40bf44e8","6dfaee3127","ab1d2b8bde","954152b1d8","5e0e410bb2","6abd420788","b904cb9d4f","f347e6505b","746346b401","4f55a2d7ec","5087682b95","bcc6c9129b","fdcd8f6433","0ab7058a95","f347e6505b","746346b401","4f55a2d7ec","5087682b95","bcc6c9129b","fdcd8f6433","0ab7058a95","f8be50cf86","652acbc766","84de61bd78","72a4b4ac07","b3ef6d4265","026c12277e","b15b626bf3","cf4cf4d019","5c6824d77a","f9c7da57f2","b4bd412355","4c09bb1f4c","e4eb8d0c57","8645ade3ee","cf4cf4d019","5c6824d77a","f9c7da57f2","b4bd412355","4c09bb1f4c","e4eb8d0c57","8645ade3ee","fff4c3a9fa","4af283fa34","b31dbb8024","a66b998f47","ecf4e37e72","8ea44c3b8f","830e819904","c4bd5cc4c8","0de89c8e50","b9c370a7b5","6bf4dfa8f0","bc55626e5e","bebb845cec","83419b61de","9bfd39b3a9","8d9cbc3631","4670b0bb93","28b2e35d89","b7f1d5bea4","df7259dc05","2b42dde9ac","55f9494ed4","e613270ce4","5a35edbc3e","ebaa692ea2","ce98225f47","6cbb0ed776","36e6e54f9c","55f9494ed4","e613270ce4","5a35edbc3e","ebaa692ea2","ce98225f47","6cbb0ed776","36e6e54f9c","d4f5ea0beb","121068a72d","044cf26257","7367006ca4","2b68a1513e","0c6e41fabe","90f8f0a712","33d7b8e21e","ac2e08758e","5ece0471da","6b636a6400","d419183957","cd52e6bdea","10abdb26ca","33d7b8e21e","ac2e08758e","5ece0471da","6b636a6400","d419183957","cd52e6bdea","10abdb26ca","0f1a76e24d","5ba3c2f511","887582e79e","3146c51520","afc0a0c3e5","8c9d02a040","ce9adef846","3fb6720e61","68f76dd6ea","e956b5e612","250a267adf","df7d5bb0dd","2b9bce5041","8e7ae7732a","0278dfac79","eac3cffd89","9ccd1d4ad1","8e8695e9f6","553d37ec4a","6cb2a941b1","cd749c7326","7cf0f33df8","50ebf6595d","5ff9f1ae63","d1f5cfe910","32512353da","bf99dda385","42b3f1afec","9c8ab7625a","201d296e49","0697752c12","2dc5200a35","ad20c76285","fba973b77b","5d2b3b1f59","a14c1a89e6","315fd9a5b0","8e33595fb9","0c08c62bfa","4b8c0d4691","7959fe894c","89c626689c","51b7130466","59596c8e55","8e90e5c546","9c31e61418","e7a42b48f6","78c1c400e9","8cbc361666","51b7130466","59596c8e55","8e90e5c546","9c31e61418","e7a42b48f6","78c1c400e9","8cbc361666","b47b9aa1f6","3f99089576","c5af21ed49","f7a7920a63","df1b2c85eb","629580c968","94eca6663c","3aaea51e5f","7963374a2a","f659f9f897","a1573c7b2f","bb7154a278","efee473385","25272ced00","3aaea51e5f","7963374a2a","f659f9f897","a1573c7b2f","bb7154a278","efee473385","25272ced00","cede272f0d","50b286336e","930a1d0418","6866bf9c48","36c2e5415a","71e63e89df","91708167ab","fb3e0a7adb","c3903cabb1","b06afbea76","0747bfb62d","a996d1f280","a63864aced","5e59fbdb37","0a0d06370e","bcf91fd96a","52077464c6","141750521a","00d868fe52","0b0806d598","5e1ce06b14","05d036b849","81a6f9c898","451f462b48","5d6cbda042","311e1ff016","6173922961","441f05aa41","d282dd4168","f8fd1b22e5","e43fff7e2b","697037259a","4ea11ea167","712c35a7aa","e5aca5dfe5","d282dd4168","f8fd1b22e5","e43fff7e2b","697037259a","4ea11ea167","712c35a7aa","e5aca5dfe5","7eaf380567","b0a10c1d7c","b38b9bdb5a","86755fa0c9","2ad18dc325","1f2ffc2f43","c96a0f04ff","9d044312e4","716ca9e448","8718cbcdbd","d7813717d8","136de3ddbb","ceb7da4f63","a6f27c4306","5448f59622","cfc6987356","da1b8343d5","bef8d06c35","8f6da54dc8","a129d51bad","d2c0405f18","b1aa3f26bd","e552831fde","57b55f74cc","71c9fec4eb","899450f221","5bf1a5b3b4","f414f77f38","f22e60fa45","841a67605b","847b6cb1c7","ae468b00fb","a097a2b7b8","29333a26b9","690a9e8534","95b3b14700","4d7e7a4210","bf1e1ef400","86025724dd","b1f39df237","2b2388f988","14ec7d33b9","1c8e20d6a2","03b16dd0f2","0818c42e16","47b8f6637a","5b031c391c","4789c97086","e7bc7663df","f22e60fa45","841a67605b","847b6cb1c7","ae468b00fb","a097a2b7b8","29333a26b9","690a9e8534","293beda2c3","8fd4933ac9","04b53fe01a","72a40f9874","fab9569ae5","d1d23bb173","f117013812","677871c842","8a907d1cef","7528a403df","f51ccc4117","abd164a1d3","bc8fef5365","33b8b8b41e","e52f47fbe1","31837f6f13","9d747a2410","6f6302f45e","9b307d8dc0","99e25f0a3a","b9ef48774c","9293832dfb","a438177bec","ff4d715270","d157c9ef51","b271705a7e","6f8dab1bda","34c47e9a52","efb69567bb","9fcd41972c","8cf4257ad2","714efc1562","795c5b7965","62e65b5a5c","dcaa86f00d","b111b952a4","e50db65112","f11d5b3fc8","fa65890632","5377c1c5f7","b52a5b9764","300368db8e","52c10f36cd","2e11a7966b","e87d247fc2","fb7b9e65d7","ec6cc03dd5","7be012b190","2c11c3a886","a6879766b3","d491fe76d6","b6f0090696","bb160683f8","1874dc3c63","8e1155f0ce","5d11160520","ba2a123645","c6330f1865","ebb3e2bf59","f139a47239","128da47f40","b1ac206273","6c775dbdc2","ba2a123645","c6330f1865","ebb3e2bf59","f139a47239","128da47f40","b1ac206273","6c775dbdc2","7b63b6e59f","2700576e1c","1b1a6665ad","1b74e5f769","7335310647","d03e03508d","48b5af3f0f","28454f0524","6d79648cb9","c7b5fe7591","4e9f85634b","f9a1a14375","89b06bc6a4","3b13ecf470","4293ac4bb8","f0a5754c09","199c6eb847","57758d1f2c","6c2d026e3e","85f798f7a4","9f7768c672","11f1c53685","739a071546","5f5f0ea0c1","746ea6efd4","eb7e1dc0be","7661b25d3b","298a3b8d61","1249cc1111","72adc3f1c0","0528adf07a","5b8c09a8f9","11cfdf78c4","cc1e1f385d","4a138d9f76","fa3cf338c9","8b88340082","a30112e133","94784e4737","1fd9e4ae67","10d2f83792","6a166d436a","00aaa92792","9f1216e48d","cbf88e49b6","d2bd4e1779","796bc2dbaf","ab46f5a322","2a1db3bd19","b828885796","e00e6ccdfb","85718b0b40","b8264c7d63","9250e212f4","15b273a8f9","369f9f2ff0","0f13e8d990","f00cd9d855","c3b8735b0a","cc49c6ea3a","954206646d","03eeba458d","b5f9f3278c","4293ac4bb8","f0a5754c09","199c6eb847","57758d1f2c","6c2d026e3e","85f798f7a4","9f7768c672","51d743e94d","617103e027","4c0a87349a","bfa3b81712","58f14dcbff","a60e448fee","666fe31b76","81461d49e0","e8a18cbd7c","a714a4f7a2","2c65365184","20e0324d77","775be638e0","dd725453eb","de525b5762","e6a132a619","369cf50599","98b3bda6dc","cfc374d100","0fa8cb8d43","e5625c6eb4","933fccb558","b33316b377","096f4740a5","2b36696538","34cb94c9f0","c137089ee2","809f9d5f4e","f066e0b2da","38588b5b51","2dce0c702b","3840ceeae7","7edcba9dc9","a8fa20d65c","f134145b7f","de525b5762","e6a132a619","369cf50599","98b3bda6dc","cfc374d100","0fa8cb8d43","e5625c6eb4","de525b5762","e6a132a619","369cf50599","98b3bda6dc","cfc374d100","0fa8cb8d43","e5625c6eb4","973cb20cec","d6957c6c22","9087942c0b","fdf99b8c06","521ef43032","61ac592218","dcee34bfa3","86ae9822b8","1aa56bb123","342d534a31","16f00511a1","d1acdf5272","660d5dd3fc","31dfbf3487","4d3a87fdb8","bd10304d44","53f3467f21","2faaecaf05","49532f8f32","265a0a6622","43968f98ac","ea4f58304c","d887a25d60","fa7e8bcc4c","4a70dc7b6b","c964fc6760","d4e6aaf510","dc08acd362","6f1d7be4a1","cc3038b697","9d03b68931","ed40517238","9710eea3ed","23669f782d","7eb83bbb44","a711f3eb67","917e1a1fe8","c1890ae2e0","bc52c4c133","8413bf3451","5a1f5cf7b9","7cf00704c4","108226e451","c8b351fcb8","fcac7e0528","7c85c8360f","593ad26568","5773b57bde","ccd2a4b5be","6f1d7be4a1","cc3038b697","9d03b68931","ed40517238","9710eea3ed","23669f782d","7eb83bbb44","c9596b0cdf","ed5f903e1a","115d2e5c7d","da9cff5ce9","fa93b5a290","e3af879c21","e08c58bd7e","51a7f0911d","b5dceac9dc","918673bd6c","60dfc6071f","258dce1922","62559c16c8","3f9f2bbbe0","092a53e56e","28b18c2b2a","6c138bac1e","312f0f4d53","328b653f2e","191efcd1fd","11433a543b","6b309f3b7c","41e208ce85","649e090559","163d85535b","5b2351de8a","ebde95786c","658952939f","62b5f577ba","f6addf8251","639acd0147","6eabba552e","e95aa2448c","8f255b2871","fad14f567b","d9ac665ce3","544a56f658","47827e1d38","7234d00263","a6b3a96989","d20e9b8a38","f3240f24a3","092a53e56e","28b18c2b2a","6c138bac1e","312f0f4d53","328b653f2e","191efcd1fd","11433a543b","1e7cd0cd53","c450b56fdd","8bd67e0c98","d1e9cba7d7","be612ed82e","0a06307e13","06a7e7ef72","8e2c3c51c8","95ae3f8760","a5a0f0f31d","5e628e1a20","33c8937a91","24cca7dd34","b2ea366e16","8e2c3c51c8","95ae3f8760","a5a0f0f31d","5e628e1a20","33c8937a91","24cca7dd34","b2ea366e16","134ba3f907","d819da9dbe","6652b226e0","59fa39bf3d","ebbd1a7c89","db925f2ade","fd390977e4","5b84a2464f","b8eec882d2","05cc6843f3","d13c61cce1","4edede453d","93cd58ed87","d45f4e89e5","5b84a2464f","b8eec882d2","05cc6843f3","d13c61cce1","4edede453d","93cd58ed87","d45f4e89e5","cbebb86820","dd0957579d","d82f3fd98a","16e6279e46","6e86c0ce65","a29e43a34b","e403602242","9bb5843891","158388511d","c95b9dd2f0","a142e7201c","30610c9c7a","35122962e4","54007b4a95","ac166ff6be","9a482bfca5","f4df92cf43","b23c302a08","ce479894a8","401711695b","5fa6be6458","12f14a64e3","ec5ca8eda7","35370e168b","7cd735bc55","d3911c5828","d41783e7c8","224503cd52","e216316752","d42fe65c97","1e33c431fe","ec99d72b4a","4eaa1299e7","b65c999efc","3d8be25af7","a1ce1cb2fd","afa26ebb9d","dec6ddefa8","91366b6480","d5d0a364b3","123fe96217","841b7f9c67","f3542d22cd","5d9131896b","f34bed30ba","303ba17138","1930ed45dd","74ffeedfab","eb196ce181","f3542d22cd","5d9131896b","f34bed30ba","303ba17138","1930ed45dd","74ffeedfab","eb196ce181","6263dd6497","e168025a86","a53a224d80","f1ffd32d90","92128c4dd2","fb49ce057b","e945c691e2","14e7c62d03","01ae2d7a9c","faf16ff759","1bde9c27e1","5e867e77ba","9cd8a4f578","22806b5074","65ec6676d8","b45ea5db6b","1c99bbb59f","ea7208c094","9910cb65ac","67fc66a6f5","d7e2cf6ab2","fff8d1632f","78688836a4","7c37e4eb84","cc7f8899c2","6895984d24","276922c758","6dcb961b8f","fff8d1632f","78688836a4","7c37e4eb84","cc7f8899c2","6895984d24","276922c758","6dcb961b8f","f72f32ad01","73d4864592","434f726537","ced8706662","33eefe169a","353a64b9fb","665ee4bb56","6e2fe29554","73b46b0bf3","7ba391eeff","ddb086887f","286238821a","43b52f165a","18afeca45e","eb1ab789c6","6d8fe7f07f","1ce4f15904","1d569d25c4","f5acaf8fcf","d2c7c360ba","0cd554e85e","2eac1c5d1b","89a571e790","04a2024ce9","61859bed0a","32ffd6161d","7d9b7ac51d","50f639bcfb","2eac1c5d1b","89a571e790","04a2024ce9","61859bed0a","32ffd6161d","7d9b7ac51d","50f639bcfb","8d98f40d97","ac7f239fe9","ca4de48969","f4496dd165","af30332170","471a78a00a","b580da1d78","9396ab1859","1245e63dd6","b645bf5bcd","46430a9db5","e6c6f4cb41","9a8ec6b9b9","c4bfc1fbfb","a553dbb549","c324a40cbc","6f63f803ef","6198a741e3","39fbf31b0b","a9a8a5f2d4","8832b11b13","a4fa8ec799","9266481146","a44e0f90c4","3eb4234deb","850ffc0817","cd69f17389","4e38ab44aa","aceee4db52","55dab72248","7a7bb947f3","3c528903cb","dd46499846","07feffde31","08ea3adb6a","fcf54a3860","e91aba5e94","bdd63decc2","096482927a","40e4ad0583","384d648d97","876974f8f7","542d599656","4b02045085","b33362b72c","caefcae5c3","87d1a0d3b7","014703e3ff","5d444cf7cc","542d599656","4b02045085","b33362b72c","caefcae5c3","87d1a0d3b7","014703e3ff","5d444cf7cc","2bd2577563","622c7165a5","cb7d7fc504","7a7f1ccc73","e987c733b4","54b452a56e","3aed434815","a934959001","dd7cfc0825","5c573b3b21","acfd145114","a23d0cb45a","7935d988a1","be7d172319","0de3613fd3","62cb6232ee","7dd46f441d","8abbfc4e79","49b4645af2","35698c65f3","deb0803e48","d370236e60","2d966aefdf","1d6b44f34a","78bbd68788","c24cee9c63","a75e7cb401","a047aaaf2a","346d228ca1","795f0d31b9","66afd11b8a","eba098d949","303e6c5093","658111c7e8","0099385c7a","a76daba80b","97016f13e4","dd9bfbd90c","307c17f7a1","46039b341d","75fdf59f37","5193b423d2","70905dfbca","206fbd8158","4a11554a16","5d1eab7b7a","4fcfbdb490","83a3b61574","bb29159f42","0479adf100","0515fd6696","ea7840d3d2","b829d6754a","9bb9cc72dc","54ef1c4ca6","0f1fa5fbc8","0479adf100","0515fd6696","ea7840d3d2","b829d6754a","9bb9cc72dc","54ef1c4ca6","0f1fa5fbc8","3191f21bbe","20dd644f07","f029b31de7","d912f1cd74","1a98330811","e9e6b2ad14","b1190c58e1","ce19682188","c6cc3ff531","ec9aa706fa","5102d79c10","e55657b53f","cd06f3e7c5","4ef2e23b97","cba191274d","7fd2e763fe","d19a3b9fd9","68d6b75c73","9f9c485701","50249be509","7a7e1be0bd","33197a3967","09f969db71","e73d6c909d","618626f9bb","444475c445","cfd100a20d","2eaf67c445","d7743087c8","2371842528","035c75eb60","e6ceaf5add","2788a455ac","bcce86ea72","6053cd2ced","b007ab2cec","2a9a69aa28","47aa3ff5e1","a9645bfd33","f2cba9f70a","47629060ba","aa0df8b413","839600709b","5068c146eb","b1892acf47","ba41827e4f","76c374da91","4182ceca63","afe52ec30e","5700609a9f","8d61090b7b","32c8e15811","ea34165c7a","fbcc31a37d","7db8ec1448","6165b93e07","c523b49b9b","b8e70552a9","b6538ed242","956dbe31cc","2818cb6fca","74b700eba4","546c271a87","aa4214a9ff","8af78c5213","65e8a38676","9ebe4b294f","8af9ced968","b468eeed19","e1b4bcb1a7","daace9f256","c689fba5f8","2415bbe9ad","3d5fbbe53b","5f6274274d","086d423014","3f8212b6fd","1bfd6d046f","cd40e6c188","d40fafab9d","97ff3e7eab","6ac4db93c4","f3c19c3953","49b129886e","1bfd6d046f","cd40e6c188","d40fafab9d","97ff3e7eab","6ac4db93c4","f3c19c3953","49b129886e","699c57000e","c9bde91e20","6fcdd53b0e","a940caaf92","61e106e7b9","287150bfb9","1c4fd7342e","4bd7338b22","e0a21cbdb3","cc4ff2a779","3f6259de7e","d7d199da10","9ab420bba4","147d272f8a","f1e950ebec","a2f02ff18a","421f359ca5","3c01cec4f1","e58d4ed88a","82056fe206","7921e1a8cc","c5265882b8","d2f0aed142","893f92ec67","d939f7db43","3d4528b978","8f4d5ec750","62d2e94aeb","89462ff6d1","10d5b90ecc","1dafe9eae4","8e595ca144","f98a3dc49a","9006b730be","d621d827ed","89462ff6d1","10d5b90ecc","1dafe9eae4","8e595ca144","f98a3dc49a","9006b730be","d621d827ed","721e967f05","379ff11be6","3cbce30bdf","522cb69f4e","4aeb37587f","b9bac931df","f1c3e1415c","85af41ca44","34bdaf4000","9e1fce3361","a537eeb5dc","0b31de880e","329a35702c","0f12257820","89462ff6d1","10d5b90ecc","1dafe9eae4","8e595ca144","f98a3dc49a","9006b730be","d621d827ed","6e94673e69","edad8f009e","3fd9108df8","0f7c145dc4","dd3389d69b","95221d7cbc","5e95c670a5","e312849b8c","8ffff2aff7","a3fd4740d4","b5998f23e6","9048087760","3f704948c7","04b9566f98","e312849b8c","8ffff2aff7","a3fd4740d4","b5998f23e6","9048087760","3f704948c7","04b9566f98","2ab05a4437","6abf2cf12b","3798df95b6","697275056f","cd44ad3bcd","6449dfcc39","c17ab351ed","94336f183b","7a57a9000d","d4a0cf0d43","2141b2d492","32b4dc0d81","cf41dea56f","4bf8b69083","a003bf4d98","8073bf9d8f","51ffbcd289","9657076bab","0771f13b50","e4d06e2136","d6de9f8c99","5177ac54f0","fbd640f36f","c070ae4acc","e1607a0f6d","ef0d6d77eb","0cfe8c1c5e","94219a51c0","5177ac54f0","fbd640f36f","c070ae4acc","e1607a0f6d","ef0d6d77eb","0cfe8c1c5e","94219a51c0","826fdb635c","77f954593d","e0bffd4f74","f56971fa1f","376909354b","0d67faf733","5f42c93aa1","53cedd7e85","2af6d45b13","809128f872","0bed01cb01","30461fbc17","7d5350e67f","31d5d487f8","53dfa6b707","4a4cbcd450","e3b8f7017f","0644b66314","dfa20a89a1","99bbc064af","41ec4091a6","89cbf2210f","2937c56a68","b41b15ecb5","89f9f9f34a","256a32fe1a","a78325186f","8127eb2991","8e144f7b59","46827d85c3","dbca5a575f","a7822675ae","78cfd65610","066c5e13b0","5db68451ab","1d2d5fd7a3","6966be9f13","de998dad87","340872d384","729c92bd6d","63d47c3566","a202ef83ef","b2107c2c21","2be996b469","3148bccc93","a72d866408","330f7c6be4","edf071ae83","a7b4bdf5b6","64c53019bf","c066043964","1d4a068ddc","5250ad4038","dd2d2f212e","496056f193","5dc6995b0c","64c53019bf","c066043964","1d4a068ddc","5250ad4038","dd2d2f212e","496056f193","5dc6995b0c","8517a18da0","fd790da6d6","d8c3e6b94a","18e84c17cf","9e7730497f","6b9d7fb3d8","b5e19b9f45","eb23711930","b0664f10bf","b58abed859","8cd9c1a5e3","a463ea7cca","30ca63d8ad","57e3b000ad","a6c455c921","076aa05f26","47dc6f171d","20d4f2343e","720c30a1c0","89d9c5d0bd","1238174784","b725ad8e91","c611f53be3","6fa232b83c","fe8e181250","85a5151e6c","eacf8ee354","153cb0b787","7d26143989","6e7a86bd83","dac7b82e9e","33a3433cbb","a6dc25e79c","228be22f51","d0fd455621","aab81376c5","37a7db1920","130dd9294b","d507659f33","eb40edaaf9","d4941b4b2b","e5dd90013f","359ba5bf1b","310f622b30","1caaadfa39","382496455a","ade97bfbc9","ca3383cb30","a3cc8d89cf","359ba5bf1b","310f622b30","1caaadfa39","382496455a","ade97bfbc9","ca3383cb30","a3cc8d89cf","1a2a6a2c85","8c5b5e6bd7","2b9140e3e3","7ab36d6868","fa93ca2270","9983fe3ee0","6ed8a8b14b","1a2a6a2c85","8c5b5e6bd7","2b9140e3e3","7ab36d6868","fa93ca2270","9983fe3ee0","6ed8a8b14b","1a2a6a2c85","8c5b5e6bd7","2b9140e3e3","7ab36d6868","fa93ca2270","9983fe3ee0","6ed8a8b14b","20365c9352","8d3d7784e0","abb4563e96","6e2efd3491","f1203f9c07","08e2f54998","92a1b7bf81","28a03ef735","aa8f86b6c9","1a21d3ca2d","a52a992076","f9cf5f2092","8fb9e76a93","074dbf7226","3dc7bb51ab","bb1d63a621","5ffe864771","bb0348e1de","57f45cbb8d","4d4f83ada0","33d2561d19","17e2752d18","d60ae620e6","ed32744763","774e7b773f","fdf688cc6e","3bb5c45e76","c5b79e8ae4","9e898274f0","fbd4cba621","f1f3fdc77e","88e6fba2c0","6d38e655ba","9989c3faee","98d107f9fa","3c129c498c","7c63e14ec8","e39c835720","7684f780a0","d8b7d9631d","370eab528c","b38e1fa6a1","96a9beed05","babf7a9820","71bda317d8","2a5e90f1ce","94596cf302","641020affd","72df75d242","e45d672632","1bdb85f99e","0046e03815","0a83ecdddb","eb03ece431","84071738df","d5b0347eee","62c3221a92","a5056d0376","1a3b587f35","71263bcb55","bb7d8bc872","4ca5f2e989","f95c864403","4042e431c1","96921f75ee","e11f297dfc","fbf9f6e614","72fd812fc6","6717d9c939","08fac27e1f","fc96e0ad84","1813ac34f5","19933251de","a87fb93b7a","4cedc567a2","2b971e1cb9","b11a1c8fcf","fc96e0ad84","1813ac34f5","19933251de","a87fb93b7a","4cedc567a2","2b971e1cb9","b11a1c8fcf","a9535209c6","523930a287","26f7fe05d9","7a1ad43402","b22c4696a0","f7eef7d3a2","29bc0eeb09","dadb85d785","286b53be34","ff5c95f86e","4d237a7edf","360a1f31ef","cb21b7df30","f6cd91e7a2","74cb1b6774","c46eee4d99","ccce0120d8","80c4c93e03","33c6c93880","c654946367","c9f2ec0cdd","2e80bf15ca","368d85fb13","a70f683e97","dae5713348","ae365ef860","29b9f32455","653f30468d","3f94bf570e","db488d3f6a","e396814682","2cc47e7f2a","ee9b4195f8","92ff3f3c05","471d70c0ad","5e9cdc5366","36dbdd7d55","0ae7f43857","9896936ad2","830ba0a7a5","bbeabc5ff1","c868b4df82","5e9cdc5366","36dbdd7d55","0ae7f43857","9896936ad2","830ba0a7a5","bbeabc5ff1","c868b4df82","d06944fef6","efd881d0cc","1cc41d65fc","53d8a3304a","212b00327d","1d0cb2f012","c2d55f31f1","8f132d1023","ff3be53d4b","6cd882ade3","3bae53ef7b","af79f84446","e283ad7972","dbdef93da0","d34bd58bff","25b4d84faf","eee5c50648","53efdd15cc","4a437fbf53","18729a4927","c66a5ad9c4","d06944fef6","efd881d0cc","1cc41d65fc","53d8a3304a","212b00327d","1d0cb2f012","c2d55f31f1","0b47e926b2","085c453dcd","624c7639fd","8df6eefef2","1453318bc0","57a8f60d0e","0714a99b30","258c574cea","bac7719b7f","b89b9b9c13","0587e8aa28","650b5b3e6e","3642782645","aaf75a3715","ad4d38c502","2fe14787d9","e0473898bc","606e5e4c3e","5b60b72239","0684d0af8a","46a70c40af","f03e02f35a","2bf0f7ea83","58a2045df3","2aa44f96f4","ec121ff09a","ad4e2f0d2f","cc317eeff2","1a20b5d95e","d53b7a0cc6","94e9e17ead","069e0c55a5","669f203ca8","7969b3493f","c05385cc84","f44bb2431f","ebbb21fc95","e03993d51b","8c6d35fd1c","634afe8614","2c5a2a9be2","7ac94b407e","23bff28b41","afaa2fcd49","2f99b57e73","694bfbc767","c382d215e6","3139299161","efdc5d5eb1","030e74d7a8","72c32d15ac","4d424e6f41","80afa14198","1448353bfa","41cdff8ad5","069aba4a67","797da0f937","c79f7fb7e1","4369ec25d9","8de971c96c","ba2c285760","226198709b","c8b5c04072","7902ea1f2b","9ab0433fde","e521487aad","a623d5903f","f1fae74144","7d5764347e","9989a2c4fc","5d3d9d0e80","1cfcf1e8fa","a9a878ebd3","b1ebc9580e","67fc90cc05","a9080a058a","4ae7f820f0","5d3d9d0e80","1cfcf1e8fa","a9a878ebd3","b1ebc9580e","67fc90cc05","a9080a058a","4ae7f820f0","0ceaeef770","9d603299b8","a8534b00c9","f9d95160a6","3ce8ece13e","8805373425","8724c7e12a","76fc0cd3ce","c51c506678","ed6d65226d","643c18a0d2","a40c324fb1","131ce236d0","d109d4735d","cf89b9cbd9","9e683aecfe","5ec7a45310","6117887f1f","73f9f74d08","460457cb10","d1aea8b397","2cfda9955a","fa419e8614","190d546a1f","ceb6f36950","38ef012067","19b2ae6bef","f26979b976","a52e39f456","12240bba22","30b7563d48","a87331e836","037b495303","6675bf705b","a7b95a6333","0b191f8b0d","a4a79fb3fe","96c4c19a86","4d55b06265","7e9bf71a90","b419ff0f96","e2e267d8c3","811c352818","72baf4c5bf","d92cd8242b","0912e5c338","921db4abf1","45e17fad24","7769d041f0","c83f27f294","4ca02d4776","03f985a0cf","c8169d430a","8ca4166c37","d552a2b9ff","794a793fe7","2e040cb699","47ba855b90","b98fc8993b","2447be1b49","90ec037faf","ce52eb8659","311b8d2b3c","28fe05f978","18d02c6824","6b8298e96f","be12bd5c2b","d41eac15d2","502dd970ce","d53f96ddc2","d5cc0118b0","dfa6665de1","db122ee4aa","159df5a4f3","e64e4e87c3","985c717f4f","89c476ba75","fe04c57bbc","74b7760f74","451edafc74","ab91eb6364","d436856ae0","415b239ba4","ee91514016","a841e539eb","5fe8727743","2759b9d88e","a07a58e539","0f3d6ef8c6","68b2e0b8b5","dbb399994a","d08bd4eda7","548e71cd8a","12323b06f3","f1fbfd1c27","8048ca0e90","3766ad6327","35882a79f2","96f346b921","9e7dc95d9f","213de7d87a","9d5af8e2f3","f30e4ec0af","10981bf3d5","c6e86e2069","2cfda9955a","fa419e8614","190d546a1f","ceb6f36950","38ef012067","19b2ae6bef","f26979b976","b9e7ab00ce","5e03d2ffae","1b1020657f","060e709f96","3df0dc68ba","9cdebb167e","9a69875d05","b9e7ab00ce","5e03d2ffae","1b1020657f","060e709f96","3df0dc68ba","9cdebb167e","9a69875d05","e9b385bd3a","8d26baa328","f3e4851247","4dde16e968","15ec478595","d14980a597","26d131bfc9","97aeda91a4","7a3596ee8f","bf55e39ccd","41478738bb","3b7ba0e0a5","0aa0fcd96f","ac510febd7","281494758b","f6460c1e40","5e2bfa71de","71c9b99bca","3292e8fb94","4fc9013b98","5598e25f74","b7c1607b3f","f62bcef34a","8090d8741d","edec6b7209","f784c32dbc","e266799ec4","800ff8be9c","9a1cf1c88a","2b186ac661","93b0137c22","68d637d03b","3d313ec36c","f5c9f21798","f69858fd76","273e707836","fcc80dc123","6a5db802d3","89165ec9e9","385b42ac56","b1d2e6aefa","f02c815ee9","30602ef50c","191b1e50b5","0e5704e7c2","0acde0e6ce","3b5b5ec096","669503b0fa","0cdd948554","da752201c4","215596ad3b","b70469bf6e","3004c5db6a","75d630641a","139b43d105","80e4e75d76","da752201c4","215596ad3b","b70469bf6e","3004c5db6a","75d630641a","139b43d105","80e4e75d76","efadc9a8ac","5a24b51a17","1ffd40a8c2","6b4278856e","60697daa79","1a19c2819a","e1b248487e","264d0c8104","5d5c0e752a","1dcccb0d03","9bf571ee6f","259baef549","fe6aa90b63","51ae88c231","5632253b0b","3edccf3c70","b9a3ea955b","3338c8ffc6","04b7d4303b","06eb53546e","9ac8b6be53","3c0336b090","c1a63bf4fa","3dd936ff83","70a37fdcab","0528f19397","7c17c94189","185f6e2ae8","49e89e9a27","ddf575fba1","af84f0291e","5003d474eb","1eac0ef116","5c88e7f54f","3b1c825704","7bd15e44f3","1248171335","03eca09ef6","1c9e3c370d","4e672581cb","181a1ab20d","d0a30ce227","8a2ca5ac1b","bcd770f15c","0b4a3ac257","0499f1cb83","a2b1925333","ba22e6fa4b","86c0f33bdd","68f7dd5174","8a480950d6","d30eb89b88","cd4b10a00e","966077a1d9","9898ecbd1f","5af4e382b8","49e89e9a27","ddf575fba1","af84f0291e","5003d474eb","1eac0ef116","5c88e7f54f","3b1c825704","f6cdece705","fd32ec04d2","8316251850","e28fbd8b70","3e94ca94df","b24b4f9cc6","5b5a06531b","f6cdece705","fd32ec04d2","8316251850","e28fbd8b70","3e94ca94df","b24b4f9cc6","5b5a06531b","5182930e7e","10a2d02c8b","2ae31681ad","1f61c92efd","4ff4350dee","1f608f9e38","e6bfc3263c","817b0733b2","c5e7cf2ecc","0f3215ec35","a0507fbff1","da04499ea0","8730cca280","290bf79cf8","4c1725e0ee","f2f205b47d","6d35b810d5","7f46d1cd47","e2d4732ddf","851d21dd34","4ead6acb47","6187ec1591","832b516412","b8f6aff90a","f0e274b33e","f055bbfe26","965bcab1b5","70bea03a93","6187ec1591","832b516412","b8f6aff90a","f0e274b33e","f055bbfe26","965bcab1b5","70bea03a93","5e91ff4b75","35b37b6af4","c1515873f7","fed1914ffb","7e5b0b4116","47d290a9d8","e7966430fb","24becc033d","8ad7befcc8","9380bfc24c","14afed5174","b987490323","cd0b8544ad","005cd55b6a","940c6693fb","c737cfd669","d3bf66b727","55f70dd5ba","9d7383f921","0b8009e409","da7e2fd53c","fdbb57cfc0","abdffbe770","4e577c0cdb","6baaf52c4c","eebfbe6c11","57ff7a0c43","f7508cf33f","399b142673","32a87ae5ed","6bab8cb2a9","1acf0e461a","d96d7a0dac","426f4eae09","0658353ee8","4202c7044b","d5958fe5a2","9b8650be74","e12258c766","0a2a9a8331","22f5b4e6d9","577b6f1958","6d68707423","b138e04e4c","82dfd7f539","0e4d74479d","cec87a18e4","0e672103c3","7dacfeb16f","d9b3262c71","a2ddb033ce","7e440c102e","cfef0b199a","aab485f308","53067be9de","3d1166a146","9d3fbdcba5","4da7e04b95","7bf7264224","c9f47881ab","f0b660f9db","07af43593b","854560a5e4","940c6693fb","c737cfd669","d3bf66b727","55f70dd5ba","9d7383f921","0b8009e409","da7e2fd53c","c9e7338843","5b9ea62e2a","4b5dfd28ab","3d8f7a7faf","0a456d327b","94e3937bb9","f4836684b6","c9e7338843","5b9ea62e2a","4b5dfd28ab","3d8f7a7faf","0a456d327b","94e3937bb9","f4836684b6","f241970469","16d047f4db","43114572f3","b74cb813a4","aa17587b86","f0d490094b","1e2f808b86","f241970469","16d047f4db","43114572f3","b74cb813a4","aa17587b86","f0d490094b","1e2f808b86","039d9efec4","2d4bdea03f","843cc518b1","fc4f449a69","fc02bd18b4","356748b1f1","7a77ea2c28","ea1db3e2ec","783ab7122d","a5854d2562","da8bc3351c","91a28fa7b9","8abb17883f","b9ad2cff07","c30f6807b6","513b5b3f77","11233f3e32","cd0d3a6f6a","d3c771705d","3233538216","c2ecef74f1","eb407fbdfc","f033859eba","b1dfde2d78","ddac210d6b","4ef261918c","a220780a60","250eaf00aa","b3826aefd5","16430779d4","f634ac8a6b","4bce0ec328","d6cf3dfcd3","3813c49d4f","b87d327552","ac1e136b51","dfde888bb8","9dfb2ad5da","481946a071","f9a6dbfee5","70b4861f02","3f3747417f","c30f6807b6","513b5b3f77","11233f3e32","cd0d3a6f6a","d3c771705d","3233538216","c2ecef74f1","2636d61ee3","10bd4876a5","acf62ee29a","6bc54159f3","2f1f655dea","ef74af9912","999e69c01c","2636d61ee3","10bd4876a5","acf62ee29a","6bc54159f3","2f1f655dea","ef74af9912","999e69c01c","04ab819462","0fff522abe","b80fab3698","f099007321","9aceffec60","2ca5e32996","b26d6da347","04ab819462","0fff522abe","b80fab3698","f099007321","9aceffec60","2ca5e32996","b26d6da347","1fc7ba8585","65618b651c","95c9f9700a","4456766c3d","e834e07eda","4376f3e62d","8263948019","a7b7e54e21","09825e75c0","0d54139c09","147e625a72","d2f8e5498b","8fe5560b61","2f858d1101","04ab819462","0fff522abe","b80fab3698","f099007321","9aceffec60","2ca5e32996","b26d6da347","1bcebb8a20","880e982df4","5f352d00d3","70c56f9daa","509af5c927","05131ceeb9","91dba90cfd","d72472f68c","735124c887","6a33fe9d45","c4c3e5d039","a6081d3d5c","0d3a21adf3","5631625cf5","d72472f68c","735124c887","6a33fe9d45","c4c3e5d039","a6081d3d5c","0d3a21adf3","5631625cf5","04ab819462","0fff522abe","b80fab3698","f099007321","9aceffec60","2ca5e32996","b26d6da347","9a3182ae49","6e9bab3758","1ac3f9dd9e","f01ae1e6cc","d33125e33f","a3cac4f269","49b9913c07","84e59a61cf","c0dadb007f","434a8c45dd","5457318e46","57814781e5","c157f44613","d5b0dde335","84e59a61cf","c0dadb007f","434a8c45dd","5457318e46","57814781e5","c157f44613","d5b0dde335","cebf64d35d","0b794a74d3","248e5fc685","c0e0d05c90","7945c4e963","e21e7131c4","88debb2af1","032d6bf7b4","7852135283","18278bab11","4a9f691e44","f79ac51d11","0ba2368827","bf9a60f384","e8c2207856","c0545ece38","b62d0e2660","003da6190b","6a8038bdd8","78252a83ac","5d32f2f7a7","087d70ca40","39ffededb8","72b428e260","a3a5a252d3","d962550901","a08494ac66","f748f60d5b","89873261a1","aff49be4c5","0afa615004","ce484b45c4","c28b3dea02","a90fd0b54f","96d8be71b1","0c2c6935f6","0da8c2a03a","3e935bc202","fa76da9042","1c63137bd3","897ca7776b","8df3b54c94","e8c2207856","c0545ece38","b62d0e2660","003da6190b","6a8038bdd8","78252a83ac","5d32f2f7a7","e8c2207856","c0545ece38","b62d0e2660","003da6190b","6a8038bdd8","78252a83ac","5d32f2f7a7","95728a5b41","aee20b7b5b","5ca4e77c1a","bb6db1ed42","382e31339b","1b21e9e63c","b662ceaa01","0d995f4920","39f716ac13","73d53fef84","0d81b46f25","140448fa75","f5d0f111ac","a75ebfb10d","321e80ebdc","2d0b8da0da","e9932125dc","0c12684c80","34a4ec9058","ea78e94aec","1674d76282","907bc6c278","1c6db1e5e9","2f3fab45fb","031d0b7ce5","7766372eb8","2a355023a9","7623c5054f","442a73f4a6","1aaa674d77","13a943dfd1","b1033d693b","3bb463a1b4","245e4113a0","e1efe19ed8","0d995f4920","39f716ac13","73d53fef84","0d81b46f25","140448fa75","f5d0f111ac","a75ebfb10d","95728a5b41","aee20b7b5b","5ca4e77c1a","bb6db1ed42","382e31339b","1b21e9e63c","b662ceaa01","0d995f4920","39f716ac13","73d53fef84","0d81b46f25","140448fa75","f5d0f111ac","a75ebfb10d","0d995f4920","39f716ac13","73d53fef84","0d81b46f25","140448fa75","f5d0f111ac","a75ebfb10d","5c9535fa3a","378d7d0f95","ba262ffffa","d577545c70","ff378edbd7","a85336dcdd","83ed3acac0","98c284a366","43e6dd495c","6c6278c9e6","cf94a4b1e1","0ffefbcf62","be09fec20f","e0dc344a9c","317f846077","2677f794d9","e68de92341","9118514265","21d8567e66","99e7be1ec6","7de304d8a6","5e65cf31be","a188835eeb","f1431ef839","773e578566","7386a60fb3","3577dcd8e8","66420a3903","962b559be3","c72760cb6f","c2914dd7ee","ce9c03e550","1dcb42bd37","20bd23b930","804cb2b53c","962b559be3","c72760cb6f","c2914dd7ee","ce9c03e550","1dcb42bd37","20bd23b930","804cb2b53c","c126afd1d7","e8b4d29377","adb645c03b","e877d5d40a","b171be73e8","bcabeccb87","eed53ee79d","f302835b0a","b2776601e1","9dab8561cb","8dddc6092e","a50f285fe0","c0cf5fbd66","2b56f639cb","c126afd1d7","e8b4d29377","adb645c03b","e877d5d40a","b171be73e8","bcabeccb87","eed53ee79d","a3dcb0920c","ba9513d769","4c1f912684","72a6246c25","ca3a0a8962","3555d737b6","22ec0030c5","c126afd1d7","e8b4d29377","adb645c03b","e877d5d40a","b171be73e8","bcabeccb87","eed53ee79d","2cb2253827","38e71f3f7a","b537dbf13b","19172a6b9a","a7406c9185","a439b8d6e8","ec16506fdf","36bc47b838","7da7b7197b","c9ebde1579","5d94fd709e","7617357b98","02014fa63a","1d13e8fa60","869346b059","402f9e96de","2d208479d5","f3e935763f","3f357d8325","f2e8c51744","00efc4ea35","54be7f8691","ec9d56a495","f11e0de494","c6fcaca008","e7828e684a","d274d7fd8e","32c876a1cf","54be7f8691","ec9d56a495","f11e0de494","c6fcaca008","e7828e684a","d274d7fd8e","32c876a1cf","b491e9828f","1a9ee720e8","943e8d5e95","e1f45ccca8","6a37def5a3","ba133a7dfc","8c3bd5d6b0","7825654059","ebaa92ed62","1c76c063dc","15496f1d2e","d354306537","909d3d0849","3323ece4fb","f7c20ad12f","4b8b59436b","10fc744f30","e992704a5b","45f4aba9e2","385b049174","148c2946c0","2e590bb572","282e1df6c7","27b7808299","a6ec54bd4a","b4483ec12c","bab99ad276","3d225e4ddc","318b94194b","ca0b1ef852","cabf541fac","cb61c9222d","5eb20249f7","68c384cf0d","9bb9b8b57e","e1081051ff","080c95c553","003dda51cf","7527262e4a","97d832889c","130eb07b4e","c35b981581","435a64cb64","a9a69251a1","0a7d538b14","9f97894621","658f861974","d94660c87f","e2387529a9","435a64cb64","a9a69251a1","0a7d538b14","9f97894621","658f861974","d94660c87f","e2387529a9","a389afbe0a","537826cdc9","d695cb3fb0","ef7f44ea49","b866d8ff97","bddb4f63fe","4184f6dc71","b6c3b596fc","de7bc2c084","295c172d51","3ec276b91a","1eaef197a4","9ac3a3329e","fa5a75c99a","a389afbe0a","537826cdc9","d695cb3fb0","ef7f44ea49","b866d8ff97","bddb4f63fe","4184f6dc71","ed26094334","d9dfe36eae","f91a167b1e","a8a0ff141e","c9ed23ad3f","8baecec6ea","2e16934887","5028a0c9f4","6c0e6ab2e8","ce16bf3648","83c55fac6c","5523659b57","bc5223a0f2","92ff07a2ee","c3a33df88d","de22a2964d","ef1c2a5aea","b0ec47f6c4","5d6497b511","e38126c6f6","631e1b7e85","1852c02448","bed5618afa","f2bb4faaf0","cde82fcb70","df3503c3b3","db2be4b477","39907d89de","1852c02448","bed5618afa","f2bb4faaf0","cde82fcb70","df3503c3b3","db2be4b477","39907d89de","75e7b79fb5","32d933952d","7bf15e76e7","4698965596","45f07366ac","904426496e","f49b691547","75e7b79fb5","32d933952d","7bf15e76e7","4698965596","45f07366ac","904426496e","f49b691547","cb136b40ce","4b70fb917a","dfaac7bfa2","fda5daeb05","656b7dc445","b3547aa032","30dcadd12b","cb136b40ce","4b70fb917a","dfaac7bfa2","fda5daeb05","656b7dc445","b3547aa032","30dcadd12b","01d08d1e3f","b7d80a1307","05266f2d39","55dcde75ed","f62dc504a3","32891df171","e4243510c6","01d08d1e3f","b7d80a1307","05266f2d39","55dcde75ed","f62dc504a3","32891df171","e4243510c6","90c118ec4c","5596dcefc3","6064657206","0a9dcb8871","250b763ba1","bb23875900","2f1af54b2d","54bb3bd565","6b8ac43baf","646c21f4e9","e0ba7b4f4e","916269ba9a","845a9dfb7a","d6231be4b0","ab9c3d68ea","43dc09fa05","52248c4fb6","dcb13c5636","ad43e45f48","eb109e366a","43412f617d","421fbc5171","5c0f5aeacc","352fe6eb26","047a0ad755","bced8ba123","88b25a6dd5","75f9f1a9cd","f2b2e86926","c9fb29b182","a8ad1f7015","3a42e52330","a36b2a6dc4","c5fe2bc3b5","30d8083052","90c118ec4c","5596dcefc3","6064657206","0a9dcb8871","250b763ba1","bb23875900","2f1af54b2d","9a81b151eb","1579fcafa2","8f5ea14777","fa5ee9fa25","d106c4415d","07495fb03a","d633764d10","09e4090047","2a105d5d32","3214bde4d7","e0990ac648","07f15f30be","686aa2978a","e8aacae04d","09e4090047","2a105d5d32","3214bde4d7","e0990ac648","07f15f30be","686aa2978a","e8aacae04d","8ba9f65b41","eef41d6f2b","774dd8acd4","fd866e7caa","4565f8fce7","a83dd2a2ad","0a7280a23f","0dcb238c9a","bba786d66a","a0fdc502d9","160168c3e8","fa0584bac4","9143f4e62d","f449a2da30","0dcb238c9a","bba786d66a","a0fdc502d9","160168c3e8","fa0584bac4","9143f4e62d","f449a2da30","51b104f633","aa5810e7b8","be19e69a06","baaf3ce815","371b7b0f4d","f962c3e1bf","1725af4033","5886322981","230c093343","38f8e947b7","72ea7a263c","80beab3c27","9147f8d220","a3a50be78a","d0a6fdedbc","e58dd9b17d","3f734c0939","da7e2e8c52","8a03ebc17c","3fb4a75ef8","87ecb5343d","f401e7bedc","83bd22e052","71fe95cca6","4593c1dd94","ff7514756f","2713b37fdd","25fabb9450","715ffd947f","7edf34a44a","51b35fd5cd","3d60923b18","37cde65df9","0556655e90","2c30e84eee","715ffd947f","7edf34a44a","51b35fd5cd","3d60923b18","37cde65df9","0556655e90","2c30e84eee","b5b904794f","5c63cc7ab3","6e18f27bff","8bfba59b83","2b6f239847","b24a7aa604","7d04c70d00","a93280429a","85b82cc1c1","3515ee501a","ae2096a2b0","473f8ad972","cc36750c41","fe4514374a","a93280429a","85b82cc1c1","3515ee501a","ae2096a2b0","473f8ad972","cc36750c41","fe4514374a","efb8dca5d0","37c718a0d6","f7cd19c2ad","495159411a","753235841c","f99d4ed595","4b03d1ae6d","23acd7c2ec","2be424e85d","31cfa2dc54","bc5223c41f","09c5336a7e","c64488c181","1230f1f1dd","7508c8fb6d","bc93e85639","600ba6a7e0","df420bfed4","ef96bfdbee","532b4c658f","17518d9f34","02e47fd1d3","9551778957","073ccb17cf","3e0b438215","e553a8c262","d732c36ea4","56d9ea7a60","7508c8fb6d","bc93e85639","600ba6a7e0","df420bfed4","ef96bfdbee","532b4c658f","17518d9f34","c11d6821b2","60ede41c1a","44e788bb7b","e39b09e4d6","839652054c","df5b2d1e9c","d82b68c799","bc1a452bcd","fb3f2e7b5f","375cd510dc","7cd67a442a","70d956008c","b075731f90","957a4b3d77","d178c80498","cee8b1067f","b049e9d8cd","2463da9381","ce9ed7fcb2","1e2c9e1d8a","33c3657250","d178c80498","cee8b1067f","b049e9d8cd","2463da9381","ce9ed7fcb2","1e2c9e1d8a","33c3657250","5bf05a2c70","7396ab5bdf","9e5951daa0","e7b657661b","02a53f1cec","8bd5509383","2568eaf805","9f57cc3701","47364b44af","13460e964b","e8fbdd5264","96b79e1b29","68e3425d68","259c415914","9f57cc3701","47364b44af","13460e964b","e8fbdd5264","96b79e1b29","68e3425d68","259c415914","c77af65dfa","a033b01758","23f729d367","d421d28682","2eb9ae5d84","edef4e82d7","90c6aa25d7","f66942bbfe","49068d456d","96de6a9696","5d376b46ff","e84fe6ef6d","4289fa316c","955ac4c0f7","77b5df15c0","1c1493d67c","51431e697d","bb6fef0aa4","079ef045b7","d5e2104777","f65ed14e36","8782aa6378","df41b75014","159fc00a58","a4047219d2","22109cc485","7252147613","e0430f12be","8782aa6378","df41b75014","159fc00a58","a4047219d2","22109cc485","7252147613","e0430f12be","0717e945f0","9eb5f58006","2f2839e199","59aad0e89d","b7c81cf173","b3355fdaa2","f2c9355041","abd73b4762","be1814731d","763200ea19","829f9b441d","c9bf775bd5","3985074232","a635858c12","2a520ae450","8f7fcc398b","476c9aaad8","e529bfe6d1","a871b3abb1","e38d503b97","e46d3097af","6ce1e3eba2","ac1cf2f428","0b05299133","e49aa5268c","6597a8fc01","2b6672f13c","c8652b9d22","ce16bb34b8","3246fe8824","3bb76cdf10","9f26b8e129","3708842032","801d579f2b","efeb4f6d30","7644581ae7","f8a54e0c01","2ad3c95fe9","98960e62a5","c9b4356deb","db08458732","12b43e0b4a","6f6f7b4507","654cacf283","590bae2544","2eeaa19f67","f4d3e9feff","67fc0b844a","bde3cd9f66","a6615577d5","aa2de1eaf0","7c83f6700d","112a42135a","fa364d297d","9b849de5e8","09c94abb9c","bd6b9abf88","427334c6be","b04133284c","e0b4e0c051","5598983b65","99ef5b174a","c7d1c99075","0228c2edb6","1570465c3b","1dfafc12bc","40be5bb2b8","1a7316a97f","e4b1cf01e3","0d75d92b7c","b6309f84b6","b7561368aa","d831c1bdd8","0925989a60","103bf89352","ce3603f57f","e072e231c2","f59e3db539","4de0a61c68","899d666487","9e4e1d75d4","8ec060acc6","258fcba000","57a0a25195","abd73b4762","be1814731d","763200ea19","829f9b441d","c9bf775bd5","3985074232","a635858c12","d2f3c40298","000118031b","68ff86a709","24e6f0250f","24c6bc9f2a","543ab07719","758db48a24","9bdd7de9e2","376e3d595c","a937c84f06","4cf1cdd034","afdafda245","07602d7557","e72b26d72d","de27bc2ce3","a3a786fc7a","4a27ec005e","a79d3d04aa","9ef4b71dad","e82a8c2e33","b606475694","6335526ffd","244323ae79","980c8e4c3c","d128b3c8bf","58921177da","6e74c1837a","ee128100e2","c3bf7f8178","a794b78c4a","33d315f115","99d36e88ee","2a0f3ea37a","a8cbf75d1b","f2813baf36","400c1dbc32","8cff07505e","aa85c19b43","b91f36698e","59f4065c71","7db8cc84c8","fe51726155","b95d7be5e5","a885257fb3","22e84370d1","37ad4227b0","58ee4ef5f2","8fdd62bd5d","08cbc753ff","d2f3c40298","000118031b","68ff86a709","24e6f0250f","24c6bc9f2a","543ab07719","758db48a24","0124bfa633","d5d6309d81","3cd4bc9bc1","f8dca93b48","ef1c2cdb5c","ae7bb28371","481cfc9242","7a01742cf5","73ad08ab9a","97a5206635","3676df9409","f87cfe994c","c0aa246d29","dee5913608","2bc41ac0f6","293147e1d6","bd3bedf2f3","4f63ba082e","c6fe41d995","65cdfa2284","cdc0718904","c6a6629196","f2441ba3d2","08bec362a2","f0caebb900","9fe7652370","d8655fc9a2","421ab51b4b","18534f9ca3","8066d9eb63","cdaeba88b9","fabbb38976","5c189c2fff","abaa766598","1287779401","18534f9ca3","8066d9eb63","cdaeba88b9","fabbb38976","5c189c2fff","abaa766598","1287779401","6e8d003d43","b8a5d121f7","6d076d7d84","78972233c0","d54a2a7c15","177e7055e3","1cf0a2efc7","ac0ff4dfeb","f4224869c6","de45c9411d","56c1a78175","85e1b9cef6","3ea09fcbe3","a43c43e71a","b5065386a9","29c4277f4f","a309d5ca42","94a6c36cce","b521b16ccf","b93bdbfc18","ad9a66d527","117699f1e8","103dfa2c01","245ea1639a","c277db6f5b","a9cff476ad","a32c3d557c","9efd731ac7","b5065386a9","29c4277f4f","a309d5ca42","94a6c36cce","b521b16ccf","b93bdbfc18","ad9a66d527","dda02b5556","17ecaf0df6","211a3ac11a","5a25097f37","c63fc0a3c7","37d94d6020","7edca9fcbf","dda02b5556","17ecaf0df6","211a3ac11a","5a25097f37","c63fc0a3c7","37d94d6020","7edca9fcbf","b8cade891f","7ccd6ff532","0933de51d5","6e3be0f5a5","e4111ba0b1","86627f0b36","dc4396a372","b8cade891f","7ccd6ff532","0933de51d5","6e3be0f5a5","e4111ba0b1","86627f0b36","dc4396a372","3b4c902123","c6a0af8e82","bb2bca0c5e","9a1ceadeb4","2867c26887","ff8f466adb","6d9767a655","fbe71082ba","0a1bee837b","371a167c38","1606df36a2","6a59b6b6db","e5072ca827","081d01e41b","fbe71082ba","0a1bee837b","371a167c38","1606df36a2","6a59b6b6db","e5072ca827","081d01e41b","f2cb65cd66","fa14fa6e01","eda0e00ba5","8387354532","44e080d85a","a79cb4f0da","1cdb864fe8","44189a29c1","7925c83507","cc6372f835","52617a7e43","016fc0c8ba","6ed408b781","5bd97fc73b","44189a29c1","7925c83507","cc6372f835","52617a7e43","016fc0c8ba","6ed408b781","5bd97fc73b","ab4079935c","a730ddd4d8","5c12ccadfd","1c22b5ffda","c769d2cd65","68834e4734","54590600e2","a710192f93","47ab95e00b","8dfa8d091f","f7e4a6f1a8","cd98453baf","eebec38e6d","9957e13d5b","7c1e2da31d","ec8e0fa435","4b4be67b0a","f0ebd0f961","fb34c66d7d","4d40d587f3","34ecc3a61d","c995e66ba8","5c97af9d02","5b69c9d109","6ed373b361","0f48b3d8e0","e601c9ac1f","9daa57bd4e","c4d4f943ae","c1de37138c","4650859e21","c507830d3b","108994b5d3","a098d1a1d1","533c3ef18b","adcc550dae","b82adce0cf","90c992913e","95fe61667c","d20c3215be","4d26ade76b","7d7203ccca","adcc550dae","b82adce0cf","90c992913e","95fe61667c","d20c3215be","4d26ade76b","7d7203ccca","356e36e35e","c7fbe76568","5445aac8d3","2ed26ca953","52a5e36047","c4b1206fb8","9cd3b798de","356e36e35e","c7fbe76568","5445aac8d3","2ed26ca953","52a5e36047","c4b1206fb8","9cd3b798de","30da297cd7","18947cc77a","bf839f4336","c467bf45ae","49aaf71be2","21d82fe1db","424385f294","b824373f48","b2c1f232cb","bb32c62231","fe6a036660","e80a4db9f0","aecc412e86","07b637a574","e2b1b4793b","471400b519","2ca2ae6e58","aa82e5dd56","575988887f","58792b359c","3ce1b557b5","674d9fee42","504e8c87ea","4303e05475","b6d455f067","5d055a9fe9","b6a27cd155","3070db39b5","b83e33ccbb","b22e973d81","86b2d3456a","7faa753421","171582efd5","cf5f8a826d","eec73f46db","cc4729feb9","691392fcd3","0397a27395","a594967b27","a288fe7ac9","dd8814e525","a9766a8b30","63b8eafb10","b383e6efde","7ae4cfd304","7328edea3c","74cfc808c0","b95eded594","b197e688ad","0d1ea80cce","f6460e9d86","be332ec0e5","c68071dbc6","5873a176a6","ff0963232c","cb883c1232","0d1ea80cce","f6460e9d86","be332ec0e5","c68071dbc6","5873a176a6","ff0963232c","cb883c1232","7b45b7947f","0e8c91ac53","fa92010ee3","0398606054","2e3ad5ec50","133ab6ccaf","62c868b26e","7b45b7947f","0e8c91ac53","fa92010ee3","0398606054","2e3ad5ec50","133ab6ccaf","62c868b26e","94cc60aff0","0939f9e9a6","8e3bd4a087","6199265f61","c3ace16b74","6e89fa4327","c52fb44ca1","94cc60aff0","0939f9e9a6","8e3bd4a087","6199265f61","c3ace16b74","6e89fa4327","c52fb44ca1","7d49b17755","e541ada241","78a17432b3","6965cffadd","ccb55bd230","d94eac93c3","0cf8fd1905","53c136c02e","a322133710","c236a89971","d5ea2cb16c","fae9375990","24a8582622","1a626f97c9","aebd82d7e8","03d7257c6f","d3332b87d1","6734157492","1014c5a56c","8615fba8df","38454c87ba","aebd82d7e8","03d7257c6f","d3332b87d1","6734157492","1014c5a56c","8615fba8df","38454c87ba","94cc60aff0","0939f9e9a6","8e3bd4a087","6199265f61","c3ace16b74","6e89fa4327","c52fb44ca1","dac829f230","75c736b31a","a959d99672","edebe552d6","53555ef359","3a58b85cdf","e8d224d149","813e1b8316","7a50d663fd","f6e6681eb0","f9e08da81d","49e003fcaf","573926c5b6","07dfe523a0","0269a57246","e787a9d17b","7a234556fb","20289e6ca3","55847646d1","82ea176c45","48a04b8082","afc1c5325b","288656ed69","3739961088","c9e3815aca","27c7205517","3dc11d311a","b16313f994","afc1c5325b","288656ed69","3739961088","c9e3815aca","27c7205517","3dc11d311a","b16313f994"]}
```
