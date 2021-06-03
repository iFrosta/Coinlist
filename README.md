# Coinlist Automation
Made by @ifrosta [GitHub](https://github.com/iFrosta) [Website](https://ifrosta.com)

## Instruction:
1. Open browser console
3. Paste the code below
4. Wait for the code to execute
5. All done 😉

## Centrifuge quiz
```javascript
let run=async()=>{let a=document.body.querySelectorAll(".quiz")[0].querySelectorAll(".c-label--inline"),b=a=>new Promise(b=>setTimeout(b,a)),c=["Polkadot + Ethereum","Option 1: 18700; Option 2: 12920","Users in the waiting room will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts will be placed behind those in the waiting room.","Option 1: Tokens unlock on July 14, 2021. Option 2: Tokens release linearly over 2 years starting from July 14, 2021","BTC, ETH, USDC, USDT","Option 1: $0.55 per token, $500 limit. Option 2: $0.38 per token, $500 limit","The user's purchase may be cancelled and the user may be banned from future CoinList sales","CoinList.co","The user's account will be terminated and all purchases will be cancelled"];for(let d=0;d<a.length;d++)-1!==c.indexOf(a[d].textContent)&&(a[d].querySelectorAll(".c-input")[0].checked=!0),await b(100+Math.floor(147*Math.random())+1);console.log("Done")};run();
  ```
## Efinity quiz
```javascript
let run=async()=>{let a=document.body.querySelectorAll(".quiz")[0].querySelectorAll(".c-label--inline"),b=a=>new Promise(b=>setTimeout(b,a)),c=["Enjin","Polkadot","100M tokens","Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room.","BTC, ETH, USDC, USDT","$0.20 per token, $500 limit","The user's purchase may be cancelled and the user may be banned from future CoinList sales","CoinList.co","The user's account will be terminated and all purchases will be cancelled"];for(let d=0;d<a.length;d++)-1!==c.indexOf(a[d].textContent)&&(a[d].querySelectorAll(".c-input")[0].checked=!0),await b(50+Math.floor(103*Math.random())+1);console.log("Done")};run();
```

2021