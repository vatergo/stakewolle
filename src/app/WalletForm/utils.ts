import { ChainId } from "./types";

export const isChainId = (chainId: string | undefined): chainId is ChainId => {
  if (chainId === "0x1" || chainId === "0x38" || chainId === "0x61") {
    return true;
  }

  return false;
};
