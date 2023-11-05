// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(date1, date2) {
  const dateObj1 = new Date(date1);
  const dateObj2 = new Date(date2);
  const differenceEnMs = dateObj2 - dateObj1;
  const differenceEnJours = differenceEnMs / (1000 * 60 * 60 * 24);

  return Math.abs(differenceEnJours);
};
