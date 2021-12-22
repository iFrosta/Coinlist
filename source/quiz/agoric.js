let run = async () => {
  // https://github.com/iFrosta/Coinlist
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      "Option 1: 36,000; Option 2: 16,250",
      "Users in the waiting room will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts will be placed behind those in the waiting room",
      "Option 1: Tokens unlock 6 months after the sale date on / around June 29, 2022, followed by a 12 month linear release. Option 2: Tokens unlock on/ around November 1, 2022, followed by a 12 month linear release.",
      "BTC, ETH, USDC, USDT, SOL, ALGO",
      "Option 1: $0.80 per token, $1000 limit. Option 2: $0.65 per token, $1000 limit",
      "BTC, ETH, USDC, USDT",
      "The user's purchase may be cancelled and the user may be banned from future CoinList sales",
      "CoinList.co",
      "coinlistofficialchannel",
      "The user's account will be terminated and all purchases will be cancelled"
    ]
  
  console.log('❤️ Thank you for your support ERC20 | BEP20 (BSC)\n0x8e6a359C05a8ab21409F74ec175Fb0C5ee4CF38c')
  
  for (let i = 0; i < input.length; i++) {
    if (dict.indexOf(input[i].textContent) !== -1) input[i].querySelectorAll('.c-input')[0].checked = true
  }
  
  await timeout(200)
  document.body.querySelector('.js-submit').click()
}

run()