function apresentação (nome){
    return`meu nome é ${nome}`
};

// Arrow function

const apresentarArrow = nome =>`meu nome é ${nome}`;

const soma =(num1,num2) => num1 * num2;

// Arrow funcition com + 1 linha de instrução

const somaNumerosPequenos = (numero1 , numero2) =>{
    if(numero1 <10 && numero2 <10){
        return numero1 +numero2
    }else{
        return "somemente numeros de 1 a 9"
    }
}
console.log(somaNumerosPequenos(4,5))

