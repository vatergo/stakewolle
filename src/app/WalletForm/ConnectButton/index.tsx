import { useCallback } from "react";
import { useSDK } from "@metamask/sdk-react";
import { Button } from "@mui/material";

const ConnectButton: React.FC = () => {
  const { sdk } = useSDK();

  const onConnect = useCallback(
    () =>
      sdk?.connect().catch((err) => console.warn("failed to connect..", err)),
    [sdk]
  );

  return (
    <Button size="medium" variant="outlined" onClick={onConnect}>
      Connect
    </Button>
  );
};

export default ConnectButton;
