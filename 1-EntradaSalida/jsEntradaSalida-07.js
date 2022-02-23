/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
//var numeroUno;
//var numeroDos;
{	
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	resultado= parseInt(numeroUno)+ parseInt(numeroDos);

	alert("la suma es "+ resultado);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	resultado= parseInt(numeroUno) - parseInt(numeroDos);

	alert("la resta es " + resultado);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	resultado= parseInt(numeroUno) * parseInt(numeroDos);

	alert("la multiplicación es " + resultado);
	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	resultado= parseInt(numeroUno) / parseInt(numeroDos);

	alert("la división es " + resultado);
	
}

