/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada=prompt("ingrese el numero clave.");

	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("error,reingrese el numero clave.");
	}
	alert("Bienvenido");
	
}//FIN DE LA FUNCIÓN
