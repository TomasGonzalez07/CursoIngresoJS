/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//tomo datos
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	//convierto a numeros con parse
	resultado= parseInt(numeroUno)+ parseInt(numeroDos);

	alert(resultado);
}

//txtIdNumeroUno
//txtIdNumeroDos