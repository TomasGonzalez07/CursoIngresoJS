/*
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{

	let EdadIngresada;

	EdadIngresada=document.getElementById("txtIdEdad").value;
	EdadIngresada=parseInt(EdadIngresada);

	if(EdadIngresada >= 18) // >17 

	{
		alert("usted es mayor de edad");

	} 
	

}//FIN DE LA FUNCIÓN