let run = async () => {
  // https://github.com/iFrosta/Coinlist
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      "64,066,667",
      "Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room",
      "Tokens release on / around May 11, 2022, followed by a 9 mo linear release.",
      "BTC, ETH, USDC, USDT, ALGO, SOL",
      "Option 1: $0.55 per token, $500 limit. Option 2: $0.40 per token, $500 limit",
      "The user's purchase may be canceled and the user may be banned from future CoinList sales",
      "CoinList.co",
      "The user's account will be terminated and all purchases will be canceled"
    ]
  
  console.log('❤️ Thank you for your support ERC20 | BEP20 (BSC)\n0x8e6a359C05a8ab21409F74ec175Fb0C5ee4CF38c')
  
  for (let i = 0; i < input.length; i++) {
    if (dict.indexOf(input[i].textContent) !== -1) input[i].querySelectorAll('.c-input')[0].checked = true
  }
  
  await timeout(200)
  document.body.querySelector('.js-submit').click()
}

run()