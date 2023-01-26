
import './App.css';
import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { loadContract } from './utils/load-contract';
import Web3 from 'web3';


function App() {

  const [web3Api, setWeb3api] = useState({
    provider:null,
    web3:null,
    contract:null
  })

  const [balance, setBalance] = useState(null)
  const [account, setAcount] = useState(null)

  useEffect(()=>{
    const loadProvider = async()=>{
      const provider = await detectEthereumProvider()
      const contract = await loadContract("Simplebank", provider)

      if(provider){
        setWeb3api({
          provider:provider,
          web3: new Web3(provider),
          contract:contract
        })
      } else{
        console.log("Please install")
      }
    }
    loadProvider()
  },[])


  useEffect (
    ()=>{

    },[web3Api])
  return (
    <div className="App">
      {/* <button
      onClick={async () =>{
        const acconunts = await window.ethereum.request({method:"eth_requestAccounts"})
        console.log(acconunts)
      }}>
        connect to metamask
      </button> */}
    </div>
  );
}

export default App;
