"use strict";

/*
FUNCTIONS
*/

//crea elemento con tag, classi e contenuto
function myCreateElement(tag, classesToAdd, content) {
  const element = document.createElement(tag);
  for (let i = 0; i < classesToAdd.length; i++) {
    element.classList.add(classesToAdd[i]);
  }
  element.append(content);
  return element;
}

//genera numero random tra min e max, inclusi a seconda del valore di includes
function random(min, max, includes) {
  let numeroRandom;
  //estremi inclusi
  if (includes) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    // estremi esclusi
    min++;
    max--;
    numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return numeroRandom;
}

function playGame(difficult) {
  let numeroCelle;
  let classes = [];

  switch (difficult) {
    case "medium":
      numeroCelle = 81;
      classes = ["cell", "medium-difficult"];
      break;
    case "high":
      numeroCelle = 49;
      classes = ["cell", "high-difficult"];
      break;
    case "low":
    default:
      numeroCelle = 100;
      classes = ["cell", "low-difficult"];
      break;
  }

  const fragment = document.createDocumentFragment();
  //ciclo che itera tante volte quanto il numero di celle necesarrie
  for (let i = 0; i < numeroCelle; i++) {
    const newElem = myCreateElement("div", classes, i + 1);
    fragment.append(newElem);
  }
  board.append(fragment);

  //ho cliccato su play
  isPlaying = true;
  //inizializzo gameOver
  gameOver = false;
  //ritorno numero celle che mi servirà poi
  return numeroCelle;
}

/*
OPERATIONS
*/

const board = document.querySelector(".board");
const playButton = document.getElementById("play");
const numeroBombe = 16;

//isPlaying diventa true quando ho cliccato su play
let isPlaying = false;
//gameOver è false quando inizia il gioco, diventa true se clicco su una bomba
let gameOver;

playButton.addEventListener("click", function () {
  const selectValue = document.querySelector("select").value;
  let numeroCelle;
  // let classes = [];
  if (!isPlaying) {
    numeroCelle = playGame(selectValue);
  } else {
    //altrimenti clicco su play quando sto già giocando dunque devo prima resettare
    board.innerHTML = "";
    numeroCelle = playGame(selectValue);
  }

  //genero 16 numeri casuali tra 1 e numeroCelle
  const arrayBombe = [];
  do {
    const num = random(1, numeroCelle, true);
    if (!arrayBombe.includes(num)) {
      arrayBombe.push(num);
    }
  } while (arrayBombe.length < 16);

  console.log(arrayBombe);

  //lista di tutte le celle
  const cells = document.querySelectorAll(".cell");
  const celleCliccate = [];
  let punteggio = 0;
  for (let j = 0; j < cells.length; j++) {
    cells[j].addEventListener("click", function () {
      if (!gameOver) {
        if (arrayBombe.includes(j + 1)) {
          cells[j].classList.add("new-bg-bomba");
          console.log(`Hai cliccato sulla cella ${cells[j].innerHTML}`);
          console.log(`Game Over! Punteggio: ${punteggio}`);
          gameOver = true;
        } else if (!celleCliccate.includes(j + 1)) {
          cells[j].classList.add("new-bg");
          console.log(`Hai cliccato sulla cella ${cells[j].innerHTML}`);
          celleCliccate.push(j + 1);
          punteggio++;
          if (punteggio === numeroCelle - numeroBombe) {
            console.log(`Hai vinto! Punteggio: ${punteggio}`);
          }
        }
      }
    });
  }
});
