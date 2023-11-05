// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
  const dateCopie = new Date(date);
  dateCopie.setMonth(dateCopie.getMonth() + 1, 1);
  dateCopie.setDate(dateCopie.getDate() - 1);
  return dateCopie;
};
