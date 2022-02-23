/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
/*{
	let importe;
	let descuento;
	let resultado;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	descuento= (25/100)* importe;

	resultado=importe - descuento;
	document.getElementById('txtIdResultado').value=resultado;

}

/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
tomar el descuento por prompt y mostrar el resultado concatenado por alert
ejemplo "su monto total es 750 y se le hizo un descuento del 25% usted ingreso 1000"
*/

{
	let importe;
	let descuento;
	let porcentaje;
	let importeTotal;
	let mensaje;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	descuento=prompt("ingrese descuento");
	descuento= parseInt(descuento);

	porcentaje= (descuento/100)* importe;
	//porcentaje=parseInt(porcentaje); no es necesario

	importeTotal= importe - porcentaje;

	//alert("su monto total es de "+ importeTotal + " se le hizo un descuento del "+ descuento + "% usted ingreso "+ importe);
	mensaje=("su monto total es de ")+ importeTotal;
	mensaje=mensaje + (" se le hizo un descuento del ")+ descuento;
	mensaje=mensaje + ("% usted ingreso ")+ importe;

	alert(mensaje);
	

}
