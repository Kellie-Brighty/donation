import { defaultWagmiConfig } from "@web3modal/wagmi/react";
import { mainnet, sepolia } from "wagmi/chains";
import { http } from "viem";

// IMPORTANT: You must get a valid project ID from WalletConnect Cloud
// 1. Go to https://cloud.walletconnect.com/ and sign in/create an account
// 2. Create a new project
// 3. Copy the project ID (must be exactly 32 characters)
// 4. Set up allowed domains in the WalletConnect dashboard for security
export const projectId = "c74f114edf67a7dbdd99f0f49a95a85e12"; // Replace with your valid 32-character project ID

// Define metadata - what users see in the wallet when connecting
const metadata = {
  name: "Dog Charity",
  description: "Help Nala Survive Cancer",
  url: "https://dogcharity.com",
  icons: [
    "https://img.freepik.com/free-vector/charity-donation-concept-hands-volunteers-holding-giving-heart_74855-10499.jpg",
  ],
};

// Define chains - which networks we support
export const chains = [mainnet, sepolia];

// Create wagmi config with Web3Modal connectors and providers
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  enableWalletConnect: true, // enable WalletConnect
  enableInjected: true, // enable Injected/Browser wallets
  enableEIP6963: true, // enable EIP-6963 provider discovery
  enableCoinbase: true, // enable Coinbase wallet
});

// Web3Modal is now created in main.jsx
