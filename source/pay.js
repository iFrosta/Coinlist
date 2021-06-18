let run = async () => {
  let input = document.body.querySelectorAll(".c-input--checkbox"),
    purchase = document.body.querySelector('.c-input'),
    amount = document.body.querySelector('.u-colorGray6')
                     .textContent.trim().replace(/\$|,/g, '');
  
  amount = amount.split("–").pop()
  purchase.value = amount
  
  document.getElementById('investment_currency_usdt').click()
  
  for (let i = 0; i < input.length; i++) input[i].checked = true
  
  console.log('Done\n❤️ Thank you for your support ERC20 | BEP20 (BSC)\n0x8e6a359C05a8ab21409F74ec175Fb0C5ee4CF38c')
}

run()