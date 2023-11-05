// Exercice 8: Créer une fonction pour formater une durée en heures et minutes
module.exports = function formaterDuree(heures, minutes) {
  heures = Number(heures);
  minutes = Number(minutes);

  if (
    isNaN(heures) ||
    isNaN(minutes) ||
    heures < 0 ||
    heures > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return "Durée invalide";
  }

  const heuresStr = heures < 10 ? `0${heures}` : `${heures}`;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${heuresStr}:${minutesStr}`;
};
