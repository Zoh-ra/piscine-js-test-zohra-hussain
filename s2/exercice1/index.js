// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
module.exports = function dateIlYADixAns() {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 10);
  return currentDate.toDateString();
};
