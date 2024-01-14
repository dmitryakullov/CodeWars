// https://www.codewars.com/kata/5571d9fc11526780a000011a/train/javascript
// 13.07.2023

// Should be solved using a Proxy

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
    globalThis.being_the = {
      color: {
        green: { color: 'green' },
        blue: { color: 'blue' },
      },
    };

    globalThis.being_the.color.blue.__proto__ = {
      and_the: {
        shape: {
          round: {
            color: 'blue',
            shape: 'round',
          },
        },
      },
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

    this.torso = { name: 'torso' };

    Array.prototype.each = function (callback) {
      const resultArray = [];
      for (let index = 0; index < this.length; index++) {
        const callbackResult = callback(this[index]);

        if (callbackResult.color) {
          this[index].color = callbackResult.color;
          this[index].shape = callbackResult.shape;
          resultArray.push(this[index]);
        } else {
          resultArray.push(callbackResult);
        }
      }
      return resultArray;
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
}

const jane = new Thing('Jane');
console.log(jane);
