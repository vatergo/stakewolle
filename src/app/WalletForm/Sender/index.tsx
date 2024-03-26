import { useSDK } from "@metamask/sdk-react";
import { Button, Stack, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import Web3 from "web3";

import styles from "./index.module.css";

const Sender: React.FC = () => {
  const { provider, account } = useSDK();

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const onSend = useCallback(
    () =>
      provider
        ?.request({
          method: "eth_sendTransaction",
          params: [
            {
              to: address,
              from: account,
              value: Web3.utils.numberToHex(Web3.utils.toWei(amount, "ether")),
            },
          ],
        })
        .catch((err) => console.warn(err)),
    [account, address, amount, provider]
  );

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      className={styles.wrapper}
    >
      <Stack direction="row" gap={2} className={styles.leftSide}>
        <TextField
          size="small"
          variant="outlined"
          label="Address"
          fullWidth
          value={address}
          onChange={({ target }) => setAddress(target.value)}
        />
        <TextField
          type="number"
          size="small"
          variant="outlined"
          label="Amount"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
        />
      </Stack>
      <Button
        variant="contained"
        disabled={!(address && amount)}
        onClick={onSend}
      >
        Send
      </Button>
    </Stack>
  );
};

export default Sender;
