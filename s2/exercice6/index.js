// Exercice 6: Créer une fonction pour obtenir le premier jour du mois d'une date donnée
module.exports = function premierJourDuMois(date) {
  const dateCopie = new Date(date);
  dateCopie.setDate(1);

  return dateCopie;
};
