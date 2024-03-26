import { useSDK } from "@metamask/sdk-react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useCallback } from "react";

const DisconnectButton: React.FC = () => {
  const { sdk } = useSDK();

  const onDisconnect = useCallback(() => sdk?.disconnect(), [sdk]);

  return (
    <IconButton
      size="medium"
      onClick={onDisconnect}
      title="Disconnect"
      sx={{ borderRadius: 2 }}
    >
      <Close />
    </IconButton>
  );
};

export default DisconnectButton;
