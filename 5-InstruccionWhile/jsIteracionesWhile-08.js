/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("ingresar un numero");
		numeroIngresado=parseInt(numeroIngresado);

		contador=contador+1;

		if (numeroIngresado<0)
		{	
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}
		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}

		respuesta=prompt("desea continuar");
	}

	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}