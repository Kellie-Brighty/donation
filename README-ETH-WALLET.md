# Ethereum Wallet Integration Guide

This guide explains how to set up and use the Ethereum wallet integration in the Dog Charity project.

## Setup

1. **Get a WalletConnect Project ID**

   - Visit [WalletConnect Cloud](https://cloud.walletconnect.com/)
   - Create an account and create a new project
   - Copy your Project ID (must be exactly 32 characters)
   - **IMPORTANT**: In the project settings, add your website domain to the "Allowed Domains" list
   - For local development, you can add `localhost` to the allowed domains
   - Without proper domain configuration, mobile wallet connections will fail

2. **Update Configuration**

   - Open `src/utils/web3Config.js`
   - Replace the `projectId` value with your actual WalletConnect Project ID

3. **Update Donation Address**
   - Open `src/components/EthDonation.jsx`
   - Replace the `donationAddress` value with your actual Ethereum wallet address where you want to receive donations

## Features

The Ethereum wallet integration provides:

1. **Connect Wallet Button** - Allows users to connect their Ethereum wallets (MetaMask, WalletConnect, Coinbase Wallet, etc.)
2. **Wallet Information** - Shows connected address and ETH balance
3. **Donation Form** - Lets users enter an amount and send ETH directly to your donation address
4. **Transaction Tracking** - Shows transaction hash and link to Etherscan after successful donation
5. **Direct Address** - Also displays your ETH address for users who prefer to send funds directly without connecting

## Supported Wallets

The integration supports a wide range of wallets across desktop and mobile:

- MetaMask
- WalletConnect
- Coinbase Wallet
- Rainbow
- Trust Wallet
- And many more...

## Mobile Support

This integration is fully mobile-compatible. Users can:

1. Connect through mobile wallet apps that support WalletConnect
2. Use in-app browsers of wallet apps like MetaMask
3. Scan QR codes to connect their mobile wallets

## Customization

You can customize the appearance of the Ethereum donation component by modifying the styles in `src/components/EthDonation.jsx`.

## Testing

For testing, you can:

- Use the Sepolia test network (already configured)
- Send test transactions with minimal ETH values
- Use MetaMask's built-in test networks
