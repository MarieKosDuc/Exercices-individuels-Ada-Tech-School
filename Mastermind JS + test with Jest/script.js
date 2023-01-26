// ----------- MASTERMIND -------------

let colors = ["blue", "red", "yellow", "green"];

//let combinationToGuess = ["blue", "red"];

function guess() {
  let guessTable = [];
  let guessColor1 = prompt(
    "Enter your first color : blue, red, yellow or green"
  );
  //console.log(colors.includes(guessColor1));
  if (colors.includes(guessColor1) == false) {
    alert("Your choice is not valid");
    guess();
  } else {
    guessTable.push(guessColor1);
  }
  let guessColor2 = prompt(
    "Enter your first color : blue, red, yellow or green"
  );
  //console.log(colors.includes(guessColor1));
  if (colors.includes(guessColor2) == false) {
    alert("Your choice is not valid");
    guess();
  } else {
    guessTable.push(guessColor2);
  }
  console.log(guessTable);
  return guessTable;
}

//guessOne();

let combinationToGuess = ["blue", "red", "red", "yellow"];
console.log("à deviner :", combinationToGuess);

function countOccurences(tab) {
  var result = {};
  tab.forEach(function (elem) {
    if (elem in result) {
      result[elem] = ++result[elem];
    } else {
      result[elem] = 1;
    }
  });
  console.log(result);
  return result;
}

let guessTable = ["red", "red", "blue", "blue"];

let essaiCombinaison = ["blue", "blue", "red", "red"];

function compareCombination(table1, table2) {
  console.log("To find :", table1, "To compare :", table2);
  let numberOkColors = 0;
  let numberMisplaced = 0;
  for (i = 0; i < table1.length; i++) {
    console.log("Boucle 1, tour %d :", i);
    if (table1[i] == table2[i]) {
      numberOkColors++;
      table1[i] = null;
      table2[i] = null;
      console.log(
        "To find :",
        table1,
        "To compare :",
        table2,
        "bien placé :",
        numberOkColors
      );
    }
  }
  for (j = 0; j < table2.length; j++) {
    console.log("Boucle 2, tour %d :", j);
    if (table2.includes(table1[j]) && table1[j] != null) {
      numberMisplaced++;
      let toPop = table1[j];
      console.log("à supprimer", table2[table2.indexOf(toPop)]);
      table1[j] = null;
      table2[table2.indexOf(toPop)] = null;
      console.log(
        "To find :",
        table1,
        "To compare :",
        table2,
        "mal placé :",
        numberMisplaced
      );
    } else {
      table1[j] = null;
      console.log("To find :", table1, "To compare :", table2);
    }
  }
  let result = [numberOkColors, numberMisplaced];
  console.log(
    "Correctement placés : ",
    numberOkColors,
    "Ok mais mal placé : ",
    numberMisplaced
  );
  console.log(result);
  return result;
}

compareCombination(guessTable, essaiCombinaison);

module.exports = { compareCombination };
compareCombination(guess());
