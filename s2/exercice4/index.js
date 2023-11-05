// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
  const dateCopie = new Date(date);
  dateCopie.setDate(dateCopie.getDate() + jours);
  return dateCopie;
};
