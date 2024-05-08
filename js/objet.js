// Manipulation des objets :

// Comparer des objets :
// Écrivez une fonction qui prend deux objets en paramètre et compare leurs propriétés pour déterminer s'ils sont égaux.

// Utilisation de constructeurs :
// Utilisez une fonction constructeur pour créer un objet représentant une personne avec des propriétés telles que nom, prénom et âge.

// Héritage d'objets :
// Créez un objet "Animal" avec des propriétés communes à tous les animaux, puis créez des objets "Chien" et "Chat" qui héritent des propriétés de l'objet "Animal".
// 1 Écrivez une fonction pour fusionner deux objets.

const fusionObjet = (obj, obj2) => {
  let finalObjet = Object.assign({}, obj, obj2);
  return console.log(finalObjet);
};

const po = { lo: 1, jin: 2 };
const po1 = { loe: 12, jine: 232 };
// fusionObjet(po, po1);

// 2 Implémentez une fonction pour vérifier si un objet contient une certaine clé.

const findDouble = (obj, value) => {
  for (item in obj) {
    if (item == value) {
      return console.log("true");
    } else {
      return console.log("false");
    }
  }
};

// findDouble(po, "lo");

// Tri d'objets :
// Créez un tableau d'objets représentant des livres avec des propriétés telles que titre, auteur et année de publication, puis triez-les par année de publication.

const livre1 = [
  {
    titre: "On comprend pas",
    auteur: "Moi",
    publication: 2002,
  },
  {
    titre: "Ca",
    auteur: "Tris Va",
    publication: 2019,
  },
  {
    titre: "Travershjtnm",
    auteur: "Moi",
    publication: 2012,
  },
];
// Trie les livres par année de publication
livre1.sort(function (a, b) {
  return a.publication - b.publication;
});
console.log(livre1);

// Utilisez une fonction constructeur pour créer un objet représentant une personne avec des propriétés telles que nom, prénom et âge.
