let run = async () => {
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      'Automating job markets',
      'HUMAN is network agnostic',
      'Option 1: 100 million; Option 2: 20 million',
      'Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room',
      'Option 1: Tokens unlock linearly over 12 months after a 12 month lockup period. Option 2: Tokens unlock on or around August 10, 2021',
      'BTC, ETH, USDC, USDT',
      'Option 1: $0.50 per token, $2000 limit. Option 2: $0.75 per token, $1000 limit',
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