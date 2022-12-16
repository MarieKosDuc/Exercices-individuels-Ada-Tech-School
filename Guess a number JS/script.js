let giveResult = document.getElementById("result");

function askNumberJ1() {
  let numberJ1 = prompt("Joueur 1, saisissez un nombre compris entre 0 et 50");
  console.log("nombre J1", numberJ1);
  console.log(isNaN(numberJ1));
  numberJ1 = parseInt(numberJ1);
  while (isNaN(numberJ1) || numberJ1 < 0 || numberJ1 > 50) {
    alert("Saisie incorrecte, veuillez recommencer");
    numberJ1 = prompt("Joueur 1, saisissez un nombre compris entre 0 et 50");
  }
  return numberJ1;
}

function guessNumberJ2() {
  let numberJ2 = prompt("Joueur 2, essayer de deviner ce nombre !");
  console.log("nombre J2", numberJ2);
  console.log(isNaN(numberJ2));
  numberJ2 = parseInt(numberJ2);
  while (isNaN(numberJ2)) {
    alert("Saisie incorrecte, veuillez recommencer");
    numberJ2 = prompt("Joueur 2, essayer de deviner ce nombre !");
  }
  return numberJ2;
}

function didIWin(a, b) {
  let vérif = true;
  if (a === b) {
    vérif = true;
  } else if (a < b) {
    vérif = false;
    alert("Plus grand !");
  } else if (a > b) {
    vérif = false;
    alert("Plus petit !");
  }
  console.log(vérif);
  return vérif;
}

let askedNumber = askNumberJ1(); // la variable askedNumber stocke le résultat de la saisie de J1

function gameplay() {
  let guessedNumber = guessNumberJ2(); // la variable guessedNumber stocke le résultat de la saisie de J2
  let answer = didIWin(guessedNumber, askedNumber); // la fonction didIWin vérifie si le chiffre saisi par J1 est égal à la saisie de J2
  console.log("gameplayAnswer", answer);
  if (answer) {
    // équivaut à if (answer = true)
    giveResult.innerHTML += "Vous avez trouvé le nombre !";
  } else {
    gameplay();
  }
}

gameplay();
