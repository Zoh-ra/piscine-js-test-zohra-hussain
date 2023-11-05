const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  test("Test 1", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ id: 1, name: "John Doe" }]);
        done();
      });
  });
});

describe("POST /:param", () => {
  test("Test 1/2", (done) => {
    request(app)
      .post("/1")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ error: false, num: "1" }]);
        done();
      });
  });
});

//EX01S1
describe("POST /s1/exercice1", () => {
  test("Exercice 1 S1 - Test 1 - Addition de deux nombres", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: 20,
        n2: 10,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 30 }]);
        done();
      });
  });

  test("Exercice 1 S1 - Test 2 - Addition de deux nombres négatifs", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: -5,
        n2: -10,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: -15 }]);
        done();
      });
  });

  test("Exercice 1 S1 - Test 3 - Erreur - Données manquantes", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({})
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "Le nombre introuvable",
          },
        ]);
        done();
      });
  });
});

//EX02S1
describe("POST /s1/exercice2", () => {
  test("Exercice 2 S1 - Test 1: - Soustraction de deux nombres", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: 12,
        n2: 10,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 2 }]);
        done();
      });
  });

  test("Exercice 2 S1 - Test 2 - Soustraction de deux nombres négatifs", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: -5,
        n2: -10,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 5 }]);
        done();
      });
  });

  test("Exercice 2 S1 - Test 3: Erreur - Données manquantes", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({})
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "Le nombre n'est pas valide",
          },
        ]);
        done();
      });
  });

  test("Exercice 2 S1 - Test 4: Erreur - Nombre invalide", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: 20,
        n2: "abc",
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "Le nombre n'est pas valide",
          },
        ]);
        done();
      });
  });
});

//EXO3S1

describe("POST /s1/exercice3", () => {
  test("Exercice 3 S1 - Test 1 - Multiplication de deux nombres", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: 5,
        n2: 5,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 25 }]);
        done();
      });
  });

  test("Exercice 3 S1 - Test 2 - Multiplication de deux nombres (nombres négatifs)", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: -5,
        n2: 10,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: -50 }]);
        done();
      });
  });

  test("Exercice 3 S1 - Test 3 - Erreur - Données manquantes", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({})
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "Les valeurs n1 et n2 doivent être des nombres valides.",
          },
        ]);
        done();
      });
  });

  test("Exercice 3 S1 - Test 4 - Erreur - Nombre invalide", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: 20,
        n2: "abc",
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "Les valeurs n1 et n2 doivent être des nombres valides.",
          },
        ]);
        done();
      });
  });
});

//EXO4S1

describe("POST /s1/exercice4", () => {
  test("Exercice 4 S1 - Test 1 - Division de deux nombres", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: 16,
        n2: 4,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 4 }]);
        done();
      });
  });

  test("Exercice 4 S1 - Test 2 - Division de deux nombres négatifs", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: -20,
        n2: 5,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: -4 }]);
        done();
      });
  });

  test("Exercice 4 S1 - Test 3 - Erreur - Données manquantes", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({})
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "Les valeurs n1 et n2 doivent être des nombres valides.",
          },
        ]);
        done();
      });
  });

  test("Exercice 4 S1 - Test 4 - Erreur - Division par zéro", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: 10,
        n2: 0,
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "La division par zéro n'est pas autorisée.",
          },
        ]);
        done();
      });
  });
});

//EXO5S1
describe("POST /s1/exercice5", () => {
  test("Exercice 5 S1 - Test 1 - Calcul de la factorielle d'un nombre", (done) => {
    request(app)
      .post("/s1/exercice5")
      .send({
        n1: 5,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 120 }]);
        done();
      });
  });

  test("Exercice 5 S1 - Test 2 - Calcul de la factorielle d'un nombre négatif", (done) => {
    request(app)
      .post("/s1/exercice5")
      .send({
        n1: -5,
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "La valeur n1 doit être un nombre entier positif ou nul.",
          },
        ]);
        done();
      });
  });

  test("Exercice 5 S1 - Test 3 - Erreur - Données manquantes", (done) => {
    request(app)
      .post("/s1/exercice5")
      .send({})
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "La valeur n1 doit être un nombre entier positif ou nul.",
          },
        ]);
        done();
      });
  });
});

//EO6S1
describe("POST /s1/exercice6", () => {
  test("Exercice 6 S1 - Test 1 - Vérifier si un nombre est pair", (done) => {
    request(app)
      .post("/s1/exercice6")
      .send({
        n1: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "pair" }]);
        done();
      });
  });

  test("Exercice 6 S1 - Test 2 - Vérifier si un nombre est impair", (done) => {
    request(app)
      .post("/s1/exercice6")
      .send({
        n1: 7,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "impair" }]);
        done();
      });
  });

  test("Exercice 6 S1 - Test 3 - Erreur - Données manquantes", (done) => {
    request(app)
      .post("/s1/exercice6")
      .send({})
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "La valeur n1 doit être un nombre entier.",
          },
        ]);
        done();
      });
  });

  test("Exercice 6 S1 - Test 4 - Erreur - Nombre invalide", (done) => {
    request(app)
      .post("/s1/exercice6")
      .send({
        n1: "abc",
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "La valeur n1 doit être un nombre entier.",
          },
        ]);
        done();
      });
  });
});

