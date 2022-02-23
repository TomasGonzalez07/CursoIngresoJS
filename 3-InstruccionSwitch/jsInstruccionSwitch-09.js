/*
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año 
y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% 
cataratas  y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas 
y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let cobro;
	let aumento;
	let porcentajeAumento;
	let descuento;
	let porcentajeDescuento;
	let cobroFinal;
	let mensaje;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;
	
	cobro= 15000;
	

	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destinoIngresado)
		{
			case "Bariloche":
			porcentajeAumento=20;
			break;
			case "Cordoba":
			case "Cataratas":
			porcentajeDescuento=10;
			break;
			case "Mar del plata":
			porcentajeDescuento=20;
			
		}
		break;

		case "Verano":
		switch(destinoIngresado)
		{
			case "Bariloche":
			porcentajeDescuento=20;
			break;
			case "Cordoba":
			case "Cataratas":
			porcentajeAumento=10;
			break;
			case "Mar del plata":
			porcentajeAumento=20;
			break;

		}
		break;

		case "Otoño":
		case "Primavera":
		switch(destinoIngresado)
		{
			case "Bariloche":
			porcentajeAumento=10;
			break;
			case "Cataratas":
			porcentajeAumento=10;
			break;
			case "Mar del plata":
			porcentajeAumento=10;
			break;
			case "Cordoba":
			porcentajeAumento=0;
			break;

		}
		break;

	}


	aumento=(cobro/100)*porcentajeAumento;
	descuento=(cobro/100)*porcentajeDescuento;
	cobroFinal=cobro + aumento || cobro - descuento;
		
	mensaje= "el precio final de su viaje es de "+ cobroFinal;

	alert(mensaje);

}//FIN DE LA FUNCIÓN