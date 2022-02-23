/*
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	let edadIngresada;

	edadIngresada= document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada >12)

	{
		if(edadIngresada <18)
		{
			alert("usted es adolescente");
		}
		
	}


}

/*
	operadores logicos
	&& 
	ej: if(edadIngresada >12 && edadIngresada <18)

		alert()

 */