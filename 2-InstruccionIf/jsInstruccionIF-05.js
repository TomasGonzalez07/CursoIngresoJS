/*
	Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	let edadIngresada;

	edadIngresada= document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada <13  || edadIngresada >17)
	 // || es or
	// if (!(edadIngresada>12 && edadIngresada<17))
	{
		alert("usted no es adolescente");
	}


}

/* operadores aritmeticos + - / * % 
operadores de relaciones == <> <= >= !=
logicos && || ! 