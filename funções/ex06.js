// uma função pode retonar/receber outra função

function soma(a, b){
    return function(c)
    {
        console.log(a+b+c);
    }
}

soma(2,3)(1)