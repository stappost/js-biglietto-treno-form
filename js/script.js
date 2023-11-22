// VARIABILE BUTTON 
const button = document.querySelector(".btn");

// EVENTO BUTTON VARIABILI KM ETA E PREZZO TOTALE 

button.addEventListener("click", function(){
    let km = document.getElementById("km").value;
    let eta = document.getElementById("eta").value;
    let prezzo_totale = km * 0.21;
    
    if(eta < 18){
        prezzo_totale *= (0.8);
        prezzo_totale = prezzo_totale.toFixed(2);
    }
    else if(eta > 65){
        prezzo_totale *= (0.6);
        prezzo_totale = prezzo_totale.toFixed(2);
    }
    else{
        prezzo_totale = prezzo_totale.toFixed(2);
    }
    console.log(prezzo_totale)
})