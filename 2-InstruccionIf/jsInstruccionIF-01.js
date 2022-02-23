/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

*/

function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	//tomo la edad  
	 edadIngresada = parseInt(edadIngresada);

	if(edadIngresada == 15) // ==comparacion por igual
	{
		alert("niña bonita");

	}
	

}//FIN DE LA FUNCIÓN if(condicion) verdadero o falso