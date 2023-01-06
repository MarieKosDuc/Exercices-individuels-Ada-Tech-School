//  Créer une fonction decritChainequi prend en paramètre une string et
// renvoie une string qui décrit les caractères qui constituent la chaîne en paramètre.

function describeString(myString) {
  // définition d'un tableau contenant les chaînes de caractères identiques
  let similarCaracs = myString[0];
  for (i = 1; i < myString.length; i++) {
    if (myString[i] == myString[i - 1]) {
      similarCaracs += myString[i];
    } else {
      similarCaracs += " " + myString[i];
    }
  }
  let caracsArray = similarCaracs.split(" ");
  // comptage des caractères identiques dans chaque élément du tableau
  let describeResult = "";
  for (j = 0; j < caracsArray.length; j++) {
    // console.log(caracsArray[j]);
    describeResult += caracsArray[j].length + caracsArray[j][0];
  }
  return describeResult;
}

// console.log(describeString("aabccd"));

// Créer une fonction suiteConway qui donne les n premiers termes de la suite
// qui commence par le caractère carac. n et carac sont passés en paramètres de la fonction.

function suiteConway(n, carac) {
  console.log(carac);
  let result = describeString(carac);
  console.log(result);
  for (k = 1; k < n - 1; k++) {
    console.log(describeString(result));
    result = describeString(result);
  }
}

// suiteConway(5, "a");
// suiteConway(10, "1");

// Afficher la suite de Conway générée dans un navigateur.
// Utiliser un texte centré pour l'afficher sous forme de pyramide.

function suiteConway2(n, carac) {
  let div = document.getElementById("suite");
  div.innerHTML = carac + "<br />";
  console.log(carac);

  let result = describeString(carac);
  div.innerHTML += result + "<br />";

  console.log(result);

  for (l = 1; l < n - 1; l++) {
    div.innerHTML += describeString(result) + "<br />";

    console.log(describeString(result));
    result = describeString(result);
  }
}

function getValue() {
  // Sélectionner l'élément input et récupérer sa valeur
  let numberInput = document.getElementById("numberInput").value;
  let caracInput = document.getElementById("caracInput").value;
  // Afficher la valeur
  //alert("vous avez saisi" + numberInput + caracInput);
  suiteConway2(numberInput, caracInput);
  suiteConway(numberInput, caracInput);
}
