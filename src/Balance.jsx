import { ethers } from "ethers";
import { useEffect, useState } from "react";

function Balance({ provider }) {
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    async function getBalance(){
      const bal = await provider.getBalance("0xee2d4c1ef974a67e16cad4b19f209697694b4010");
      setBalance(ethers.utils.formatEther(bal));
    }
    getBalance();
  })
  

  return (
    <div className="container wallet">
      <h1>Your Balance</h1>

      <div className="balance"> {balance} ETH</div>
    </div>
  );
}

export default Balance;
