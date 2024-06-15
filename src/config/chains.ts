import { Chain } from "wagmi";

export const HarmanyTestnet: Chain = {
  id: 1666700000,
  name: "Harmony Testnet",
  network: "harmony",
  nativeCurrency: {
    name: "ONE",
    symbol: "ONE",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://api.s0.b.hmny.io"],
    },
    default: {
      http: ["https://api.s0.b.hmny.io"],
    },
  },
  blockExplorers: {
    etherscan: { name: "Harmony", url: "https://explorer.pops.one" },
    default: { name: "Harmony", url: "https://explorer.pops.one" },
  },

  testnet: true,
};

export const mantaTest: Chain = {
  id: 3441005,
  name: "manta-testnet",
  network: "manta",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://manta-testnet.calderachain.xyz/http"],
    },
    default: {
      http: ["https://manta-testnet.calderachain.xyz/http"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "manta-testnet",
      url: "https://manta-testnet.calderaexplorer.xyz",
    },
    default: {
      name: "manta-testnet",
      url: "https://manta-testnet.calderaexplorer.xyz",
    },
  },
  testnet: true,
};

export const bnbTest: Chain = {
  id: 97,
  name: "BNB Smart Chain Testnet",
  network: "bnb-test",
  nativeCurrency: {
    name: "TBNB",
    symbol: "TBNB",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://public.stackup.sh/api/v1/node/bsc-testnet"],
    },
    default: {
      http: ["https://public.stackup.sh/api/v1/node/bsc-testnet"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "bnb-testnet",
      url: "https://testnet.bscscan.com/",
    },
    default: {
      name: "bnb-testnet",
      url: "https://testnet.bscscan.com/",
    },
  },
  testnet: true,
};

export const supChains = {
  HarmanyTestnet,
  mantaTest,
  bnbTest,
};
