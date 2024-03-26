import { ChainId, ChainParams } from "./types";

export const CHAINS: Record<ChainId, ChainParams> = {
  "0x1": {
    chainId: "0x1",
    chainName: "Ethereum Mainnet",
    blockExplorerUrls: ["https://etherscan.io"],
    nativeCurrency: { symbol: "ETH", decimals: 18 },
    rpcUrls: ["https://mainnet.infura.io/v3/"],
  },
  "0x38": {
    chainId: "0x38",
    chainName: "BNB Chain",
    blockExplorerUrls: ["https://bscscan.com/"],
    nativeCurrency: { symbol: "BNB", decimals: 18 },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
  },
  "0x61": {
    chainId: "0x61",
    chainName: "BNB Chain Testnet",
    blockExplorerUrls: ["https://testnet.bscscan.com"],
    nativeCurrency: { symbol: "tBNB", decimals: 18 },
    rpcUrls: ["https://bsc-testnet.publicnode.com"],
  },
};
