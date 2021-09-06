let run = async () => {
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      'Enjin',
      'Polkadot',
      '100M tokens',
      'Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room.',
      'BTC, ETH, USDC, USDT',
      '$0.20 per token, $500 limit',
      'The user\'s purchase may be cancelled and the user may be banned from future CoinList sales',
      'CoinList.co',
      'The user\'s account will be terminated and all purchases will be cancelled'
    ];
  
  for (let i = 0; i < input.length; i++) {
    if (dict.indexOf(input[i].textContent) !== -1) {
      input[i].querySelectorAll('.c-input')[0].checked = true
    }
    
    await timeout(50 + Math.floor(Math.random() * (103 - 1 + 1)) + 1)
  }
  
  console.log('Done')
}

run()