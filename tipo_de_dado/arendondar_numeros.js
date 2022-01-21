//metodo aredonda 
 ganhoPorHora(4000,60);//chamando função
    function ganhoPorHora(salario, horasTrabalhadasNoMes) {

        const salarioHora = (salario / horasTrabalhadasNoMes); 
        const valor_hora = Math.round(salarioHora);// aredonda o valor para inteiro
        console.log(valor_hora)//67
        return valor_hora
    }
    //metodo casa depois da virgula
  ganhoHora(4000,60)
    function ganhoHora(salario, horasTrabalhadasNoMes) {

        const salarioHora = (salario / horasTrabalhadasNoMes); 
    
        const total = salarioHora.toFixed(2);// esse metodo controla o valor depos da virgula que sera mostrado
        console.log(total)//66.67
        return total;
        
    
    };
     //metodo real
    salarioPorHora(4000,60)

    function salarioPorHora(salario, horasTrabalhadasNoMes) {

        const salarioHora = (salario / horasTrabalhadasNoMes); 
      
        const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        console.log(formatado)//R$ 66,67
        return formatado;
      
      }
  
 
 


  
