/* Se passarmos um objeto como parametro e a função alterar alguma
propriedade do objeto essa mudanmça será visível fora do escopo da função */

function minhaFuncao(objeto){
    objeto.make = "Toyota";
}

var meucarro = {make: "Honda", model: "Accord", year: "1998"};
var x, y;

x = meucarro.make;

minhaFuncao(meucarro);
y = meucarro.make;

/* 
Objetos em JavaScript são passados por referência, não por valor. 
Quando você passa meucarro para a função minhaFuncao, 
está passando uma referência ao objeto original (não uma cópia).
*/