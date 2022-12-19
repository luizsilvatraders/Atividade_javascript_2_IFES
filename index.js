const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

var salarioMinimo = 1212;
var salarioTeto = 7087.22;
// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if((idade >= 65) || (tempo >= 30) || (idade >= 60 && tempo >= 25)) {
    console.log("Você pode se aposentar!");
// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
    if(tempo > 20){
        salario = salario * 0.8;
    }else if(tempo <= 20){
        salario = salario * 0.6;
    }
//Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
    if(salario <= salarioMinimo){
        salario = salarioMinimo;
    } else if(salario >= salarioTeto) {
        salario =  salarioTeto;
    } else {
       salario = salario;
    }
    console.log("Seu salário de aposentadoria é : " + salario);
} else {
    console.log("você não pode se aposentar!");
}
