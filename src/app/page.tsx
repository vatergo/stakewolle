"use client";

import styles from "./page.module.css";
import { MetaMaskProvider } from "@metamask/sdk-react";

import WalletForm from "@/app/WalletForm";

export default function Home() {
  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
        },
      }}
    >
      <main className={styles.main}>
        <WalletForm />
      </main>
    </MetaMaskProvider>
  );
}
