export const capitaliseFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const reverseString = (string) => {
  return string.split("").reverse().join("");
};

export const add = (a, b) => {
  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const divide = (a, b) => {
  return a / b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const caesarCipher = (string, shifter) => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const inputStr = string.split("");

  const processedInputStr = inputStr.reduce((acc, curr) => {
    if (!/^[A-Za-z]+$/.test(curr)) {
      return [...acc, { isChar: true, value: curr }];
    }

    if (alphabet.findIndex((str) => str === curr) + shifter > 25) {
      return [...acc, { index: (alphabet.findIndex((str) => str === curr.toLowerCase()) + shifter) % 26, isUpper: curr === curr.toUpperCase() }];
    }

    return [...acc, { index: alphabet.findIndex((str) => str === curr.toLowerCase()) + shifter, isUpper: curr === curr.toUpperCase() }];
  }, []);

  const output = processedInputStr.map((input) => {
    if (input.isChar) {
      return input.value;
    }
    if (input.isUpper) {
      return alphabet[input.index].toUpperCase();
    }

    return alphabet[input.index];
  });

  return output.join("");
};
