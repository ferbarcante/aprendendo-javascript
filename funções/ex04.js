// armazenar função dentro de array

function fun1(){
}

const fun2 = function () {}

const array = [function(a, b) {return a+b}, fun1, fun2]
console.log(array[0](1, 3))

