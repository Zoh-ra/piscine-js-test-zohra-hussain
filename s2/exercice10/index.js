// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
  const dateNaissanceObj = new Date(dateNaissance);
  const dateActuelle = new Date();
  const differenceAnnees =
    dateActuelle.getFullYear() - dateNaissanceObj.getFullYear();
  if (
    dateActuelle.getMonth() < dateNaissanceObj.getMonth() ||
    (dateActuelle.getMonth() === dateNaissanceObj.getMonth() &&
      dateActuelle.getDate() < dateNaissanceObj.getDate())
  ) {
    return differenceAnnees - 1;
  }

  return differenceAnnees;
};