//EXO7S1
describe("POST /s1/exercice7", () => {
  test("Exercice 7 S1 - Test 1 - Conversion de Celsius en Fahrenheit", (done) => {
    request(app)
      .post("/s1/exercice7")
      .send({
        n1: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 35.6 }]);
        done();
      });
  });

  test("Exercice 7 S1 - Test 2 - Conversion de Celsius en Fahrenheit (nombre négatif)", (done) => {
    request(app)
      .post("/s1/exercice7")
      .send({
        n1: -10,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 14.0 }]);
        done();
      });
  });

  test("Exercice 7 S1 - Test 3 - Erreur - Données manquantes", (done) => {
    request(app)
      .post("/s1/exercice7")
      .send({})
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "La valeur n1 doit être un nombre.",
          },
        ]);
        done();
      });
  });

  test("Exercice 7 S1 - Test 4 - Erreur - Nombre invalide", (done) => {
    request(app)
      .post("/s1/exercice7")
      .send({
        n1: "abc",
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "La valeur n1 doit être un nombre.",
          },
        ]);
        done();
      });
  });
});

//EXO8S1
describe("POST /s1/exercice8", () => {
  test("Exercice 8 S1 - Test 1 - Calcul de l'aire d'un cercle", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({
        n1: 6,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 113.09733552923255 }]);
        done();
      });
  });

  test("Exercice 8 S1 - Test 2 - Calcul de l'aire d'un cercle rayon nul", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({
        n1: 0,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 0 }]);
        done();
      });
  });

  test("Exercice 8 S1 - Test 3 - Erreur - Données manquantes", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({})
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response:
              "La valeur n1 (rayon) doit être un nombre positif ou nul.",
          },
        ]);
        done();
      });
  });

  test("Exercice 8 S1 - Test 4 - Erreur - Nombre invalide", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({
        n1: "abc",
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response:
              "La valeur n1 (rayon) doit être un nombre positif ou nul.",
          },
        ]);
        done();
      });
  });
});

//EXO9S1
describe("POST /s1/exercice9", () => {
  test("Exercice 9 S1 - Test 1 - Vérifier si une chaîne est un palindrome", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: "KAYAK",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: true }]);
        done();
      });
  });

  test("Exercice 9 S1 - Test 2 - Vérifier si une chaîne n'est pas un palindrome", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: "Bonjour",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: false }]);
        done();
      });
  });

  test("Exercice 9 S1 - Test 3 - Erreur - Données manquantes", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({})
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "La valeur n1 (mot) doit être une chaîne de caractères.",
          },
        ]);
        done();
      });
  });

  test("Exercice 9 S1 - Test 4 - Erreur - Chaîne de caractères invalide", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: 12345,
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response: "La valeur n1 (mot) doit être une chaîne de caractères.",
          },
        ]);
        done();
      });
  });
});

//EXO10S1
describe("POST /s1/exercice10", () => {
  test("Exercice 10 S1 - Test 1 - Calcul du PGCD de 10 et 15", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: 10,
        n2: 15,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 5 }]);
        done();
      });
  });

  test("Exercice 10 S1 - Test 2 - Calcul du PGCD de 30 et 42", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: 30,
        n2: 42,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 6 }]);
        done();
      });
  });

  test("Exercice 10 S1 - Test 3 - Erreur - Valeurs non valides", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: "abc",
        n2: 15,
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response:
              "Les valeurs n1 et n2 doivent être des nombres entiers positifs ou nuls.",
          },
        ]);
        done();
      });
  });

  test("Exercice 10 S1 - Test 4 - Erreur - Données manquantes", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({})
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            error: true,
            response:
              "Les valeurs n1 et n2 doivent être des nombres entiers positifs ou nuls.",
          },
        ]);
        done();
      });
  });
});

////////////////////////////////////////////////////S2///////////////////////////////////////////////////////////

//EXO1S2
describe("POST /s2/exercice1", () => {
  test("Exercice 1 S2 - Test 1 - Obtenir la date d'il y a dix ans", (done) => {
    request(app)
      .post("/s2/exercice1")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - 10);
        expect(res.body).toEqual([{ reponse: currentDate.toDateString() }]);
        done();
      });
  });
});

//EXO2S2
describe("POST /s2/exercice2", () => {
  test("Exercice 2 S2 - Test 1 - Formater une date en jj/mm/aaaa", (done) => {
    request(app)
      .post("/s2/exercice2")
      .send({ date: "2001-02-08" })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "08/02/2001" }]);
        done();
      });
  });
});

//EXO3S2
describe("POST /s2/exercice3", () => {
  test("Exercice 3  - Test de différence en jours", (done) => {
    const date1 = "2001-02-08";
    const date2 = "2001-02-12";
    request(app)
      .post("/s2/exercice3")
      .send({ date1, date2 })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 4 }]);
        done();
      });
  });
});

