import { useSDK } from "@metamask/sdk-react";
import Web3 from "web3";
import { Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { CHAINS } from "../constants";
import { isChainId } from "../utils";

const Balance: React.FC = () => {
  const { balance, chainId } = useSDK();

  const currency = useMemo(
    () => isChainId(chainId) && CHAINS[chainId].nativeCurrency.symbol,
    [chainId]
  );

  const value = useMemo(
    () => balance && Web3.utils.fromWei(balance, "ether"),
    [balance]
  );

  return (
    <Stack direction="row">
      {balance && (
        <Typography variant="subtitle1">{`Balance: ${value} ${currency}`}</Typography>
      )}
    </Stack>
  );
};

export default Balance;
