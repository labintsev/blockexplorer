import { ethers } from "ethers";

function Wallet({ address, setAddress, balance, setBalance, provider }) {
  
  async function onChange(evt) {
    const address = evt.target.value;
    console.log("address: ", address);
    setAddress(address);
    try {
      const balance = await provider.getBalance(address);
      console.log("balance: ", balance);
      const newBalance = ethers.utils.formatEther(balance);
      setBalance(newBalance);
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className="container wallet">
      <h1>Public Wallet Reader</h1>

      <label>
        Address: 
        <input placeholder="Type any address" value={address} onChange={onChange}></input>
      </label>

      <div className="balance">Balance: {balance} ETH</div>
    </div>
  );
}

export default Wallet;
