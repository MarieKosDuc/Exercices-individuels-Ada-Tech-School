/* Etape 1 : Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. 
Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.*/

const maxDaysInMonth = (D, M, Y) => {
  console.log("fonction maxdays : jour", D, "mois", M, "année", Y);
  const isBisextile = (Y) => {
    let febBis = 28;
    if (Y % 4 == 0) {
      febBis = 29;
    }
    return febBis;
  };
  switch (M) {
    case "01":
    case "03":
    case "05":
    case "07":
    case "08":
    case "10":
    case "12":
      maxDays = 31;
      break;
    case "02":
      maxDays = isBisextile(Y);
      break;
    case "04":
    case "06":
    case "09":
    case "11":
      maxDays = 30;
      break;
  }
  if (D > maxDays) {
    //console.log("jours", D, "max jours du mois", maxDays);
    //console.log("nombre de jours dépassé");
    return false;
  } else {
    //console.log("nombre de jours conforme");
    return true;
  }
};

//maxDaysInMonth(30, 02, 2022);

const isValidDate = (date) => {
  let dateSplit = String(date).split("/");
  let day = dateSplit[0];
  let month = dateSplit[1];
  let year = dateSplit[2];
  //console.log("fonction isValidDate : jour :", day);
  //console.log("mois :", month);
  //console.log("année :", year);
  if (
    day.length != 2 ||
    month.length != 2 ||
    year.length != 4 ||
    maxDaysInMonth(day, month, year) == false
  ) {
    console.log("La date n'est pas valide");
    return false;
  } else {
    console.log("La date est valide");
    return true;
  }
};

//isValidDate("31/01/2022");

// Etape 2 : Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique si la date est
// un palindrome. Si la date est invalide, retourner false.

function isPalindrome(date) {
  let dateCompare = date.slice(0, 2) + date.slice(3, 5) + date.slice(6, 10);
  //  console.log(dateCompare);
  let palindrome = true;
  for (let i = 0; i < dateCompare.length / 2; i++) {
    /* console.log(
      "tour",
      i,
      "1er",
      dateCompare[i],
      "dernier",
      dateCompare[dateCompare.length - 1 - i]
    );*/
    if (dateCompare[i] !== dateCompare[dateCompare.length - 1 - i]) {
      //  console.log("Ce n'est pas un palindrome !");
      palindrome = false;
      return palindrome;
    } else {
      //   console.log("C'est un palindrome !");
      palindrome = true;
    }
  }
  //  console.log("Résultat final", palindrome);
  return palindrome;
}

//isPalindrome("01/11/2022");

/* Étape 3 : Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. 
  La fonction prendra le x en paramètre. */

function getNextPalindromes(x) {
  // définition du tableau des palindromes
  let palindromesArray = [];

  // boucle for qui augmente le jour en cours de 1, 2, 3 ...
  for (i = 1; palindromesArray.length < x; i++) {
    let nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + i);

    // on transforme le nextDay obtenu au format français JJ/MM/AAAA
    nextDay = nextDay.toLocaleDateString("fr");
    //console.log(nextDay);

    // Vérification de si la prochaine date est un palindrome, si oui, ajout au tableau des palindromes
    if (isPalindrome(nextDay) == true) {
      palindromesArray.push(nextDay);
    }
  }
  console.log("Résultat final :", palindromesArray);
}

getNextPalindromes(4);
