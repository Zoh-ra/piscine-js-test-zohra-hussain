const express = require("express");
const app = express();
const addition = require("./s1/exercice1");
const soustraction = require("./s1/exercice2");
const multiplication = require("./s1/exercice3");
const division = require("./s1/exercice4");
const factorielle = require("./s1/exercice5");
const estPairOuImpair = require("./s1/exercice6");
const celsiusEnFahrenheit = require("./s1/exercice7");
const aireCercle = require("./s1/exercice8");
const estPalindrome = require("./s1/exercice9");
const pgcd = require("./s1/exercice10");

const dateIlYADixAns = require("./s2/exercice1");
const formaterDate = require("./s2/exercice2");
const differenceEnJours = require("./s2/exercice3");
const ajouterJours = require("./s2/exercice4");
const estAnneeBissextile = require("./s2/exercice5");
const premierJourDuMois = require("./s2/exercice6");
const dernierJourDuMois = require("./s2/exercice7");
const formaterDuree = require("./s2/exercice8");
const chevauchementDates = require("./s2/exercice9");
const calculerAge = require("./s2/exercice10");

const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json([{ id: 1, name: "John Doe" }]);
});

app.post("/:param", (req, res) => {
  return res.json([{ error: false, num: req.params.param }]);
});

app.post("/s1/exercice1", (req, res) => {
  if (req.body?.n1 == undefined || req.body?.n2 == undefined) {
    return res.status(409).json([
      {
        error: true,
        response: "Le nombre introuvable",
      },
    ]);
  }

  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (!n1) {
    return res.status(409).json([
      {
        error: true,
        response: "Le nombre est pas valide",
      },
    ]);
  }

  if (!n2) {
    return res.status(409).json([
      {
        error: true,
        response: "Le nombre est pas valide",
      },
    ]);
  }

  let a = addition(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice2", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 === undefined || n2 === undefined || isNaN(n1) || isNaN(n2)) {
    return res.status(409).json([
      {
        error: true,
        response: "Le nombre n'est pas valide",
      },
    ]);
  }

  let a = soustraction(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice3", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (
    typeof n1 != "number" ||
    typeof n2 != "number" ||
    n1 == null ||
    n2 == null ||
    n1 == undefined ||
    n2 == undefined
  ) {
    return res.status(409).json([
      {
        error: true,
        response: "Les valeurs n1 et n2 doivent être des nombres valides.",
      },
    ]);
  }
  let a = multiplication(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice4", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (
    typeof n1 != "number" ||
    typeof n2 != "number" ||
    n1 == null ||
    n2 == null ||
    n1 == undefined ||
    n2 == undefined
  ) {
    return res.status(409).json([
      {
        error: true,
        response: "Les valeurs n1 et n2 doivent être des nombres valides.",
      },
    ]);
  }

  if (n2 === 0) {
    return res.status(409).json([
      {
        error: true,
        response: "La division par zéro n'est pas autorisée.",
      },
    ]);
  }

  let a = division(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice5", (req, res) => {
  const n1 = req.body.n1;
  if (typeof n1 != "number" || n1 == null || n1 == undefined || n1 < 0) {
    return res.status(409).json([
      {
        error: true,
        response: "La valeur n1 doit être un nombre entier positif ou nul.",
      },
    ]);
  }
  let a = factorielle(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice6", (req, res) => {
  const n1 = req.body.n1;
  if (
    typeof n1 !== "number" ||
    n1 === null ||
    n1 === undefined ||
    !Number.isInteger(n1)
  ) {
    return res.status(409).json([
      {
        error: true,
        response: "La valeur n1 doit être un nombre entier.",
      },
    ]);
  }

  let a = estPairOuImpair(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice7", (req, res) => {
  const n1 = req.body.n1;
  if (typeof n1 !== "number" || n1 === null || n1 === undefined) {
    return res.status(409).json([
      {
        error: true,
        response: "La valeur n1 doit être un nombre.",
      },
    ]);
  }

  let a = celsiusEnFahrenheit(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice8", (req, res) => {
  const n1 = req.body.n1;

  if (typeof n1 !== "number" || n1 === null || n1 === undefined || n1 < 0) {
    return res.status(409).json([
      {
        error: true,
        response: "La valeur n1 (rayon) doit être un nombre positif ou nul.",
      },
    ]);
  }

  let a = aireCercle(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice9", (req, res) => {
  const n1 = req.body.n1;

  if (typeof n1 !== "string" || n1 === null || n1 === undefined) {
    return res.status(409).json([
      {
        error: true,
        response: "La valeur n1 (mot) doit être une chaîne de caractères.",
      },
    ]);
  }

  let a = estPalindrome(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice10", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (
    typeof n1 !== "number" ||
    typeof n2 !== "number" ||
    n1 !== Math.floor(n1) ||
    n2 !== Math.floor(n2) ||
    n1 < 0 ||
    n2 < 0
  ) {
    return res.status(409).json([
      {
        error: true,
        response:
          "Les valeurs n1 et n2 doivent être des nombres entiers positifs ou nuls.",
      },
    ]);
  }

  let a = pgcd(n1, n2);

  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice1", (req, res) => {
  const dateDix = dateIlYADixAns();
  return res.json([{ reponse: dateDix }]);
});

app.post("/s2/exercice2", (req, res) => {
  const dateStr = req.body.date;

  if (!dateStr) {
    return res.status(409).json([
      {
        error: true,
        response: "La date est manquante.",
      },
    ]);
  }

  const date = new Date(dateStr);

  if (isNaN(date)) {
    return res.status(409).json([
      {
        error: true,
        response: "Le format de la date est incorrect. Utilisez yyyy-mm-dd.",
      },
    ]);
  }

  const dateFormatee = formaterDate(date);
  return res.json([{ reponse: dateFormatee }]);
});

app.post("/s2/exercice3", (req, res) => {
  const date1Str = req.body.date1;
  const date2Str = req.body.date2;

  if (!date1Str || !date2Str) {
    return res.status(409).json([
      {
        error: true,
        response: "Les dates sont manquantes.",
      },
    ]);
  }

  const date1 = new Date(date1Str);
  const date2 = new Date(date2Str);

  if (isNaN(date1) || isNaN(date2)) {
    return res.status(409).json([
      {
        error: true,
        response: "Le format de date est incorrect. Utilisez yyyy-mm-dd.",
      },
    ]);
  }

  const differenceJours = differenceEnJours(date1, date2);
  return res.json([{ reponse: differenceJours }]);
});

app.post("/s2/exercice4", (req, res) => {
  const date = new Date(req.body.date);
  const jours = req.body.jours;

  if (isNaN(date)) {
    return res.status(400).json([
      {
        error: true,
        response: "La date est invalide. Utilisez un format de date valide.",
      },
    ]);
  }
  if (isNaN(jours)) {
    return res.status(400).json([
      {
        error: true,
        response: "Le nombre de jours doit être un nombre.",
      },
    ]);
  }

  const nouvelleDate = ajouterJours(date, jours);
  const formattedDate = nouvelleDate.toISOString().split("T")[0];
  return res.json([{ reponse: formattedDate }]);
});

app.post("/s2/exercice5", (req, res) => {
  const annee = req.body.annee;

  if (!Number.isInteger(annee) || annee < 0) {
    return res.status(400).json([
      {
        error: true,
        response: "L'année doit être un nombre entier positif.",
      },
    ]);
  }

  const estBissextile = estAnneeBissextile(annee);
  return res.json([{ reponse: estBissextile }]);
});

app.post("/s2/exercice6", (req, res) => {
  const date = new Date(req.body.date);

  if (isNaN(date)) {
    return res.status(400).json([
      {
        error: true,
        response: "La date est invalide. Utilisez un format de date valide.",
      },
    ]);
  }

  const premierJour = premierJourDuMois(date);
  return res.json([{ reponse: premierJour.toISOString().split("T")[0] }]);
});

app.post("/s2/exercice7", (req, res) => {
  const dateStr = req.body.date;

  if (!dateStr) {
    return res.status(400).json([
      {
        error: true,
        response: "La date est manquante.",
      },
    ]);
  }

  const date = new Date(dateStr);

  if (isNaN(date)) {
    return res.status(400).json([
      {
        error: true,
        response: "Le format de date est incorrect. Utilisez yyyy-mm-dd.",
      },
    ]);
  }

  const dernierJour = dernierJourDuMois(date);
  return res.json([{ reponse: dernierJour.toISOString().split("T")[0] }]);
});

app.post("/s2/exercice8", (req, res) => {
  const heures = req.body.heures;
  const minutes = req.body.minutes;

  if (
    typeof heures !== "number" ||
    typeof minutes !== "number" ||
    heures < 0 ||
    minutes < 0
  ) {
    return res.status(400).json([
      {
        error: true,
        response:
          "Les heures et les minutes doivent être des nombres positifs ou nuls.",
      },
    ]);
  }

  const dureeFormatee = formaterDuree(heures, minutes);
  return res.json([{ reponse: dureeFormatee }]);
});

app.post("/s2/exercice9", (req, res) => {
  const debut1 = new Date(req.body.debut1);
  const fin1 = new Date(req.body.fin1);
  const debut2 = new Date(req.body.debut2);
  const fin2 = new Date(req.body.fin2);

  if (isNaN(debut1) || isNaN(fin1) || isNaN(debut2) || isNaN(fin2)) {
    return res.status(400).json([
      {
        error: true,
        response: "Les dates doivent être au format valide (ex. 'YYYY-MM-DD').",
      },
    ]);
  }

  const seChevauchent = chevauchementDates(debut1, fin1, debut2, fin2);
  return res.json([{ reponse: seChevauchent }]);
});

app.post("/s2/exercice10", (req, res) => {
  const dateNaissance = new Date(req.body.dateNaissance);

  if (isNaN(dateNaissance)) {
    return res.status(400).json([
      {
        error: true,
        response:
          "La date de naissance doit être au format valide (ex. 'YYYY-MM-DD').",
      },
    ]);
  }

  const age = calculerAge(dateNaissance);
  return res.json([{ reponse: age }]);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app;
