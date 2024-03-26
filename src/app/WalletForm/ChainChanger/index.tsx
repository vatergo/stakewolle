import { useCallback } from "react";
import { useSDK } from "@metamask/sdk-react";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { CHAINS } from "../constants";
import { ChainId, ChainParams } from "../types";

const ChainChanger: React.FC = () => {
  const { provider, chainId } = useSDK();

  const onChangeChainId = useCallback(
    (_: unknown, chainId: ChainId) => {
      let method = "wallet_addEthereumChain";
      let params: ChainParams[] | [{ chainId: ChainId }] = [CHAINS[chainId]];

      if (chainId === "0x1") {
        method = "wallet_switchEthereumChain";
        params = [{ chainId }];
      }

      provider
        ?.request({
          method,
          params,
        })
        .catch((err) => {
          console.warn(err);
        });
    },
    [provider]
  );

  return (
    <Stack direction="row">
      <ToggleButtonGroup
        size="small"
        value={chainId}
        onChange={onChangeChainId}
        exclusive
      >
        <ToggleButton value="0x1">ETH</ToggleButton>
        <ToggleButton value="0x38">BNB</ToggleButton>
        <ToggleButton value="0x61">tBNB</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default ChainChanger;
