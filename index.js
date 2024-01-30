document.getElementById("convertBtn").addEventListener("click", function () {
  var currency = document.getElementById("currency").value;
  var amount = document.getElementById("amount").value;

  if (currency && amount) {
    var url =
      "https://api.nbp.pl/api/exchangerates/rates/a/" +
      currency +
      "/?format=json";

    // Pobieranie danych z API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var rate = data.rates[0].mid;
        var result = amount * rate;
        document.getElementById("result").innerHTML =
          amount + " " + currency + " = " + result.toFixed(2) + " PLN";
      })
      .catch((error) => console.log("Błąd pobierania danych z API: ", error));
  } else {
    alert("Proszę wybrać walutę i podać kwotę.");
  }
});
