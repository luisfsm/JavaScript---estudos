/*
Resolva o cálculo abaixo e mostre o resultado 
na caixa reservada para isto. Os ids das caixas são "num_1", "num_2" e "resultado". Para que o resultado saia em negrito, coloque-o dentro da tag <strong>.
*/

var num1 =parseFloat(document.getElementById('num_1').innerHTML);
var num2 = parseFloat(document.getElementById('num_2').innerHTML);
var resultado = document.getElementById('resultado').innerHTML = '<strong>' + (num1 + num2) + '</strong>' ;

/*

2) Crie uma função para converter graus Celsius para Fahrenheit, depois invoque a função usando o valor que está na caixa azul e solte o resultado na caixa amarela. Os ids são "caixa_azul" e "caixa_amarela".

A formula de conversão é: F = (9 * C / 5) + 32

*/


function convertGraus(Celsius){ 
        resultado  = Celsius * 1.8 + 32
        return resultado;
}

var Celsius =  document.getElementById('caixa_azul').innerHTML;

document.getElementById('caixa_amarela').innerHTML = convertGraus(Celsius);
/*
3) Forme um novo array composto pelos 2 últimos elementos do array abaixo. 
Em seguida adicione ao final do novo array mais um grupo composto pelos alunos "Mariana", "Felipe" e "Carla".
*/

var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio"],
    ["Carolina", "Helena", "Marcelo"]
]; 

grupos.push(grupos.slice(-2,));
grupos.push(['Mariana','Felipe','Marcelo']);


console.log(grupos);

/*
4) Considere o objeto abaixo:

a) A categoria principal do curso é o primeiro elemento da lista associada à chave 'categoria'. 
Solte esta categoria abaixo, no span que tem id "categoria_principal"

Categoria principal do curso: solte a categoria aqui

b) As propriedades n_aval... representam a quantidade de avaliações do curso, de 1 até 5 estrelas. 
Crie dois métodos: um para retornar o total de avaliações do curso e um para retornar a média de estrelas
 que tem o curso (exemplo: 4.5). Depois utilize-os para soltar estas informações nas caixas abaixo, que tem os ids "total_aval" e "media_aval".

*/
var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total': function(){ 
            var total = this.n_aval_1_estrela+this.n_aval_2_estrelas
                        +this.n_aval_3_estrelas+this.n_aval_4_estrelas+this.n_aval_5_estrelas;
            return total;
    },
    'media': function(){
        var media = ((this.n_aval_1_estrela * 1 )+ (this.n_aval_2_estrelas*2)
            + (this.n_aval_3_estrelas * 3)+ (this.n_aval_4_estrelas *4)+ (this.n_aval_5_estrelas * 5)) / 5 .toFixed(2);
            return media;
    } 
}
/* a) */ 

document.getElementById('categoria_principal').innerHTML=curso['categoria'][0];

/* b ) */

document.getElementById('total_aval').innerHTML = curso.total();
document.getElementById('media_aval').innerHTML = curso.media();



var pessoa = { 
    'nome' : 'Luis Felipe',
    'sobrenome': 'Silva Mendes',
    'email': 'luisfelipe@joge.com.br',
    'hmtl': function(){ 
        return '<div class="tableBox">'+
                    '<table>'+
                        '<tr>'+
                            '<th> Nome Completo </th>'+
                            '<th> Email </th>'+
                        '</tr>'+
                        '<tr>'+
                            '<th>'+this.nome+' '+this.sobrenome+'</th>'+
                            '<th>'+this.email+'</th>'+
                        '</tr>'+
                    '</table>'+
                '</div>';
    }
};

document.getElementById('tabela').innerHTML = pessoa.hmtl();