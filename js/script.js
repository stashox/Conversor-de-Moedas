function convertCurrency(){
    var from = document.getElementById("moedas1").value;
    var to = document.getElementById("moedas2").value;
    var fromvalue = document.getElementById("valor1")
    var tovalue = document.getElementById("valor2")
    var url = ("https://api.exchangeratesapi.io/latest?symbols=" + from + "," + to); //manipulando o link da API
    fetch(url) //mecanismo para puxar api
    .then(res => res.json()) //chamar o JSON
    .then(date => {
        var oneUnit = (date.rates[to] / date.rates[from]); //date é a parada da api, o rates está dentro do link, e dentro do rates eu puxo o que eu quiser
        var amt = fromvalue.value;
        var res = (oneUnit*amt);
        tovalue.value = res.toFixed(3); //para deixar 3 casas decimais
    })
}