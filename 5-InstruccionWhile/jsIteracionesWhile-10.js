/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadNegativos;
	let cantidadPositivos;
	let cantidadCeros;
	let cantidadNumerosPares;
	let promedioNegativos;
	let promedioPositivos;
	let diferenciaPositivosNegativos;
	let mensaje;
	
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadCeros=0;
	cantidadNumerosPares=0;
	promedioNegativos=0;
	promedioPositivos=0;
	
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("ingresar un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado == 0)
		{
			cantidadCeros=cantidadCeros+1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadPositivos=cantidadPositivos+1;
			}
			else
			{
				sumaNegativos=sumaNegativos+numeroIngresado;
				cantidadNegativos=cantidadNegativos+1;
			}
		}

		if(numeroIngresado%2 == 0)
			{
				cantidadNumerosPares=cantidadNumerosPares+1;
			}

		respuesta=prompt("desea continuar?");
	}

	promedioNegativos=sumaNegativos/cantidadNegativos;
	promedioPositivos=sumaPositivos/cantidadPositivos;
	diferenciaPositivosNegativos= sumaPositivos-sumaNegativos;

	mensaje="La suma de negativos es :"+sumaNegativos;
	mensaje=mensaje+"<br>La suma de positivos es :"+sumaPositivos;
	mensaje=mensaje+"<br>La cantidad de negativos es de :"+cantidadNegativos;
	mensaje=mensaje+"<br>La cantidad de positivos es de :"+cantidadPositivos;
	mensaje=mensaje+"<br>La cantidad de ceros es de :"+cantidadCeros;
	mensaje=mensaje+"<br>La cantidad de numeros pares es de :"+cantidadNumerosPares;
	mensaje=mensaje+"<br>El promedio de los negativos es :"+promedioNegativos;
	mensaje=mensaje+"<br>El promedio de los positivos es :"+promedioPositivos;
	mensaje=mensaje+"<br>La diferencia entre negativos y positivos es de :"+diferenciaPositivosNegativos;

	document.write(mensaje);
}
