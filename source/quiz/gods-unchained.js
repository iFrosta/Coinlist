let run = async () => {
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      'Blockchain based trading card game',
      'Ethereum and Immutable X',
      'Option 1: 20 million; Option 2: 15 million',
      'Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room',
      'Option 1: 50% of tokens become freely transferable after a 90-day cliff (on or around January 11, 2022), the remaining 50% unlock linearly over 12 months. Option 2: Tokens begin unlocking after a 90-day cliff (on or around January 11, 2022) and will be unlocked over 12 months.',
      'Option 1: $0.336 per token, $500 limit. Option 2: $0.24 per token, $500 limit',
      'BTC, ETH, USDC, USDT',
      'Option 1: $0.50 per token, $500 limit. Option 2: $0.225 per token, $1,000 limit',
      'The user\'s purchase may be cancelled and the user may be banned from future CoinList sales',
      'coinlistofficialchannel',
      'CoinList.co',
      'The user\'s account will be terminated and all purchases will be cancelled'
    ]
  
  console.log('❤️ Thank you for your support ERC20 | BEP20 (BSC)\n0x8e6a359C05a8ab21409F74ec175Fb0C5ee4CF38c')
  
  for (let i = 0; i < input.length; i++) {
    if (dict.indexOf(input[i].textContent) !== -1) input[i].querySelectorAll('.c-input')[0].checked = true
  }
  
  await timeout(200)
  document.getElementById('continue').click()
}

run()