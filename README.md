# Campo Minato

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

- utilizzo la funzione random per generare numeri tra 1 e il numero delle celle
- creo un'array in cui inserire gli indici delle bombe
- finché l'array non contiene 16 elementi
  - genero un numero random tra 1 e il numero delle celle
  - se questo numero non è già presente nell'array lo aggiungo
    Per aggiungere gli eventi al click sulla cella, scorro la lista di tutti gli elementi con classe cell:
- per ogni elemento aggiungo l'evento al click che si comporta così:
  - se non sono in una situazione di game over(variabile inizializzata a false quando inizia il gioco)
    - se la cella su cui ho cliccato è tra quelle con la bomba
      - aggiungo la classe alla cella che la colora di rosso
      - stampo in console quale cella ho cliccato
      - stampo il punteggio
      - metto game over a true
    - altrimenti se la cella su cui ho cliccato non è tra quelle che già avevo cliccato
      - aggiungo la classe alla cella che la colora di azzurro
      - stampo in console quale cella ho cliccato
      - aggiungo all'array di celle cliccate il suo indice
      - incremento il punteggio
      - se il punteggio è pari al numero di celle - il numero di bombe
        - stampo che ho vinto
