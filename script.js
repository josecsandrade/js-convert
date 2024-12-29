
// Obtendo os valores do formulario
const form = document.querySelector('form')
const amount = document.getElementById("amount")
const currency = document.getElementById('currency')
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//cotação de moedas estrangeiras.
const USD = 6.19;
const GBP = 7.79;
const EUR = 6.46;

//aqui eu aplico a funcao par ao campo acwitar apenas numeros 
amount.addEventListener('input', () => {
    const hasRegex = /\D+/g
    amount.value = amount.value.replace(hasRegex, "")
})

// aqui eu pego a moeda selecionada pelo usuario 
form.onsubmit = (event) => {
    event.preventDefault();
    
    switch(currency.value){
        case "USD":
            currencyCoins(amount.value , USD, "US$");
            break

            case "EUR":
            currencyCoins(amount.value, EUR, "€");
            break

            case "GBP": 
            currencyCoins(amount.value, GBP, "£");
            break
        }
}

function currencyCoins(amount, price, symbol){
  console.log(amount, price, symbol)

  //aqui eu mostro o valor da tela.
  try {

    description.textContent = `${symbol} ${price} 1`
    
    /*
    const valores = result
    result.textContent =  String(amount * price).replace(".", ",")
    */

    let total = String(amount * price).replace(".", ",")
    result.textContent = `${total} Reais`

    //adiciona a class
    footer.classList.add ("show-result")
  
} catch (error) {
    //remove a classs
    footer.classList.remove("show-result")
    
    //mostra a mensagem de erro caso ocorra
    alert("Erro na conversão")
    console.log(error)
    
  }
}
