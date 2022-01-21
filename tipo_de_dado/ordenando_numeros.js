var lista = [10,1, 5, 9, 8, 12, 15];
//function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
lista.sort(comparaNumeros);// [1, 5, 8, 9, 10, 12, 15]
// dois exemplos de ordenação uma usando função e outro matematica

lista.sort((a, b) => a - b);// [1, 5, 8, 9, 10, 12, 15]
console.log(lista)