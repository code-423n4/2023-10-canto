// SPDX-License-Identifier: GPL-3

pragma solidity 0.8.19;

import '../libraries/SafeCast.sol';
import '../mixins/StorageLayout.sol';
import '../mixins/LiquidityMining.sol';

/* @title Liquidity mining callpath sidecar.
 * @notice Defines a proxy sidecar contract that's used to move code outside the 
 *         main contract to avoid Ethereum's contract code size limit. Contains
 *         components related to CANTO liquidity mining.
 * 
 * @dev    This exists as a standalone contract but will only ever contain proxy code,
 *         not state. As such it should never be called directly or externally, and should
 *         only be invoked with DELEGATECALL so that it operates on the contract state
 *         within the primary CrocSwap contract.
 * @dev Since this contract is a proxy sidecar, entrypoints need to be marked
 *      payable even though it doesn't directly handle msg.value. Otherwise it will
 *      fail on any. Because of this, this contract should never be used in any other
 *      context besides a proxy sidecar to CrocSwapDex. */
contract LiquidityMiningPath is LiquidityMining {
    function claimConcentratedRewards (bytes32 poolIdx, int24 lowerTick, int24 upperTick, uint32[] memory weeksToClaim) public payable {
        claimConcentratedRewards(payable(msg.sender), poolIdx, lowerTick, upperTick, weeksToClaim);
    }

    function claimAmbientRewards (bytes32 poolIdx, uint32[] memory weeksToClaim) public payable {
        claimAmbientRewards(payable(msg.sender), poolIdx, weeksToClaim);
    }

    function setConcRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
        require(msg.sender == governance_, "Only callable by governance");
        require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
        while (weekFrom <= weekTo) {
            concRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
            weekFrom += uint32(WEEK);
        }
    }

    function setAmbRewards(bytes32 poolIdx, uint32 weekFrom, uint32 weekTo, uint64 weeklyReward) public payable {
        require(msg.sender == governance_, "Only callable by governance");
        require(weekFrom % WEEK == 0 && weekTo % WEEK == 0, "Invalid weeks");
        while (weekFrom <= weekTo) {
            ambRewardPerWeek_[poolIdx][weekFrom] = weeklyReward;
            weekFrom += uint32(WEEK);
        }
    }


    /* @notice Used at upgrade time to verify that the contract is a valid Croc sidecar proxy and used
     *         in the correct slot. */
    function acceptCrocProxyRole (address, uint16 slot) public pure returns (bool) {
        return slot == CrocSlots.LIQUIDITY_MINING_PROXY_IDX;
    }
}

