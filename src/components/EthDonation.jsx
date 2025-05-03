import React, { useState } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import {
  useAccount,
  useDisconnect,
  useBalance,
  useSendTransaction,
} from "wagmi";
import { parseEther } from "viem";
import { IoCopy } from "react-icons/io5";
import copy from "copy-to-clipboard";

const EthDonation = () => {
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  // The Ethereum address to receive donations
  const donationAddress = "0xD566f4399d59BDFDF9D0891C6Cc60f7CF7B072C1"; // Replace with your actual ETH donation address

  // Web3Modal hooks
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({
    address: isConnected ? address : undefined,
  });

  // Transaction hook
  const { sendTransactionAsync } = useSendTransaction();

  // Handle donation
  const handleDonate = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      setLoading(true);
      const hash = await sendTransactionAsync({
        to: donationAddress,
        value: parseEther(amount),
      });

      setTxHash(hash);
      setAmount("");
      setLoading(false);
    } catch (error) {
      console.error("Transaction failed:", error);
      setLoading(false);
    }
  };

  // Copy address to clipboard
  const copyAddress = () => {
    copy(donationAddress);
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };

  return (
    <div className="w-full rounded-lg bg-white p-5 shadow-md">
      <h3 className="font-aleo text-2xl font-semibold mb-4">
        Donate with Ethereum
      </h3>

      {isConnected ? (
        <div className="space-y-4">
          <div className="bg-gray-100 p-3 rounded-md">
            <p className="text-sm text-gray-700">Connected Address</p>
            <p className="text-sm font-medium truncate">{address}</p>
          </div>

          {balance && (
            <div className="bg-gray-100 p-3 rounded-md">
              <p className="text-sm text-gray-700">Balance</p>
              <p className="text-sm font-medium">
                {balance.formatted} {balance.symbol}
              </p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (ETH)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.05"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              step="0.001"
            />
          </div>

          <button
            onClick={handleDonate}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-medium"
          >
            {loading ? "Processing..." : "Donate ETH"}
          </button>

          <button
            onClick={() => disconnect()}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition font-medium"
          >
            Disconnect Wallet
          </button>

          {txHash && (
            <div className="bg-green-50 p-3 rounded-md border border-green-200">
              <p className="text-sm text-green-700">Transaction sent!</p>
              <a
                href={`https://etherscan.io/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline truncate block"
              >
                View on Etherscan
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-700">
            Connect your Ethereum wallet to make a donation directly to Nala's
            treatment fund.
          </p>

          <button
            onClick={() => open({ view: "Connect" })}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-medium"
          >
            Connect Wallet
          </button>

          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">
              Or send ETH directly to:
            </p>
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
              <p className="text-xs overflow-hidden text-ellipsis">
                {donationAddress}
              </p>
              <IoCopy
                onClick={copyAddress}
                className="cursor-pointer flex-shrink-0"
              />
            </div>
            {alert && (
              <p className="text-xs text-green-600 mt-1">
                Address copied to clipboard!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EthDonation;
