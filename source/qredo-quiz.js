let run = async () => {
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      'It is its own layer 2 blockchain',
      'Option 1: 30,000; Option 2: 2,250',
      'Users in the waiting room will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts will be placed behind those in the waiting room',
      'Option 1: Tokens unlock on or around September 8, 2021. Option 2: Tokens release linearly over 12 months starting from January 8, 2022',
      'BTC, ETH, USDC, USDT',
      'Option 1: $0.50 per token, $500 limit. Option 2: $0.225 per token, $1,000 limit',
      'The user\'s purchase may be cancelled and the user may be banned from future CoinList sales',
      'coinlistofficialchannel',
      'CoinList.co',
      'The user\'s account will be terminated and all purchases will be cancelled'
    ]
  
  for (let i = 0; i < input.length; i++) {
    if (dict.indexOf(input[i].textContent) !== -1) input[i].querySelectorAll('.c-input')[0].checked = true
  }
  
  console.log('Done\n❤️ Thank you for your support ERC20 | BEP20 (BSC)\n0x8e6a359C05a8ab21409F74ec175Fb0C5ee4CF38c')
}

run()