// chamando função prompt
const prompt = require('prompt-sync')({sigint:true});

var num = prompt(Number(console.log("Informe um número: ")));
    if(num % 2 == 0){
        console.log("O número "+ num + " é PAR!");
    }
    else{
        console.log("O número "+ num + " é ÍMPAR!");
    }