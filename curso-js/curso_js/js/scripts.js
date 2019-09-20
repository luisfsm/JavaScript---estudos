// var nome = "Luis";
// var sobrenome = 'Felipe';
// var email  = 'luisfelipe@joge.com.br';


// console.log(nome+" "+sobrenome);

// console.log(nome.length);


// var num1 = 10
// var num2 = 2

// var media = (num1 + num2)/2;
// var soma = num1 + num2;
// var subtrair = num1 - num2;
// var multi = num1 * num2;
// var dividir = num1 / num2;


// console.log("Sua média é :"+media);

// console.log(Math.round(7.43));

// console.log(Math.pow(7,2));


// var ddd = 21;
// var numero = 948415442;

// var ddd_string = ddd.toString();
// var telefone_string = numero.toString();

// console.log(typeof(telefone_string));


// var verdadeiro  = 65 < 60;

// console.log(verdadeiro);
//variavel não definida 
// var number;
// console.log(number);

// var temperatura  = 35
// console.log(temperatura);

// temperatura = null
// console.log(temperatura);



/*
var caixa_azul = document.getElementById("caixa_azul").innerHTML = "<h1> Lucas o Canalha </h1>";

var caixa_amarela = document.getElementById("caixa_amarela").innerHTML = "Dedé o Canalinha";


function soma(){
    var a , b 

    a = 1
    b = 4
    
    console.log(a+b);
}   

console.log(soma());

function soma_args(a, b){
    var resultado = a + b
    console.log(resultado);
}

soma_args(5,2);
*/

function calcImc(peso, altura){
    resultado = peso / (altura * altura);
    return resultado;
}  


var peso = document.getElementById("peso").innerHTML;
var altura = document.getElementById("altura").innerHTML;

var imc =  document.getElementById("imc").innerHTML =calcImc(peso,altura);

console.log(imc);
console.log(peso)
console.log(altura);


