let x=""
console.log(x);
x="oi";

function imprimeTexto(texto){
    console.log(texto);
}
imprimeTexto(soma())

function soma (){
    return 2*2
}
//console.log(soma())
function calculos(num1,num2){
   
    return num1 + num2
}
console.log(calculos(5,9))

function nomeIdade(nome,idade){
    return `meu nome é ${nome} e tenho ${idade} de idade`
}
console.log(nomeIdade("natan", 21))

function multiplica(n1,n2){
    return n1 * n2;
}
console.log(multiplica(calculos(0,2) , calculos(3,4)))