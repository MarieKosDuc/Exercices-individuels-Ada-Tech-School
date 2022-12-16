function askName() {
  let userName = prompt("Saisissez votre nom");
  return userName;
}

//function askBirthYear(){
//  let birthYear = prompt("Saisissez votre année de naissance");
//var currentYear = (new Date()).getFullYear();
//let userAge = currentYear - birthYear;
//return userAge}

function askBirthDate() {
  let birthDate = prompt(
    "Saisissez votre date de naissance (au format JJ/MM/AAAA)"
  );
  let birthDay = birthDate.substr(0, 2);
  console.log(birthDate);
  let birthMonth = birthDate.substr(3, 2);
  console.log(birthMonth);
  let birthYear = birthDate.substr(6, 4);
  console.log(birthYear);
  let currentYear = new Date().getFullYear();
  let userAge = currentYear - birthYear;
  let m = new Date().getMonth() + 1 - birthMonth;
  // JS compte les mois de 0 à 11 : pour que la soustraction mois actuel - mois de naissance soit correcte, il faut ajouter 1 !

  console.log(userAge);
  console.log(m);

  if (m < 0) {
    userAge = userAge - 1;
  } else {
    if (m == 0) {
      let j = new Date().getDate() - birthDay;
      console.log(j);
      if (j < 0) {
        userAge = userAge - 1;
      }
    }
  }

  console.log(userAge);
  return userAge;
}

document.body.innerHTML += "<h2> Bonjour " + askName() + " ! </h2>";

document.body.innerHTML += "<h3>Vous avez " + askBirthDate() + " ans. </h3>";
