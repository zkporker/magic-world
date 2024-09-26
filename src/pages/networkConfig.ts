import {getFullnodeUrl} from '@mysten/sui/client';
import { createNetworkConfig } from '@mysten/dapp-kit';

import {DEVNET_COUNTER_PACKAGE_ID, TESTNET_COUNTER_PACKAGE_ID, MAINNET_COUNTER_PACKAGE_ID} from './constant';

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables:{
        packageId: DEVNET_COUNTER_PACKAGE_ID
      }
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables:{
        packageId: TESTNET_COUNTER_PACKAGE_ID
      }
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables:{
        packageId: MAINNET_COUNTER_PACKAGE_ID
      }
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };