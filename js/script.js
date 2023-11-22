// VARIABILE BUTTON 
const button = document.querySelector(".btn");

// EVENTO BUTTON VARIABILI KM ETA E PREZZO TOTALE 

button.addEventListener("click", function(){
    let km = document.getElementById("km").value
    let eta = document.getElementById("eta").value
    let prezzo_totale = km * 0.21
    console.log(prezzo_totale)
})