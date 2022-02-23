/*
Al presionar el botón
 pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador=0;
	acumulador=0;

	numeroIngresado=prompt("ingresar un numero");
	numeroIngresado=parseInt(numeroIngresado);

	while(contador<5)
	{
		numeroIngresado=prompt("ingresar un numero");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
	}
 	
 	promedio=acumulador/contador;
 	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;
}