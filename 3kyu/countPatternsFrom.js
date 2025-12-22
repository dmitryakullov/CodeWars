// https://www.codewars.com/kata/585894545a8a07255e0002f1/train/javascript
// 22.12.2025

const possibleSteps = {
  E: [['A'], ['B'], ['C'], ['D'], ['F'], ['G'], ['H'], ['I']],

  A: [['B'], ['E'], ['D'], ['F'], ['H'], ['C', 'B'], ['G', 'D'], ['I', 'E']],
  C: [['B'], ['E'], ['F'], ['D'], ['H'], ['A', 'B'], ['G', 'E'], ['I', 'F']],
  G: [['D'], ['E'], ['H'], ['B'], ['F'], ['A', 'D'], ['C', 'E'], ['I', 'H']],
  I: [['F'], ['E'], ['H'], ['B'], ['D'], ['A', 'E'], ['C', 'F'], ['G', 'H']],

  B: [['A'], ['E'], ['C'], ['D'], ['F'], ['G'], ['I'], ['H', 'E']],
  D: [['A'], ['E'], ['G'], ['B'], ['H'], ['C'], ['I'], ['F', 'E']],
  F: [['I'], ['E'], ['C'], ['B'], ['H'], ['G'], ['A'], ['D', 'E']],
  H: [['G'], ['E'], ['I'], ['D'], ['F'], ['A'], ['C'], ['B', 'E']],
};

function countPatternsFrom(initPosition, length) {
  if (length === 0 || length > 9) return 0;
  if (length === 1) return 1;

  let possibleVariants = 0;

  const counter = (data) => {
    const stack = [data];

    while (stack.length > 0) {
      const stepSequence = stack.pop();

      if (stepSequence.length === length) {
        possibleVariants++;

        continue;
      }

      possibleSteps[stepSequence[stepSequence.length - 1]].forEach(([nexStep, dependsOn]) => {
        let shouldSkipIfStepTouched = false;
        let shouldSkipIfNoDependency = !!dependsOn;

        stepSequence.forEach((step) => {
          if (shouldSkipIfStepTouched) return;
          if (step === nexStep) {
            shouldSkipIfStepTouched = true;
            return;
          }
          if (shouldSkipIfNoDependency && step === dependsOn) {
            shouldSkipIfNoDependency = false;
          }
        });

        if (shouldSkipIfStepTouched || shouldSkipIfNoDependency) return;

        stack.push([...stepSequence, nexStep]);
      });
    }
  };

  counter([initPosition]);

  return possibleVariants;
}

console.log(countPatternsFrom('E', 9));

// A  B  C
// D  E  F
// G  H  I
