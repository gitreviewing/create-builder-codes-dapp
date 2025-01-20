"use client";

import { useAccount } from "wagmi";
import ConnectWallet from "@/components/ConnectWallet";
import EnableTrading from "@/components/EnableTrading";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="flex min-h-svh container mx-auto items-center justify-center p-6 md:p-10">
      {!isConnected ? <ConnectWallet /> : <EnableTrading />}
    </div>
  );
}
