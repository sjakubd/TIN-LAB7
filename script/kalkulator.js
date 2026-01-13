function oblicz() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let dzialanie = document.getElementById("dzialanie").value;
    let wynik = document.getElementById("wynik");

    if (isNaN(a) || isNaN(b)) {
        wynik.innerHTML = "Wpisz liczby";
        return;
    }

    let wynikkoncowy;

    if (dzialanie === "dodaj") wynikkoncowy = a + b;
    if (dzialanie === "odejmij") wynikkoncowy = a - b;
    if (dzialanie === "pomnoz") wynikkoncowy = a * b;
    if (dzialanie === "podziel") {
        if (b === 0) {
            wynik.innerHTML = "Nie dziel przez 0!";
            return;
        }
        wynikkoncowy = a / b;
    }

    wynik.innerHTML = wynikkoncowy;
}