let run = async () => {
    // https://github.com/iFrosta/Coinlist
    let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
      timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
      dict = [
        "50,000,000",
        "Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room",
        "Neon is an EVM that allows Ethereum dApps to function within Solana",
        "USDC, USDT",
        "$0.10 per token, $500 max purchase amount",
        "The user's purchase may be canceled and the user may be banned from future CoinList sales",
        "CoinList.co",
        "The user's account will be terminated and all purchases will be canceled"
      ]

    console.log('❤️ Thank you for your support ERC20\n0x8e6a359C05a8ab21409F74ec175Fb0C5ee4CF38c')

    for (let i = 0; i < input.length; i++) {
      if (dict.indexOf(input[i].textContent) !== -1) input[i].querySelectorAll('.c-input')[0].checked = true
    }
    
    await timeout(200)
    document.body.querySelector('.js-submit').click()
  }
  
  run()
