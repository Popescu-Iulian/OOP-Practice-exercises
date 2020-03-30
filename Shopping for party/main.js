// petrecere app care va primi o reteta si un nr. de persoane invitate si va returna o lista de cumparaturi cu cate kg trebuie cumparate din fiecare element din reteta ca sa hraneasca toti invitatii; sa trimita invitatilor un email cu lista de alergeni + felul de mancare.


class FelMancare {
  name = '';
  ingrediente = [];

  constructor(name, ingrediente) {
    this.name = name;
    this.ingrediente = ingrediente;
  }

  get alergeni() {
    let rezultat = this.ingrediente.map(i => i.alergen);
    return rezultat;
  }
}

class Ingredient {
  nume = '';
  cantitate = 0;
  alergen = '';

  constructor(name, cantitate, alergen) {
    this.name = name;
    this.cantitate = cantitate;
    this.alergen = alergen;
  }
}

class ListaCumparaturi {
  nrInvitati = 0;
  ingrediente = [];

  constructor(nrInvitati, ingrediente) {
    this.nrInvitati = nrInvitati;
    this.ingrediente = ingrediente;
  }

  cantitateMancare() {
    this.ingrediente.forEach(ingredient => {
      console.log(`Cumpara ${this.nrInvitati * ingredient.cantitate} kg de ${ingredient.name}`);
    });
  }
}

class Invitatie {
  constructor(listaInvitati, felMancare) {
    this.listaInvitati = listaInvitati;
    this.felMancare = felMancare;
  }

  trimiteInvitatie() {
    this.listaInvitati.forEach(invitat => console.log(`Draga, ${invitat}, la masa vom servi ${this.felMancare.name} care contine alergenii: ${this.arrayToString(this.felMancare.alergeni)}`))
  }

  arrayToString(alergeni) {
    return alergeni.join(', ');
  }
}

let cartof = new Ingredient('cartof', 4, 'amidon');
let ciuperca = new Ingredient('ciuperca', 8, 'otrava');

let salata = new FelMancare('salata', [cartof, ciuperca]);

let listaCumparaturi = new ListaCumparaturi(4, [cartof, ciuperca]);

listaCumparaturi.cantitateMancare();

let listaInvitati = ['Ion', 'Vasile', 'Ghita', 'Gheorghe'];

let persoaneInvitate = new Invitatie(listaInvitati, salata);
persoaneInvitate.trimiteInvitatie();