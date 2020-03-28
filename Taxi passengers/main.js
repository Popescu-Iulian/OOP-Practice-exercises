class Taxi {
  constructor(nrInmatriculare, sofer, locuri) {
    this.nrInmatriculare = nrInmatriculare;
    this.pasageri = [];
    this.sofer = sofer;
    this.locuri = locuri;
  }

  imbarcaOm(om) {
    if (this.isFree()) {
      this.pasageri.push(om);
    }
  }

  isFree() {
    let rezultat = this.pasageri.length < this.locuri;
    if (rezultat) {
      console.log('Taxi este liber!');
    } else {
      console.log(`Taxi este ocupat cu ${this.pasageri.length} oameni, plus soferul!`);
    }
    return rezultat;
  }
}

class Om {
  constructor(name) {
    this.name = name;
  }
}

class Sofer extends Om {
  constructor(name) {
    super(name);
  }

  set iaMasinaInPrimire(taxi) {
    this.taxi = taxi;
  }

  maiSuntLocuri() {
    console.log(this.taxi.isFree() ? 'Da!' : 'Nu!');
  }
}

let gigel = new Sofer('gigel');
let taxi = new Taxi('b200ubr', gigel, 4);
gigel.iaMasinaInPrimire = taxi;
let ion = new Om('ion');
let ion1 = new Om('ion1');
let ion2 = new Om('ion2');
let ion3 = new Om('ion3');
let ion4 = new Om('ion4');

taxi.imbarcaOm(ion);
taxi.imbarcaOm(ion1);
taxi.imbarcaOm(ion2);
taxi.imbarcaOm(ion3);
taxi.imbarcaOm(ion4);

gigel.maiSuntLocuri();

console.log(taxi.isFree());