// Exercice 2: Créer une fonction pour formater une date en "jj/mm/aaaa"
module.exports = function formaterDate(date) {
  const jour = date.getDate().toString().padStart(2, "0");
  const mois = (date.getMonth() + 1).toString().padStart(2, "0");
  const annee = date.getFullYear();
  return `${jour}/${mois}/${annee}`;
};
