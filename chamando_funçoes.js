function square(numero) {

    return numero * numero}
    

    function fatorial(n){
        if ((n == 0) || (n == 1))
          return 1;
        else
          return (n * fatorial(n - 1));
      }

      /*As variáveis definidas no interior de uma função não podem ser acessadas 
         de nenhum lugar fora da função, porque a variável está definida apenas no escopo da função. 
         No entanto, uma função pode acessar todas variáveis e funções definida fora do escopo
         onde ela está definida. Em outras palavras, a função definida no escopo global pode acessar
         todas as variáveis definidas no escopo global.
         A função definida dentro de outra função também pode acessar todas as variáveis definidas
        na função hospedeira e outras variáveis ao qual a função hospedeira tem acesso. */


// As seguintes variáveis são definidas no escopo global
var num1 = 20,
    num2 = 3,
    nome = "Chamahk";

// Esta função é definida no escopo global
function multiplica() {
  return num1 * num2;
}

multiplica(); // Retorna 60

// Um exemplo de função aninhada
function getScore () {
  var num1 = 2,
      num2 = 3;

  function add() {
    return nome + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Retorna "Chamahk scored 5"



//Uma função que chama a si mesma é chamada de função recursiva.função de loop
function loop(x) {
    if (x >= 10) // "x >= 10" a condição de parada (equivalente a "!(x < 10)")
       return;
    // faça coisas
    loop(x + 1); // chamada recursiva
 }
 loop(0);//chamando a função


// uso de pilhas:a pilha de função.O comportamento da pilha pode ser vista a seguir no exemplo: 
function foo(i) {
    if (i < 0)
       return;
    document.writeln('begin:' + i);
    foo(i - 1);
    document.writeln('end:' + i);
 }
 foo(3);//chamando a função
 //que retorna
 /*
begin:3
begin:2
begin:1
begin:0
end:0
end:1
end:2
end:3
 */

var pet = function(nome) {          // A função externa define uma variável "nome"
  var getNome = function() {
    return nome;                // A função interna tem acesso à variável "nome"  da função externa
  }

  return getNome;               // Retorna a função interna, expondo-a assim para escopos externos
},
myPet = pet("Vivie");

myPet();                            // Retorna "Vivie"

