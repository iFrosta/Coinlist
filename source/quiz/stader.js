let run = async () => {
  // https://github.com/iFrosta/Coinlist
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      "6,000,000",
      "Users in the waiting room will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts will be placed behind those in the waiting room",
      "Option 1: $4.50 per token, $500 limit. Option 2: $3.33 per token, $500 limit",
      "BTC, ETH, USDC, USDT, ALGO",
      "Terra",
      "Smart contract infrastructure for staking",
      "The user's purchase may be cancelled and the user may be banned from future CoinList sales",
      "CoinList.co",
      "coinlistofficialchannel",
      "The user's account will be terminated and all purchases will be cancelled",
      "Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room"
    ]
  
  console.log('❤️ Thank you for your support ERC20 | BEP20 (BSC)\n0x8e6a359C05a8ab21409F74ec175Fb0C5ee4CF38c')
  
  for (let i = 0; i < input.length; i++) {
    if (dict.indexOf(input[i].textContent) !== -1) input[i].querySelectorAll('.c-input')[0].checked = true
  }
  
  await timeout(200)
  document.body.querySelector('.js-submit').click()
}

run()