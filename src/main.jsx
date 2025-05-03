// Import polyfills first
import "./polyfills";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { config } from "./utils/web3Config";
import App from "./App.jsx";

// Import projectId directly
import {
  projectId as walletConnectProjectId,
  chains as configuredChains,
} from "./utils/web3Config";

// Create query client
const queryClient = new QueryClient();

// Create modal with all required options
createWeb3Modal({
  wagmiConfig: config,
  projectId: walletConnectProjectId,
  chains: configuredChains,
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // MetaMask
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust Wallet
    "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18", // Rainbow
    "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", // Coinbase Wallet
  ],
  // Enable wallet connection on page load
  enableAnalytics: true,
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#4F46E5",
  },
  tokens: {
    [mainnet.id]: {
      address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      name: "Ethereum",
      symbol: "ETH",
    },
    [sepolia.id]: {
      address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      name: "SepoliaETH",
      symbol: "ETH",
    },
  },
  includeWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // MetaMask
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust Wallet
    "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18", // Rainbow
    "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", // Coinbase Wallet
  ],
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
