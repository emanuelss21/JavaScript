

// VARIABLES ASIGNADA EN LA ARISMETICA.
var suma1;
var operando;
var operacion;


//OBJETO CALCULADORA Y SUS FUNCIONES.
var calculadora = {
	visor: document.getElementById("display"),
	init: (function () {
		var signo = document.getElementById('sign');
		var uno = document.getElementById('1');
		var dos = document.getElementById('2');
		var tres = document.getElementById('3');
		var cuatro = document.getElementById('4');
		var cinco = document.getElementById('5');
		var seis = document.getElementById('6');
		var siete = document.getElementById('7');
		var ocho = document.getElementById('8');
		var nueve = document.getElementById('9');
		var cero = document.getElementById('0');
		var reset = document.getElementById('on');
		var suma = document.getElementById('mas');
		var resta = document.getElementById('menos');
		var multiplicacion = document.getElementById('por');
		var divicion = document.getElementById('dividido');
		var igual = document.getElementById('igual');
		var punto = document.getElementById('punto');


			//EVENTO CLICK EN LOS ELEMENTOS DE LA CALCULADORA.
		uno.onclick=function(e){
			display3(1);
		}
		dos.onclick=function(e){
			display3(2);
		}
		tres.onclick=function(e){
			display3(3);
		}
		cuatro.onclick=function(e){
			display3(4);
		}
		cinco.onclick=function(e){
			display3(5);
		}
		seis.onclick=function(e){
			display3(6);
		}
		siete.onclick=function(e){
			display3(7);
		}
		ocho.onclick=function(e){
			display3(8);
		}
		nueve.onclick=function(e){
			display3(9);
		}
		cero.onclick=function(e){
			display3(0);
		}
		reset.onclick=function(e){
			calculadora.visor.innerHTML=0;
		}
		punto.onclick=function(e){
			display3(".");
		}
		signo.onclick=function(e){
			calculadora.visor.innerHTML = calculadora.visor.innerHTML * -1;
		}

		//FUNCION OPERACIONES SUMAR,DIVIDIR,MULTIPLICAR,RESTAR.

		suma.onclick=function(e){
			suma1 = calculadora.visor.innerHTML;
			operacion = "+";
			limpiar();
		}
		resta.onclick=function(e){
			suma1 = calculadora.visor.innerHTML;
			operacion = "-";
			limpiar();
		}
		multiplicacion.onclick=function(e){
			suma1 = calculadora.visor.innerHTML;
			operacion = "*";
			limpiar();
		}
		dividido.onclick=function(e){
			suma1 = calculadora.visor.innerHTML;
			operacion = "/";
			limpiar();
		}
		igual.onclick=function(e){
			operando = calculadora.visor.innerHTML;
			resolver();
		}

		function display3(numero) {
			if (calculadora.visor.innerHTML != "0") {
				calculadora.visor.innerHTML = calculadora.visor.innerHTML + numero;
			}else{
				calculadora.visor.innerHTML = numero;
			}
		}

		function display3(numero) {
			if (calculadora.visor.textContent.length <= 8) {
				if (calculadora.visor.innerHTML != "0") {
					calculadora.visor.innerHTML = calculadora.visor.innerHTML + numero;
				} else {
					calculadora.visor.innerHTML = numero;
				}
			}
		}
	})

}
//LLAMADO A LAS FUNCIONES DE OPERACIONES

function limpiar(){
	calculadora.visor.innerHTML= "";
}
function reset(){
	calculadora.visor.innerHTML = "";
	suma1 = 0;
	operando = 0;
	operacion = "";
}

function resolver() {
	var res = 0;
	switch(operacion){
		case "+":
			res = parseFloat(suma1) + parseFloat(operando);
			break;

		case "-":
			res = parseFloat(suma1) - parseFloat(operando);
			break;

		case "*":
			res = parseFloat(suma1) * parseFloat(operando);
			break;

		case "/":
			res = parseFloat(suma1) / parseFloat(operando);
			break;
		}
		reset();
		calculadora.visor.innerHTML = res.toString().substr(0, 8);

}
calculadora.init()