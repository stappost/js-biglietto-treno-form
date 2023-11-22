esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno-form
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Sono richiesti almeno 5 push.
Consigli:
Rispettate le milestone., non andate avanti se non avete completato prima quella precedente.

SCAFFOLDING
1 - permettere all'utente di inserire i km da percorrere in html
2 - permettere all'utente di inserire l'età in html
3 - inserire button 
4 - creare una variabile prezzo_totale moltiplicando i km per 0.21
5 - ? eta è minore di 18 
    5.1 - ricavare prezzo scontato moltiplicando il prezzo base per 0.8 e inserire nella variabile prezzo_totale
    5.2 - arrotondare a 2 cifre decimali
6 - : ? eta è maggiore di 65
    6.1 - ricavare prezzo scontato moltiplicando il prezzo base per 0.6 e inserire nella variabile prezzo_totale
    6.2 - arrotondare a 2 cifre decimali
7 - stampare prezzo totale
MILESTONE 2
1 - permettere all'utente di inserire il proprio nome
2 - permettere all'utente di inserire il proprio cognome
3 - mostrare in html il recap dei dati
4 - mostrare in html il prezzo finale