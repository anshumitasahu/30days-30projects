const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const sol = document.getElementById("solana");
const doge = document.getElementById("dogecoin");

const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-kfFRad29a7tw7cHHE55mE13u' } };

fetch('https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Csolana%2Cdogecoin&names=Bitcoin%2CEthereum%2CSolana%2CDogecoin&symbols=btc%2Ceth%2Csol%2Cdoge', options)
  .then(res => res.json())
  .then(price =>
    {
    btc.innerHTML = price.bitcoin.usd
    eth.innerHTML = price.ethereum.usd
    sol.innerHTML = price.solana.usd
    doge.innerHTML = price.dogecoin.usd
  }
)
  .catch(err => console.error(err));