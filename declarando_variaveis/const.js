const forma='triangolo'
const altura=5;
const comprimento=7;
//const area= ; aqui da um erro pois uma constante não pode inicializar sem valor
let area;

if(forma === 'quadrado'){
    area = altura*comprimento
}
else{
    area= (altura * comprimento )/2
}
console.log(area)