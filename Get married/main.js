class Om {
  constructor(name, numeFamilie, sex, meserie) {
    this.name = name;
    this.numeFamilie = numeFamilie ? numeFamilie : '';
    this.sex = sex;
    this.meserie = meserie ? meserie : 'anonim';
  }
}

class Popa extends Om {
  constructor(name) {
    super(name, '', 'M', 'popa');
  }

  casatoreste(om1, om2) {
    if (this.suntCasatoribili(om1, om2)) {
      let familie = new Familie([om1, om2]);
      console.log('S-a casatorit ' + familie)
    } else {
      console.log('Error');
    }
  }

  suntCasatoribili = (om1, om2) => om1.sex !== om2.sex;
}

class Familie {
  constructor(membrii) {
    this.membrii = membrii;
  }

  get nume() {
    let barbat = this.membrii.filter((membru) => membru.sex == 'M');
    if (barbat.length) {
      return barbat[0].numeFamilie;
    } else {
      console.error('familie fara tata!');
    }
  }

  toString() {
    return `Familia ${this.nume}`;
  }
}

let ion = new Popa('Ion');
let gigel = new Om('Gigel', 'Pix', 'M');
let maria = new Om('Maria', 'Eva', 'F');

ion.casatoreste(gigel, maria);

