import { useSDK } from "@metamask/sdk-react";
import { Chip, Paper, Stack, Typography } from "@mui/material";
import { CopyAll } from "@mui/icons-material";

import ConnectButton from "./ConnectButton";
import DisconnectButton from "./DisconnectButton";
import Balance from "./Balance";
import ChainChanger from "./ChainChanger";
import Sender from "./Sender";

import styles from "./index.module.css";

const WalletForm: React.FC = () => {
  const { connected, account } = useSDK();

  return (
    <>
      {!connected ? (
        <ConnectButton />
      ) : (
        <Paper
          elevation={2}
          sx={{ borderRadius: 4, p: 2, width: "100%", maxWidth: 1000 }}
        >
          <Stack direction="column" gap={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className={styles.header}
            >
              <Stack direction="row" gap={2} className={styles.leftHeader}>
                <Typography variant="h6">Wallet</Typography>
                <Chip
                  onClick={() =>
                    account && navigator.clipboard.writeText(account)
                  }
                  variant="outlined"
                  label={account}
                  icon={<CopyAll />}
                  clickable
                />
              </Stack>
              <DisconnectButton />
            </Stack>
            <ChainChanger />
            <Balance />
            <Sender />
          </Stack>
        </Paper>
      )}
    </>
  );
};

export default WalletForm;
