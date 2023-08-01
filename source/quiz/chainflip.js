let run = async () => {
    // https://github.com/iFrosta/Coinlist
    let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
        timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
        dict = [
            "4,500,000 FLIP tokens",
            "Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room.",
            "Chainflip is a decentralized, trustless protocol that enables cross chain swaps between different blockchains.",
            "USDC, USDT",
            "$1.83 per token, max purchase of $4,000.00",
            "I must fund my intended purchase amount before the sale starts. I will need to have the full amount of funds in my CoinList wallet at the time of making a purchase during the sale.",
            "CoinList.co",
            "The user's account will be terminated and all purchases will be canceled."
        ]

    console.log('❤️ Thank you for your support ERC20 0xbB86A17094a1D03eF12418F63C9e0dd28BC511e1')

    for (let i = 0; i < input.length; i++) {
        if (dict.indexOf(input[i].textContent) !== -1) input[i].querySelectorAll('.c-input')[0].checked = true
    }

    await timeout(200)
    document.body.querySelector('.js-submit').click()
}

run()