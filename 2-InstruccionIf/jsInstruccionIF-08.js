/*
Al ingresar una edad menor a 18 años 
 un estado civil distinto a "Soltero",
  NO HACER NADA,pero si no es asi,
   y es soltero y no es menor,
    mostrar el siguiente mensaje:
    Es soltero y no es menor.
*/

function mostrar()
{
 let edadIngresada;
 let estadoCivil;

 edadIngresada=document.getElementById('txtIdEdad').value;
 edadIngresada=parseInt(edadIngresada);

 estadoCivil=document.getElementById('estadoCivil').value;

 if ( edadIngresada >= 18 && estadoCivil == "Soltero")
	{
	alert("Es soltero y no es menor");
	}


}