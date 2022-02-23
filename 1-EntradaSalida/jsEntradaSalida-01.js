/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()


{
	let productoUno;
	let productoDos;
	let productoTres;
	let precioUno;
	let precioDos;
	let precioTres;
	let precioBruto;
	let promedioPrecios;
	let precioFinalIva;
	let iva;
	let ivaCalculado;
	let porcentajeDescuento;
	let descuento;
	let precioFinalTotal;
	let mensaje;

	iva=21;

	productoUno=prompt("ingrese el nombre del primer producto");
	precioUno=prompt ("ingrese el valor de "+ productoUno);
	precioUno=parseInt(precioUno);

	productoDos=prompt("ingrese el nombre del segundo producto");
	precioDos=prompt("ingrese el valor de " + productoDos);
	precioDos=parseInt(precioDos);

	productoTres=prompt("ingrese el nombre del tercer producto");
	precioTres=prompt("ingrese el valor de "+ productoTres);
	precioTres=parseInt(precioTres);

	porcentajeDescuento=prompt("ingrese % de descuento");
	porcentajeDescuento=parseInt(porcentajeDescuento);

	precioBruto= precioUno+precioDos+precioTres;

	promedioPrecios=precioBruto /3;

	ivaCalculado=(precioBruto/100)*iva;

	//(precioBruto/100)*21 
	precioFinalIva= precioBruto+ ivaCalculado;

	descuento= (precioFinalIva/100)*porcentajeDescuento;

	precioFinalTotal= precioFinalIva- descuento;

	mensaje="Los productos con sus precios son ";
	mensaje=mensaje+productoUno+" $"+precioUno+ " ,";
	mensaje=mensaje+productoDos+" $"+precioDos+" ,";
	mensaje=mensaje+productoTres+" $"+precioTres+" .";
	mensaje=mensaje+"El precio bruto es de $"+precioBruto;
	mensaje=mensaje+", con un promedio de precios de $"+promedioPrecios;
	mensaje=mensaje+", el precio final mas iva es $"+precioFinalIva;
	mensaje=mensaje+" y el precio final con el % descuento es de $"+precioFinalTotal;

	alert(mensaje);

}