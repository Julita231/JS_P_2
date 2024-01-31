document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const currency = document.getElementById("currency").value;
  const amount = document.getElementById("amount").value;

  if (currency && amount) {
    const url =
      "https://api.nbp.pl/api/exchangerates/rates/a/" +
      currency +
      "/?format=json";

    // Pobieranie danych z API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates[0].mid;
        const result = amount * rate;
        document.getElementById("result").textContent =
          amount + " " + currency + " = " + result.toFixed(2) + " PLN";
      })
      .catch((error) => console.error("Błąd pobierania danych z API: ", error));
  } else {
    alert("Proszę wybrać walutę i podać kwotę.");
  }
});
