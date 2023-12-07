import { ethers } from "ethers";
import { useEffect, useState } from 'react';

import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;
const network = "homestead";

// In this week we use Alchemy 
const provider = new ethers.providers.AlchemyProvider(network, apiKey);


function App() {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
      async function getBlockNumber() {
        const blockNum = await provider.getBlockNumber();
        setBlockNumber(blockNum);
      }
      getBlockNumber();
    }
  );

  return <div className="App">Block Number: {blockNumber}</div>;
}

export default App;
