class Thing {}
const expect = () => {};
const describe = () => {};
const it = () => {};
const beforeEach = () => {};

describe('Thing', function () {
  // describe('constructor', function () {
  //   let jane;
  //   beforeEach(function () {
  //     jane = new Thing('Jane');
  //   });
  //   it('jane = new Thing("Jane") creates a new object', function () {
  //     expect(jane).to.be.ok;
  //   });
  //   it('jane.name = "Jane"', function () {
  //     expect(jane.name).to.equal('Jane');
  //   });
  // });
  // describe('#is_a', function () {
  //   describe('jane.is_a.woman', function () {
  //     it('jane.is_a_woman should return true', function () {
  //       const jane = new Thing('Jane');
  //       jane.is_a.woman;
  //       expect(jane.is_a_woman).to.equal(true);
  //     });
  //   });
  // });
  // describe('#is_not_a', function () {
  //   describe('jane.is_not_a.man', function () {
  //     it('jane.is_a_man should return false', function () {
  //       const jane = new Thing('Jane');
  //       jane.is_not_a.man;
  //       expect(jane.is_a_man).to.equal(false);
  //     });
  //   });
  // });
  describe('#has', function () {
    describe('jane.has(2).arms', function () {
      let jane;
      beforeEach(function () {
        jane = new Thing('Jane');
        jane.has(2).arms;
      });

      it('jane.arms should be an array', function () {
        expect(Array.isArray(jane.arms)).to.equal(true);
      });

      it('jane.arms should contain two Things', function () {
        expect(jane.arms.length).to.equal(2);
        expect(jane.arms.every((arm) => arm instanceof Thing)).to.equal(true);
      });

      it('should call each Thing by its singular name ("arm")', function () {
        expect(jane.arms[0].name).to.equal('arm');
      });
    });
    describe('jane.having(2).arms', function () {
      it('works like #has', function () {
        const jane = new Thing('Jane');
        jane.having(2).arms;
        expect(jane.arms.length).to.equal(2);
        expect(jane.arms[0].name).to.equal('arm');
      });
    });

    describe('jane.has(1).head', function () {
      let jane;
      beforeEach(function () {
        jane = new Thing('Jane');
        jane.has(1).head;
      });

      it('creates a single Thing (not an array) as a property', function () {
        expect(jane.head instanceof Thing).to.equal(true);
      });

      it('jane.head.name should be "head"', function () {
        expect(jane.head.name).to.equal('head');
      });
    });

    describe('jane.has(1).head.having(2).eyes', function () {
      let jane;
      beforeEach(function () {
        jane = new Thing('Jane');
        jane.has(1).head.having(2).eyes;
      });

      it('should create 2 new things on the head', function () {
        expect(jane.head.eyes.length).to.equal(2);
        expect(jane.head.eyes.every((eye) => eye instanceof Thing)).to.equal(true);
      });

      it('should name the eye Thing "eye"', function () {
        expect(jane.head.eyes[0].name).to.equal('eye');
      });
    });
  });

  describe('#each', function () {
    describe('jane.has(2).hands.each(hand => having(5).fingers)', function () {
      it('should create 2 hands, each having 5 fingers', function () {
        const jane = new Thing('Jane');
        jane.has(2).hands.each((hand) => having(5).fingers);
        expect(jane.hands.length).to.equal(2);
        expect(jane.hands[0].fingers.length).to.equal(5);
        expect(jane.hands[1].fingers.length).to.equal(5);
        expect(jane.hands[1].fingers[0].name).to.equal('finger');
      });
    });
  });

  // describe('#is_the', function () {
  //   describe('jane.is_the.parent_of.joe', function () {
  //     it('jane.parent_of === "joe"', function () {
  //       const jane = new Thing('Jane');
  //       jane.is_the.parent_of.joe;
  //       expect(jane.parent_of).to.equal('joe');
  //     });
  //   });
  // });

  describe('#being_the', function () {
    describe('jane.has(1).head.having(2).eyes.each(eye => being_the.color.green)', function () {
      it("jane's eyes should both be green", function () {
        const jane = new Thing('Jane');
        jane
          .has(1)
          .head.having(2)
          .eyes.each((eye) => being_the.color.green);
        expect(jane.head.eyes[0].color).to.equal('green');
        expect(jane.head.eyes[1].color).to.equal('green');
      });
    });
  });

  describe('#and_the', function () {
    describe('jane.has(2).eyes.each(eye => being_the.color.blue.and_the.shape.round)', function () {
      it("jane's eyes should both be blue and round", function () {
        const jane = new Thing('Jane');
        jane
          .has(1)
          .head.having(2)
          .eyes.each((eye) => being_the.color.blue.and_the.shape.round);
        expect(jane.head.eyes[0].color).to.equal('blue');
        expect(jane.head.eyes[0].shape).to.equal('round');
      });
    });
  });

  // describe('#can', function () {
  //   describe('jane.can.speak(phrase => `${name} says: ${phrase}!`)', function () {
  //     it('should create a speak method on jane', function () {
  //       const jane = new Thing('Jane');
  //       jane.can.speak((phrase) => `${name} says: ${phrase}!`);
  //       expect(jane.speak('hello')).to.equal('Jane says: hello!');
  //     });
  //   });

  //   describe('jane.can.speak("spoke", phrase => `${name} says: ${phrase}!`)', function () {
  //     it('jane.spoke should track the results of all calls to jane.speak(...)', function () {
  //       const jane = new Thing('Jane');
  //       jane.can.speak('spoke', (phrase) => `${name} says: ${phrase}!`);
  //       jane.speak('hi');
  //       expect(jane.spoke).to.deep.equal(['Jane says: hi!']);
  //     });
  //   });
  // });
});
