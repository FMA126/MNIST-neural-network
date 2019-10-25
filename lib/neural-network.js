const changePixelRange = value => {
  // white is 0, black is 255
  // we want the range to be between
  return parseFloat((value / 255).toPrecision(3));
}

const sigmoid = x => {
  return parseFloat((1 / (1 + Math.E ** -x)).toPrecision(3));
}

const error = (target, output) => {
  // squared error
  return parseFloat((1/2 * (target - output) ** 2).toPrecision(3));
}


const black = changePixelRange(255);
const grey = changePixelRange(127);
const white = changePixelRange(0);
console.log(sigmoid(black))
console.log(sigmoid(grey))
console.log(sigmoid(white))
console.log(error(1, 0.5))