/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño
	let mensaje 

	mesDelAño=document.getElementById('txtIdMes').value;
	
	switch(mesDelAño)
	{
		case "Febrero":
		mensaje="tiene 28 dias";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		mensaje="tiene 30 dias";
		break;
		default:
		mensaje="tiene 31 dias";
		break;
		
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN