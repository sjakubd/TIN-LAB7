function dodaj() {
  let nowy = document.createElement("div");
  nowy.className = "box";
  nowy.innerText = "nowy";
  document.getElementById("container").appendChild(nowy);
}

function usun() {
  let kontener = document.getElementById("container");
  if (kontener.children.length > 0) {
    kontener.removeChild(kontener.firstElementChild);
  }
}

function zmienKolor() {
  let divy = document.getElementsByClassName("box");
  if (divy.length >= 3) {
    divy[2].style.background = "red";
  }
}

function wpiszTekst() {
  let divy = document.getElementsByClassName("box");
  for (let i = 0; i < divy.length; i++) {
    divy[i].innerText = "nowy tekst";
  }
}