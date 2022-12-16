// Etape 1 : Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste (on commence avec 50 allumettes).

let allumettes = 50;

function enleverAllumettes(nombre) {
  allumettes -= nombre; // correspond à allumettes = allumettes - nombre
  return allumettes;
}

//enleverAllumettes(2);

//Étape 2 : Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes
// dans le tas.

numéroJoueur = 1;

function jouer(numéroJoueur) {
  if (allumettes > 0) {
    alert("Joueur " + numéroJoueur + ", c'est à toi !");
    let nombreAEnlever = parseInt(
      prompt(
        "Il reste " +
          allumettes +
          " allumettes. \n Combien voulez-vous en enlever (1 à 6) ?"
      )
    );
    if (nombreAEnlever < 1 || nombreAEnlever > 6) {
      alert("Ce nombre n'est pas compris entre 1 et 6 !");
      jouer();
    }
    //console.log(nombreAEnlever);
    return nombreAEnlever;
  }
}

//jouer();

//Étape 3 : Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.
//Ajouter a votre jeu la notion de victoire.

function dérouléDuJeu() {
  if (allumettes > 0) {
    let nombreJoueur = jouer();
    enleverAllumettes(nombreJoueur);
    console.log(allumettes);
  } else if (allumettes == 0) {
    alert("Joueur " + numéroJoueur + ", c'est gagné !");
  }
  while (allumettes >= 0) {
    dérouléDuJeu();
  }
}

//dérouléDuJeu();

// Étape 4 : Rajouter un 2eme joueur à votre jeu.
// Créer une fonction qui alterne 1 et 2 pour numéroJoueur

function choixDuNombreDeJoueurs() {
  let result = prompt("Saisissez le nombre de joueurs (maximum 5) :");
  if (result < 1 || result > 5) {
    alert("Ce nombre n'est pas conforme !");
    choixDuNombreDeJoueurs();
  }
  return result;
}

function dérouléAPlusieurs() {
  let nombreDeJoueurs = parseInt(choixDuNombreDeJoueurs());
  let joueurEnCours = 0;
  console.log("nombre joueurs", nombreDeJoueurs);
  for (
    joueurEnCours = 1;
    joueurEnCours <= parseInt(nombreDeJoueurs) + 1;
    joueurEnCours++
  ) {
    console.log("joueur en cours", joueurEnCours);
    if (joueurEnCours > nombreDeJoueurs) {
      joueurEnCours = 1;
    }
    if (allumettes > 0) {
      let nombreJoueur = jouer(joueurEnCours);
      enleverAllumettes(nombreJoueur);
      if (allumettes == 0) {
        alert("Joueur " + joueurEnCours + ", c'est gagné !");
        return;
      }
    }
  }
}

dérouléAPlusieurs();
