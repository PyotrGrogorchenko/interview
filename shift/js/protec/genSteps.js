function genSteps() {
  const steps = [];
  for (let j = 0; j < 5; j++) {
    const step = () => {
      console.log(j);
    };
    steps.push(step);
  }
  return steps;
}
  
const countSteps = genSteps();
countSteps.forEach(fn => fn());
