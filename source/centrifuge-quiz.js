let run = async () => {
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      'Polkadot + Ethereum',
      'Option 1: 18700; Option 2: 12920',
      'Users in the waiting room will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts will be placed behind those in the waiting room.',
      'Option 1: Tokens unlock on July 14, 2021. Option 2: Tokens release linearly over 2 years starting from July 14, 2021',
      'BTC, ETH, USDC, USDT',
      'Option 1: $0.55 per token, $500 limit. Option 2: $0.38 per token, $500 limit',
      'The user\'s purchase may be cancelled and the user may be banned from future CoinList sales',
      'CoinList.co',
      'The user\'s account will be terminated and all purchases will be cancelled'
    ];
  
  for (let i = 0; i < input.length; i++) {
    if (dict.indexOf(input[i].textContent) !== -1) {
      input[i].querySelectorAll('.c-input')[0].checked = true
    }
  
    await timeout(100 + Math.floor(Math.random() * (147 - 1 + 1)) + 1)
  }
  
  console.log('Done')
}

run()