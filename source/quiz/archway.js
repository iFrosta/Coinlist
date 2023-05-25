let run = async () => {
    // https://github.com/iFrosta/Coinlist
    let input = document.body.querySelectorAll(".quiz")[0].querySelectorAll('.c-label--inline'),
        timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)),
        dict = [
            "30,000,000",
            "Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room",
            "Archway is a Cosmos-native Layer 1 blockchain that allows developers to capture the value created by their dApps",
            "USDC, USDT",
            "$0.20 per token, $1000 max purchase amount",
            "The user's purchase may be canceled and the user may be banned from future CoinList sales",
            "CoinList.co",
            "The user's purchase may be canceled and the user may be banned from future CoinList sales",
        ]

    console.log('❤️ Thank you for your support ERC20 0x8e6a359C05a8ab21409F74ec175Fb0C5ee4CF38c')

    for (let i = 0; i < input.length; i++) {
        if (dict.indexOf(input[i].textContent) !== -1) input[i].querySelectorAll('.c-input')[0].checked = true
    }

    await timeout(200)
    document.body.querySelector('.js-submit').click()
}

run()