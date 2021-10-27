let run = async () => {
  // https://github.com/iFrosta/Coinlist
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      'Option 1: 8,000; Option 2: 3,000',
      'Multichain',
      'Infrastructure for a simple multi-chain experience',
      'Users in the waiting room will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts will be placed behind those in the waiting room',
      'Option 1: 50% of the token purchase amount is freely trading 40 days after the sale date on or around December 21, 2021, and the other 50% of the token purchase amount unlocks 12 months after the sale date on or around November 10, 2022. Option 2: Tokens unlock 12 months after the sale date on or around November 10, 2022',
      'BTC, ETH, USDC, USDT',
      'Option 1: $0.10 per token, $500 limit. Option 2: $0.075 per token, $500 limit',
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
  document.body.querySelector('.js-submit').click()
}

run()