let run = async () => {
  let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    dict = [
      'Ethereum ',
      "EGL is a coordination token that holders use to vote on Ethereum's gas limit (block size) and incentivizes mining pools to follow their collaborative decision.",
      'Balancer',
      '15,000 ETH',
      'Users can receive compounding token rewards as CoinList will continually re-vote to maximize rewards.',
      'BTC, ETH, USDC, USDT',
      '0.05 ETH; 25 ETH',
      'Users will receive a portion of their tokens within 7 months, and the remaining after a year.',
      'No, users may receive less or more ETH through the distribution than the initial contribution due to price movements between the EGL-ETH pair on Balancer. Additionally, CoinList will take a 2% fee from the total ETH contributed through CoinList.',
      'Users are not secured an allocation until they complete funding. If the contribution cap is reached prior to completing funding, the user will not be granted an allocation.',
      'CoinList.co',
      "The user's account will be terminated and all contributions will be cancelled."
    ]
  
  for (let i = 0; i < input.length; i++) {
    if (dict.indexOf(input[i].textContent) !== -1) input[i].querySelectorAll('.c-input')[0].checked = true
  }
  
  console.log('Done\n❤️ Thank you for your support ERC20 | BEP20 (BSC)\n0x8e6a359C05a8ab21409F74ec175Fb0C5ee4CF38c')
}

run()