// SPDX-License-Identifier: GPL-3

pragma solidity 0.8.19;

import './StorageLayout.sol';
import '../libraries/CurveCache.sol';
import '../libraries/Chaining.sol';
import '../libraries/Directives.sol';

/* @title Proxy Caller
 * @notice Because of the Ethereum contract limit, much of the CrocSwap code is pushed
 *         into sidecar proxy contracts, which is involed with DELEGATECALLs. The code
 *         moved to these sidecars is less gas critical than the code in the core contract. 
 *         This provides a facility for invoking proxy conjtracts in a consistent way by
*          setting up the DELEGATECALLs in a standard and safe manner. */
contract ProxyCaller is StorageLayout {
    using CurveCache for CurveCache.Cache;
    using CurveMath for CurveMath.CurveState;
    using Chaining for Chaining.PairFlow;

    /* @notice Passes through the protocolCmd call to a sidecar proxy. */
    function callProtocolCmd (uint16 proxyIdx, bytes calldata input) internal
        returns (bytes memory) {
        assertProxy(proxyIdx);
        (bool success, bytes memory output) = proxyPaths_[proxyIdx].delegatecall(
            abi.encodeWithSignature("protocolCmd(bytes)", input));
        return verifyCallResult(success, output);
    }

    /* @notice Passes through the userCmd call to a sidecar proxy. */
    function callUserCmd (uint16 proxyIdx, bytes calldata input)
        internal returns (bytes memory) {
        assertProxy(proxyIdx);
        (bool success, bytes memory output) = proxyPaths_[proxyIdx].delegatecall(
            abi.encodeWithSignature("userCmd(bytes)", input));
        return verifyCallResult(success, output);
    }

    function callUserCmdMem (uint16 proxyIdx, bytes memory input)
        internal returns (bytes memory) {
        assertProxy(proxyIdx);
        (bool success, bytes memory output) = proxyPaths_[proxyIdx].delegatecall(
            abi.encodeWithSignature("userCmd(bytes)", input));
        return verifyCallResult(success, output);
    }

    function assertProxy (uint16 proxyIdx) private view {
        require(proxyPaths_[proxyIdx] != address(0));
        require(!inSafeMode_ || proxyIdx == CrocSlots.SAFE_MODE_PROXY_PATH || proxyIdx == CrocSlots.BOOT_PROXY_IDX);
    }

    function verifyCallResult (bool success, bytes memory returndata) internal pure returns (bytes memory) {
        // On success pass through the return data
        if (success) {
            return returndata;
        } else if (returndata.length > 0) {
            // If DELEGATECALL failed bubble up the error message
            assembly {
                 let returndata_size := mload(returndata)
                revert(add(32, returndata), returndata_size)
            }
        } else {
            // If failed with no  error, then bubble up the empty revert
            revert();
        }
    }

    /* @notice Invokes mintAmbient() call in MicroPaths sidecar and relays the result. */
    function callMintAmbient (CurveCache.Cache memory curve, uint128 liq,
                              bytes32 poolHash) internal
        returns (int128 basePaid, int128 quotePaid) {
        (bool success, bytes memory output) =
            proxyPaths_[CrocSlots.MICRO_PROXY_IDX].delegatecall
            (abi.encodeWithSignature
             ("mintAmbient(uint128,uint128,uint128,uint64,uint64,uint128,bytes32)",
              curve.curve_.priceRoot_, 
              curve.curve_.ambientSeeds_,
              curve.curve_.concLiq_,
              curve.curve_.seedDeflator_,
              curve.curve_.concGrowth_,
              liq, poolHash));
        require(success);
        
        (basePaid, quotePaid,
         curve.curve_.ambientSeeds_) = 
            abi.decode(output, (int128, int128, uint128));
    }

    /* @notice Invokes burnAmbient() call in MicroPaths sidecar and relays the result. */
    function callBurnAmbient (CurveCache.Cache memory curve, uint128 liq,
                              bytes32 poolHash) internal
        returns (int128 basePaid, int128 quotePaid) {

        (bool success, bytes memory output) =
            proxyPaths_[CrocSlots.MICRO_PROXY_IDX].delegatecall
            (abi.encodeWithSignature
             ("burnAmbient(uint128,uint128,uint128,uint64,uint64,uint128,bytes32)",
              curve.curve_.priceRoot_, 
              curve.curve_.ambientSeeds_,
              curve.curve_.concLiq_,
              curve.curve_.seedDeflator_,
              curve.curve_.concGrowth_,
              liq, poolHash));
        require(success);
        
        (basePaid, quotePaid,
         curve.curve_.ambientSeeds_) = 
            abi.decode(output, (int128, int128, uint128));
    }

    /* @notice Invokes mintRange() call in MicroPaths sidecar and relays the result. */
    function callMintRange (CurveCache.Cache memory curve,
                            int24 bidTick, int24 askTick, uint128 liq,
                            bytes32 poolHash) internal
        returns (int128 basePaid, int128 quotePaid) {

        (bool success, bytes memory output) =
            proxyPaths_[CrocSlots.MICRO_PROXY_IDX].delegatecall
            (abi.encodeWithSignature
             ("mintRange(uint128,int24,uint128,uint128,uint64,uint64,int24,int24,uint128,bytes32)",
              curve.curve_.priceRoot_, curve.pullPriceTick(),
              curve.curve_.ambientSeeds_,
              curve.curve_.concLiq_,
              curve.curve_.seedDeflator_,
              curve.curve_.concGrowth_,
              bidTick, askTick, liq, poolHash));
        require(success);

        (basePaid, quotePaid,
         curve.curve_.ambientSeeds_,
         curve.curve_.concLiq_) = 
            abi.decode(output, (int128, int128, uint128, uint128));
    }
    
    /* @notice Invokes burnRange() call in MicroPaths sidecar and relays the result. */
    function callBurnRange (CurveCache.Cache memory curve,
                            int24 bidTick, int24 askTick, uint128 liq,
                            bytes32 poolHash) internal
        returns (int128 basePaid, int128 quotePaid) {
        
        (bool success, bytes memory output) =
            proxyPaths_[CrocSlots.MICRO_PROXY_IDX].delegatecall
            (abi.encodeWithSignature
             ("burnRange(uint128,int24,uint128,uint128,uint64,uint64,int24,int24,uint128,bytes32)",
              curve.curve_.priceRoot_, curve.pullPriceTick(),
              curve.curve_.ambientSeeds_, curve.curve_.concLiq_,
              curve.curve_.seedDeflator_, curve.curve_.concGrowth_,
              bidTick, askTick, liq, poolHash));
        require(success);
        
        (basePaid, quotePaid,
         curve.curve_.ambientSeeds_,
         curve.curve_.concLiq_) = 
            abi.decode(output, (int128, int128, uint128, uint128));
    }

    /* @notice Invokes sweepSwap() call in MicroPaths sidecar and relays the result. */
    function callSwap (Chaining.PairFlow memory accum,
                       CurveCache.Cache memory curve,
                       Directives.SwapDirective memory swap,
                       PoolSpecs.PoolCursor memory pool) internal {
        (bool success, bytes memory output) =
            proxyPaths_[CrocSlots.MICRO_PROXY_IDX].delegatecall
            (abi.encodeWithSignature
             ("sweepSwap((uint128,uint128,uint128,uint64,uint64),int24,(bool,bool,uint8,uint128,uint128),((uint8,uint16,uint8,uint16,uint8,uint8,uint8),bytes32,address))",
              curve.curve_, curve.pullPriceTick(), swap, pool));
        require(success);

        Chaining.PairFlow memory swapFlow;
        (swapFlow, curve.curve_.priceRoot_,
         curve.curve_.ambientSeeds_,
         curve.curve_.concLiq_,
         curve.curve_.seedDeflator_,
         curve.curve_.concGrowth_) = 
            abi.decode(output, (Chaining.PairFlow, uint128, uint128, uint128,
                                uint64, uint64));

        // swap() is the only operation that can change curve price, so have to mark
        // the tick cache as dirty.
        curve.dirtyPrice();
        accum.foldFlow(swapFlow);
    }

    function callCrossFlag (bytes32 poolHash, int24 tick,
                            bool isBuy, uint64 feeGlobal)
        internal returns (int128 concLiqDelta) {
        require(proxyPaths_[CrocSlots.FLAG_CROSS_PROXY_IDX] != address(0));
        
        (bool success, bytes memory cmd) =
            proxyPaths_[CrocSlots.FLAG_CROSS_PROXY_IDX].delegatecall
            (abi.encodeWithSignature
             ("crossCurveFlag(bytes32,int24,bool,uint64)",
              poolHash, tick, isBuy, feeGlobal));
        require(success);

        concLiqDelta = abi.decode(cmd, (int128));
    }
}
