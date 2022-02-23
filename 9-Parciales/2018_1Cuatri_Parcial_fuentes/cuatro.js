/*
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/

function mostrar()
{
	let numeroUnoIngresado;
	let numeroDosIngresado;
	let resultado;
	let mensaje;

	numeroUnoIngresado=prompt("ingrese un numero");
	numeroUnoIngresado=parseInt(numeroUnoIngresado);

	numeroDosIngresado=prompt("ingrese un numero");
	numeroDosIngresado=parseInt(numeroDosIngresado);

	if(numeroUnoIngresado==numeroDosIngresado)
	{
		resultado=numeroUnoIngresado+numeroDosIngresado;
	}
	else
	{
		if(numeroUnoIngresado>numeroDosIngresado)
		{
			resultado=numeroUnoIngresado-numeroDosIngresado;
		}
		else
		{
			resultado=numeroUnoIngresado+numeroDosIngresado;

			if(resultado>10)
			{
				mensaje="la suma es "+ resultado+" y supero el 10";
				alert(mensaje);
			}
		}
	}

	alert(resultado);

}
