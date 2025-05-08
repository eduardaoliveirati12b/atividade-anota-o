// bloco de código que desempenha um papel específico que só será executado quando for chamado

/* 
EXEMPLO 1 - função simples 
function mensagem () {
alert("Seja muito bem-vindo(a)!")
console.log("Mais uma vez,seja bem-vindo(a)")
}
mensagem ()
*/

/*
EXEMPLO 2 - função com parâmetro
function somar(valor1,valor2){
alert(valor1 + valor2)
}
somar (30,40)
*/

/*
EXEMPLO 3 - parâmetros de tipos diferentes 
function mensagemPessoal(nome,cargo,anosTrabalhados) {
alert(`Seja bem-vindo (a) ${cargo} ${nome}.Estamos felizes por ter você 
trabalhando conosco há ${anosTrabalhados} anos.`)
}
mensagemPessoal ("Lucas"), "Gerente",10)
mensagemPessoal ("Irineu", "Você nao sabe,nem eu",50)
*/


/* 
EXEMPLO 4 - o return nas funções 
function somarEDevolver(numero1,numero2,numero3){
let resultado = numero1 + numero2 + numero3
return resultado 
}
// guardar numa variável ou guardar em qualquer lugar no código 
let soma1 = somarEDevolver(10,11,12)
let soma2 = somarEDevolver(30,40,50)
alert(soma1)
alert(soma2)
*/

/* 
EXEMPLO - if sem else 
function parOuImpar(numero){
if (numero % 2 === 0){
return "Par"
}
return "Ímpar"
}
let resultado1 = Par ou Ímpar (10)
let resultado2 = Par ou Ímpar (15)
alert (`O número 10 é ${resultado1}`)
alert (`O número 15 é ${resultado2}`)
*/

/*
EXEMPLO 6 - funções anônimas 
document.querySelector("button").addEventListener("Click"),
function(){
alert("Clicou no botão")
})
*/

/* 
EXEMPLO 8 - arrow functions com variáveis 
let somar = (valor1,valor2) => valor1 + valor2
let resultadoSoma = somar(20,30)
alert(resultadoSoma)
*/