/*
Al ingresar una edad menor a 18 años 
y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje:
 'Es muy pequeño para NO ser soltero.'

*/

function mostrar()
/*{
	let edadIngresada;
	let estadoCivil;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivil=document.getElementById('estadoCivil').value;

	if (edadIngresada < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para no ser soltero");
	}
	


}
*/

//FIN DE LA FUNCIÓN != distinto 




//07 bis v1
{
	let edadIngresada;
	let mensaje;
	let nombreIngresado;
	let estadoCivil;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);
	estadoCivil=document.getElementById('estadoCivil').value;

	nombreIngresado=prompt("ingrese su nombre");

	if(edadIngresada<13)
	{
		mensaje= "feliz dia";

		if(nombreIngresado=="ricardo")
		{
			mensaje=" muy chiquito para ese nombre, "+mensaje;
		}
	}
	else
	{
		if(edadIngresada<18)
		{
			mensaje="usted es adolescente, toda una vida por delante";

			if(edadIngresada==17)
			{
				mensaje=mensaje+", ultimo año!!!";
			}
			if(nombreIngresado=="violeta")
			{
				mensaje=" como el color!!!,"+ mensaje;
			}
		}
		else
		{
			mensaje="tienes edad para laburar";

			if(estadoCivil=="Soltero" && edadIngresada<60)
			{
				mensaje=mensaje+ ", a salir";
			}
			if(edadIngresada==33)
			{
				mensaje=mensaje+" como Cristo";
			}
			else
			{
				if(edadIngresada>60)
				{
					mensaje="a jubilarse";

					if(nombreIngresado== "alfredo")
					{
						mensaje=" como el de QUEEN, "+mensaje;
					}

					if(edadIngresada==88)
					{
						mensaje=mensaje+" lindo numero";
					}
				}
			}
		}
			
		if(estadoCivil=="Casado")
		{
			mensaje=mensaje+ ", casado quiere casa";
		}

		if(estadoCivil=="Divorciado")
		{
			mensaje=mensaje+ ", toda una vida por delante";
		}			
	}

	if(edadIngresada%2 == 0)
	{
		mensaje=mensaje+" y sos par!!!";
	}

	alert(nombreIngresado +","+ mensaje);
}