function sum(a, b) {
  if (typeof a !== 'Number' || typeof b !== 'Number') {
    throw new TypeError();
  }

  return a + b;
}

module.exports = sum;
