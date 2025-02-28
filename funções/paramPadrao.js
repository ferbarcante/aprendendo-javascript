// estrategia 1 para definir um valor padrão
function soma1(a,b,c)
{
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c)
{
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // estrategia mais segura
}

// com ecma 2015
function soma3(a = 1, b = 1, c = 1)
{
    return a + b + c
}

