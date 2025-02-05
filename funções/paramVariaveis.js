function soma()
{
    //não é só pq n tem parametros definidos que não podemos passar parametros
    let soma = 0
    for (i in arguments)
    {
        soma += arguments[i]
        // Dentro da função, o objeto arguments é usado para acessar todos os valores passados.
    }

    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 3))