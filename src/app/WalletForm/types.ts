export type ChainId = "0x1" | "0x38" | "0x61";

export type ChainParams = {
  chainId: ChainId;
  chainName: string;
  blockExplorerUrls: string[];
  nativeCurrency: { symbol: string; decimals: number };
  rpcUrls: string[];
};
