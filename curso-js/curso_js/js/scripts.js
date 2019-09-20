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
// */

// function calcImc(peso, altura){
//     resultado = peso / (altura * altura);
//     return resultado;
// }  


// var peso = document.getElementById("peso").innerHTML;
// var altura = document.getElementById("altura").innerHTML;

// var imc =  document.getElementById("imc").innerHTML =calcImc(peso,altura);

// console.log(imc);
// console.log(peso)
// // console.log(altura);


// // var alunos = ['Luis','Felipe','Carlos'];

// // var num_primos = ['2','3','5','7','11'];


// // var grupos = [
// //     ['batista','vinicius','carlao'],
// //     ['luis','andre','marcelo'],
// //     ['bianca','lieidi','lucas']
// // ];

// // console.log(alunos.length);
// // console.log(grupos[0][1]);
// // console.log(num_primos[0]);


// // var cursos = ['html','python','php']

// // cursos.push('JavaScript');
// // cursos.unshift('Bootstrap');
// // cursos.pop();
// // //cursos.shift();

// // console.log(cursos);
// // var ingredientes = ['pão queijo','queijo','presunto'];
// // ingredientes[0]='pão integral';

// // console.log(ingredientes);

// // alunos = ['vinicius','batista','carlao','tiago'];

// // console.log(alunos.slice(0,3));


// var funcionario = {
//     'nome': "luis",
//     'ano_nac': 1999,
//     'cpf':  '48271623877',
//     'cargo': 'analista de sistemas',
//     'Skills': ['PHP','SQL','JavaScript']
// };

// funcionario.cargo = 'Anal  de TI';
// console.log(funcionario.nome+" cpf : "+funcionario.cpf+" "+funcionario.cargo);

// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }

// ];

// console.log(cursos[1]['titulo']+" - "+cursos[1].categorias[0]);

// cursos[2].categorias[1]='administração de empresas';

// console.log(cursos[2].categorias[1]);



var aluno ={ 
    'nome' : 'Luis Felipe',
    'sobrenome': 'Silva Mendes',
    'ano_nasc': 1999,
    'nomecompleto': function (){ 
        var nome_completo = this.nome+' '+this.sobrenome;
        return nome_completo;
    },
    'idadeAluno': function(){ 
        var idade = 2019 - this.ano_nasc;
        return idade;
    }
};


console.log(aluno.nomecompleto()+' idade : '+aluno.idadeAluno());


var alunos = {
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'nome_completo': function () {
        var nomeCompleto = this.nome + ' ' + this.sobrenome;
        return nomeCompleto;
    }
};

console.log(alunos.nome_completo());


console.log(typeof document.querySelector('#tudo_obj').innerHTML);