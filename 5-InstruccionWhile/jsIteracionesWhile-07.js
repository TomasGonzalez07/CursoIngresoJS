/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

function mostrar()

{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador=0;
	acumulador=0;
	respuesta="si";

	numeroIngresado=prompt("ingresar un numero");
	numeroIngresado=parseInt(numeroIngresado);

	while(respuesta=="si")
	{
		numeroIngresado=prompt("ingresar un numero");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;
		contador=contador+1;

		respuesta=prompt("quieres continuar?");
	}
 	
 	promedio=acumulador/contador;
 	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;
}

*/

function mostrar()
{

	let alturaIngresada;
	let edadIngresada;
	let temperaturaIngresada;
	let generoIngresado;
	let notaIngresada;
	let nombreIngresado;
	//let respuesta;
	let contador;

	contador=0;

	while(contador<5)
	{
		contador=contador+1;

		nombreIngresado=prompt("ingrese el nombre");

		alturaIngresada=prompt("ingrese la altura en cm");
		alturaIngresada=parseInt(alturaIngresada);
		while(alturaIngresada<0 || alturaIngresada>250)
		{	
			alturaIngresada=prompt("ERROR, reingrese la altura");
		}

		edadIngresada=prompt("ingrese la edad");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<17)
		{
			edadIngresada=prompt("ERROR, reingrese la edad");
		}

		temperaturaIngresada=prompt("ingrese la temperatura");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(temperaturaIngresada<35 || temperaturaIngresada>42)
		{
			temperaturaIngresada=prompt("ERROR, reingrese la temperatura");
		}

		generoIngresado=prompt("ingrese el genero(f o m o nb)");
		while(generoIngresado!= "f" && generoIngresado!= "m" && generoIngresado!="nb")
		{
			generoIngresado=prompt("ERROR, reingrese el genero");
		}

		notaIngresada=prompt("ingrese la nota");
		notaIngresada=parseInt(notaIngresada);
		while(notaIngresada<1 || notaIngresada>10)
		{
			notaIngresada=prompt("ERROR, reingrese la nota");
		}
	}


}

