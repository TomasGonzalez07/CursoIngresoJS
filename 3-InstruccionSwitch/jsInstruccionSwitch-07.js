/*
Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra
 Norte, Sur, Este u Oeste
*/


function mostrar()
{
	let destinoIngresado 
	let mensaje

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		mensaje="se encuentra en el Oeste";
		break;
		case "Cataratas":
		mensaje="se encuentra en el Norte";
		break;
		case "Mar del plata":
		mensaje="se encuentra en el Este";
		break;
		case "Ushuaia":
		mensaje="se encuentra en el Sur";
		break;

	}


	alert(mensaje);

}//FIN DE LA FUNCIÓN