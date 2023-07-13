// https://www.codewars.com/kata/5571d9fc11526780a000011a/train/javascript
// 13.07.2023

class Thing {
  name = '';

  constructor(name) {
    this.name = name;

    const saveThis = this;

    globalThis.name = name;
    globalThis.having = (numbers) => {
      const fingersThis = Object.create(saveThis);
      fingersThis.name = 'finger';

      saveThis.fingers = [...new Array(numbers).fill(fingersThis)];

      return saveThis;
    };

    this.having = () => this;
    this.has = () => this;

    this.is_a = { person: true, woman: true };
    this.is_a_person = this.is_a.person;
    this.is_a_woman = this.is_a.woman;
    this.is_not_a = { man: true };
    this.is_a_man = !this.is_not_a.man;

    this.is_the = { parent_of: { joe: '' } };
    this.parent_of = Object.keys(this.is_the.parent_of)[0];

    const headThis = Object.create(this);
    headThis.name = 'head';
    this.head = headThis;

    const armThis = Object.create(this);
    armThis.name = 'arm';
    this.arms = [armThis, armThis];

    const eyeThis = Object.create(this);
    eyeThis.name = 'eye';
    this.eyes = [eyeThis, eyeThis];

    this.legs = [this, this];

    this.hands = [this, this];
    this.hands.__proto__.each = (callBack) => callBack();

    this.torso = { name: 'torso' };

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
