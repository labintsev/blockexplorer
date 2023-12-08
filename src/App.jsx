import { ethers } from "ethers";
import { useState } from 'react';

import './App.css';
import Wallet from "./Wallet";
import Transfer from "./Transfer";
import Balance from "./Balance";
import BlockExplorer from "./BlockExplorer";


// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;
const network = "goerli";

// In this week we use Alchemy 
const provider = new ethers.providers.AlchemyProvider(network, apiKey);

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");

  return (
    <div className="app">
      <Balance
        provider={provider}
      />
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        provider={provider}
      />
      <Transfer 
        setBalance={setBalance} 
        address={address} 
        provider={provider}
      />
      <BlockExplorer
        provider={provider}
      />

    </div>
  );
}

export default App;
