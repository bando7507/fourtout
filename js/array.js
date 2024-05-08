// Combinaison d'objets et de tableaux :

//     Créez un tableau d'objets représentant des étudiants avec des propriétés telles que nom, âge et classe.
//     Écrivez une fonction pour trouver l'étudiant le plus âgé.
//     Triez les étudiants par âge de manière croissante.

// Exercices de pratique générale :

//     Implémentez une fonction pour fusionner deux tableaux tout en éliminant les doublons.
//     Écrivez une fonction pour calculer la somme des éléments d'un tableau.
//     Créez une fonction pour renvoyer un nouveau tableau qui contient uniquement les éléments communs à deux tableaux donnés.
////////////////////////////// Manipulation de tableaux ://////////////////////////
// 1 Écrivez une fonction pour trouver la somme des éléments d'un tableau.

// Manipulation des tableaux :

const findSum = (el) => {
  let sum = 0;
  el.map((item) => {
    sum += item;
  });
  return console.log(sum);
};

// findSum([1, 3]);

// 2 Créez une fonction pour trouver le plus grand élément dans un tableau.

const findMax = (el) => {
  let max = el[0];
  el.map((item) => {
    if (item > max) {
      max = item;
    }
  });
  return console.log(max);
};

// findMax([1, 3]);

// 3 Implémentez une fonction pour fusionner deux tableaux triés en un seul tableau trié.

const toFusionc = (arr1, arr2) => {
  let finalArray = [];
  let sum = 0;
  let max = arr2[0];

  arr1.map((item) => {
    sum += item;
  });
  finalArray.push(sum);

  arr2.map((item2) => {
    if (item2 > max) max = item2;
  });
  finalArray.push(max);

  return console.log(finalArray);
};

// toFusionc([1, 3, 4], [88, 3]);

// 4 Créez un tableau de noms de fruits et triez-le par ordre alphabétique.
const filterFruits = (arr1) => {
  return console.log(arr1.sort());
};

const arrFruits = ["banane", "orange", "ananas", "mange", "tomate"];
// filterFruits(arrFruits);

// 5 Écrivez une fonction pour trouver l'élément le plus fréquent dans un tableau.

const findDoudle = (arr) => {
  let counts = {};
  const newArray = [];
  let fi = 0;
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  newArray.push(counts);

  Object.keys(counts).map((item) => {
    if (newArray[0][item] == 2) {
      fi = item;
    }
  });

  // Trouver l'élément qui se répète deux fois
  //  let doubleNumber = null;
  //  Object.keys(counts).forEach((key) => {
  //    if (counts[key] === 2) {
  //      doubleNumber = parseInt(key);
  //    }
  //  });
  // return doubleNumber;
  return console.log(counts);
};

// findDoudle([5, 4, 4, 0, 8]);

// 6 Implémentez une fonction pour inverser un tableau sans utiliser la méthode reverse().

const noteReverse = (arr) => {
  let arrayReverse = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    arrayReverse = [...arrayReverse, arr[i]];
  }
  console.log(arrayReverse);
};

noteReverse([5, 4, 4, 0, 8]);
