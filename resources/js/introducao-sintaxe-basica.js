// Hello world da massa
var mensagem = "Olá mundo!";
// alert(mensagem);
console.log(mensagem);

//Declaração de variáveis
var a = 2;
var b = 3;

console.log("A = "+ a + "; B = "+b);

//Aritmética
var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;
var resto = a%b;

console.log("Soma: "+soma);
console.log("Subtração: "+sub);
console.log("Multiplicação: "+mult);
console.log("Divisão: "+div);
console.log("Resto: "+resto);

//Condicionais
if(b%2 == 1){
	console.log("B é número ímpar");
} else if(b%2 == 1){
	console.log("B é número par");
} else{
	console.log("Valor inválido, deve ser um número");
}

//Laços
var i = 0;
while(i < 3){
	console.log(i);
	i = i + 1;
}

for(var j = 0; j <3; j++){
	console.log(j);
}

//Tipos de dados
var int = 6;
var float = 4.5;
var string = "Olá mundo";
var lista = ["laranja", "maçã", "banana", 1234];
console.log(lista);

for(i in lista){
	console.log(lista[i]);
}