//EXO4S2
describe("POST /s2/exercice4", () => {
  test("Exercice 4 S2 - Test 1 -  ajouter 5 jours à la date '2023-11-01'", (done) => {
    const date = "2023-11-01";
    const jours = 5;
    request(app)
      .post("/s2/exercice4")
      .send({ date, jours })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "2023-11-06" }]);
        done();
      });
  });

  test(" Exercice 4 S2 - Test 2 - ajouter 10 jours à la date '2023-12-25'", (done) => {
    const date = "2023-12-25";
    const jours = 10;
    request(app)
      .post("/s2/exercice4")
      .send({ date, jours })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "2024-01-04" }]);
        done();
      });
  });

  test("Exercice 4 S2 - Test 3 - ajouter -3 jours à la date '2022-06-10'", (done) => {
    const date = "2022-06-10";
    const jours = -3;
    request(app)
      .post("/s2/exercice4")
      .send({ date, jours })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "2022-06-07" }]);
        done();
      });
  });
});

//EXO5S2
describe("POST /s2/exercice5", () => {
  test("Exercice 5 S2 - Test 1 - vérifier si l'année 2024 est bissextile", (done) => {
    const annee = 2024;

    request(app)
      .post("/s2/exercice5")
      .send({ annee })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: true }]);
        done();
      });
  });

  test("Exercice 5 S2 - Test 2 - vérifier si l'année 2022 est bissextile", (done) => {
    const annee = 2022;

    request(app)
      .post("/s2/exercice5")
      .send({ annee })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: false }]);
        done();
      });
  });
});

//EXO6S2
describe("POST /s2/exercice6", () => {
  test("Exercice 6 S2 - Test 1 - obtenir le premier jour du mois de '2023-11-15'", (done) => {
    const date = "2023-11-15";

    request(app)
      .post("/s2/exercice6")
      .send({ date })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "2023-11-01" }]);
        done();
      });
  });

  test("Exercice 6 S2 - Test 2 - obtenir le premier jour du mois de '2024-02-20'", (done) => {
    const date = "2024-02-20";

    request(app)
      .post("/s2/exercice6")
      .send({ date })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "2024-02-01" }]);
        done();
      });
  });
});

//EXO7S2
describe("POST /s2/exercice7", () => {
  test("Exercice 7 S2 - Test 1 - obtenir le dernier jour du mois de '2023-11-15'", (done) => {
    const date = "2023-11-15";

    request(app)
      .post("/s2/exercice7")
      .send({ date })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "2023-11-30" }]);
        done();
      });
  });

  test("Exercice 7 S2 - Test 2 - obtenir le dernier jour du mois de '2024-02-20'", (done) => {
    const date = "2024-02-20";

    request(app)
      .post("/s2/exercice7")
      .send({ date })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "2024-02-29" }]);
        done();
      });
  });
});

//EXO8S2
describe("POST /s2/exercice8", () => {
  test("Exercice 8 S2 - Test 1 t- formater la durée en heures et minutes 5 heures et 30 minutes", (done) => {
    const heures = 5;
    const minutes = 30;

    request(app)
      .post("/s2/exercice8")
      .send({ heures, minutes })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "05:30" }]);
        done();
      });
  });

  test("Exercice 8 S2 - Test 2 - formater la durée en heures et minutes 12 heures et 15 minutes", (done) => {
    const heures = 12;
    const minutes = 15;

    request(app)
      .post("/s2/exercice8")
      .send({ heures, minutes })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "12:15" }]);
        done();
      });
  });
});

//EXO9S2
describe("POST /s2/exercice9", () => {
  test("Exercice 9 S2 - Test 1 - vérifier le chevauchement entre deux plages de dates", (done) => {
    const debut1 = "2023-11-01";
    const fin1 = "2023-11-15";
    const debut2 = "2023-11-10";
    const fin2 = "2023-11-20";

    request(app)
      .post("/s2/exercice9")
      .send({ debut1, fin1, debut2, fin2 })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: true }]);
        done();
      });
  });

  test("Exercice 9 S2 - Test 2 - vérifier le chevauchement entre deux plages de dates", (done) => {
    const debut1 = "2023-11-01";
    const fin1 = "2023-11-15";
    const debut2 = "2023-11-16";
    const fin2 = "2023-11-30";

    request(app)
      .post("/s2/exercice9")
      .send({ debut1, fin1, debut2, fin2 })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: false }]);
        done();
      });
  });
});

//EXO10S2
describe("POST /s2/exercice10", () => {
  test("Exercice 10 S2 - Test 1 - calculer l'âge à partir de la date de naissance '2000-05-15'", (done) => {
    const dateNaissance = "2000-05-15";
    request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 23 }]);
        done();
      });
  });

  test("Exercice 10 S2 - Test 2 - calculer l'âge à partir de la date de naissance '1995-12-10'", (done) => {
    const dateNaissance = "1995-12-10";
    request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 27 }]);
        done();
      });
  });
});
