/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
	let precio;
	let porcentajeDescuento;
	let precioFinalDescuento;

	precio=prompt("ingrese el precio");
	precio=parseInt(precio);

	porcentajeDescuento=prompt("ingrese porcentaje de descuento");
	porcentajeDescuento=parseInt(porcentajeDescuento);

	precioFinalDescuento= (porcentajeDescuento/100)*precio;

	document.getElementById('elPrecioFinal').value=precioFinalDescuento;
}
