// https://www.codewars.com/kata/5571d9fc11526780a000011a/train/javascript
// 13.07.2023

class Thing {
  name = '';
  numberOfCallsHas = 0;

  constructor(name) {
    this.name = name;

    const saveThis = this;

    globalThis.name = name;
    globalThis.having = (numbers) => {
      saveThis.fingers = [...new Array(numbers).fill(saveThis)];
      saveThis.name = 'finger';

      return saveThis;
    };

    this.is_a = { person: true, woman: true };
    this.is_a_person = this.is_a.person;
    this.is_a_woman = this.is_a.woman;
    this.is_not_a = { man: true };
    this.is_a_man = !this.is_not_a.man;

    this.is_the = { parent_of: { joe: '' } };
    this.parent_of = Object.keys(this.is_the.parent_of)[0];

    this.head = this;
    this.eyes = [this, this];
    this.arms = [this, this];
    this.legs = [this, this];

    this.hands = [this, this];
    this.hands.__proto__.each = (callBack) => callBack();

    this.torso = {
      name: 'torso',
    };

    this.can = {
      speak: (firstArgument, callMethod) => {
        const isString = typeof firstArgument === 'string';
        if (isString) {
          this[firstArgument] = [];
        }

        this.speak = (message) => {
          const result = callMethod?.(message) || firstArgument(message);

          if (isString) {
            this[firstArgument].push(result);
          }

          return result;
        };
      },
    };
  }

  #has(numbers) {
    if (numbers === 2) {
      this.name = 'arm';
    }
    if (numbers === 1) {
      this.name = 'head';
    }
  }

  having(numbers) {
    this.#has(numbers);

    if (this.numberOfCallsHas) {
      this.name = 'eye';
    }

    return this;
  }

  has(numbers) {
    this.numberOfCallsHas++;

    this.#has(numbers);

    return this;
  }
}

// class Leg extends Thing {
//   constructor() {
//     super();
//     this.name = 'leg';
//   }
// }

const jane = new Thing('Jane');

console.log(jane.has(2).hands.each((hand) => having(5).fingers));
console.log(jane.hands.length);
