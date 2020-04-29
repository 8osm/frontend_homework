let content = document.getElementById("content");

let object2 = {
  string: "Hello World",
  number: 4,
  undefined: undefined,
  bigInt: 900719925474099,
  boolean: true,
  symbol: Symbol("hello")
};

let divisionObject = {
  a: 5,
  b: 10,
};

function divide(object) {
  let {a, b} = object;
  return a / b;
}

let {symbol, number, ...rest} = object2;

console.log(divide(divisionObject));

content.innerHTML = object2.bigInt;
