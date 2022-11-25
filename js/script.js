let eta = parseInt(prompt('inserisci la tua età'));

let distanza = parseInt(prompt('inserisci la distanza da percorrere'));

let prezzo = distanza * 0.21

if(eta < 18) {
    prezzo_finale = parseFloat(prezzo * 0.8).toFixed(2)
}
else if (eta > 65){
    prezzo_finale = parseFloat(prezzo * 0.6).toFixed(2)
}
else {
    prezzo_finale = parseFloat(prezzo).toFixed(2)
}

document.getElementById('prezzo_finale').innerHTML = 'Il costo del tuo biglietto &egrave; di euro: ' + prezzo_finale;