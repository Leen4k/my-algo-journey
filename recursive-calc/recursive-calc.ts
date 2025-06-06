export const recursiveCalc = (exp: string): number => {
  const tokens = exp.replace(/\s/g, "").match(/(\d+|\+|\-|\*|\/|\(|\))/g)!;
  !tokens && console.log("expression is not correct");

  let index = 0;

  function parseExpression(): number {
    let value = parseTerm();
    while (tokens[index] === "+" || tokens[index] === "-") {
      const operator = tokens[index++];
      const next = parseTerm();
      value = operator === "+" ? value + next : value - next;
    }
    return value;
  }

  function parseTerm(): number {
    let value = parseFactor();
    while (tokens[index] === "*" || tokens[index] === "/") {
      const operator = tokens[index++];
      const next = parseFactor();
      value = operator === "*" ? value * next : value / next;
    }
    return value;
  }

  function parseFactor(): number {
    const token = tokens[index++];
    if (token === "(") {
      const value = parseExpression();
      tokens[index++] === ")" || console.log("expression is not correct");
      return value;
    }
    return parseFloat(token!);
  }
  return parseExpression();
};

const test = [
  "(1 + 2) * 10 - 6 / (9 * (2 + 1))",
  "1 + 2 * 3",
  "1 + 2 * 3 + 4",
  "2 - 2",
];
test.forEach((exp) => {
  console.log(recursiveCalc(exp));
});
