const calculadora = require("../models/calculadora.js");


test("A soma de 2 + 2 = 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
}); 

test("A soma de 5 + 100 = 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("'melancia' + 100 = 'ERRO'", () => {
  const resultado = calculadora.somar("melancia", 100);
  expect(resultado).toBe("ERRO")
});