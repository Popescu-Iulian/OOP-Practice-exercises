class Premiu {
  constructor(nume, an) {
    this.nume = nume;
    this.an = an;
  }
}

class Actor {
  constructor(nume, varsta, premii) {
    this.nume = nume;
    this.varsta = varsta;
    this.premii = premii;
  }
}

class Film {
  constructor(an_aparitie, nume, actori) {
    this.an_aparitie = an_aparitie;
    this.nume = nume;
    this.actori = actori;
  }
}

class Studio {
  constructor(nume, filme) {
    this.nume = nume;
    this.filme = filme;
  }
}

let oscar1990 = new Premiu('oscar', 1990);
let oscar2000 = new Premiu('oscar', 2000);
let oscar2010 = new Premiu('oscar', 2010);
let oscar2018 = new Premiu('oscar', 2018);

let actorOscar1990 = new Actor('actor cu 2 oscaruri', 35, [
  oscar1990,
  oscar2000
]);
let actorOscar2010 = new Actor('actor cu oscar din 2000', 55, [oscar2010]);
let actorOscar2018 = new Actor('actor cu oscar din 2018', 23, [oscar2018]);
let actorFaraPremii01 = new Actor('actor fara oscar 01', 33, []);
let actorFaraPremii02 = new Actor('actor fara oscar 02', 60, []);
let actorFaraPremii03 = new Actor('actor fara oscar 02', 20, []);

let film1 = new Film(1990, 'film cu actori de oscar', [
  actorOscar1990,
  actorFaraPremii01
]);
let film2 = new Film(2010, 'film cu actori fara premii2', [
  actorFaraPremii01,
  actorFaraPremii02,
  actorFaraPremii03
]);
let film3 = new Film(2010, 'film cu actori fara premii3', [
  actorFaraPremii01,
  actorFaraPremii02,
  actorFaraPremii03
]);
let film4 = new Film(2018, 'film cu actori de oscar', [
  actorOscar2010,
  actorOscar2018,
  actorFaraPremii02
]);
let film5 = new Film(2018, 'film cu actori fara premii5', [
  actorFaraPremii02,
  actorFaraPremii03
]);

let studio1 = new Studio('MGM', [film1, film2]);
let studio2 = new Studio('Disney', [film3, film4, film5]);

let studioDatabase = [studio1, studio2];

// afisati numele studiourilor care au publicat mai mult de 2 filme
for (let i = 0; i < studioDatabase.length; i++) {
  let studio = studioDatabase[i];

  if (studio.filme.length > 2) {
    console.log(studio.nume);
  }
}

// afisati numele studiourilor in care joaca actorul cu numele "actor cu 2 oscaruri"
for (let i = 0; i < studioDatabase.length; i++) {
  let studio = studioDatabase[i];

  for (let j = 0; j < studio.filme.length; j++) {
    let film = studio.filme[j];
    for (let k = 0; k < film.actori.length; k++) {
      let actor = film.actori[k];
      if (actor.nume === 'actor cu 2 oscaruri') {
        console.log(studio.nume);
      }
    }
  }
}

// afisati numele filmelor in care joaca cel putin un actor cu varsta de peste 50 de ani
for (let i = 0; i < studioDatabase.length; i++) {
  let studio = studioDatabase[i];
  for (let j = 0; j < studio.filme.length; j++) {
    let film = studio.filme[j];
    for (let k = 0; k < film.actori.length; k++) {
      let actor = film.actori[k];
      if (actor.varsta > 50) {
        console.log(film.nume);
      }
    }
  }
}
