/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
/*{
	let importe;
	let aumento;
	let resultado;

	importe=document.getElementById('txtIdSueldo').value;
	importe=parseInt(importe);

	aumento= (10/100)* importe;

	resultado= importe + aumento;
	document.getElementById('txtIdResultado').value=resultado;

}*/

{
	let importe;
	let aumento;
	let porcentaje;
	let resultado;
	let mensaje;

	importe=document.getElementById('txtIdSueldo').value;
	importe=parseInt(importe);

	aumento=prompt("ingrese el aumento");
	aumento=parseInt(aumento);

	porcentaje= (aumento/100)* importe;
	//porcentaje=parseInt(porcentaje); no es necesario

	resultado= importe + porcentaje;
	
	//alert("su monto total es de "+ resultado + " se le hizo un aumento del "+ aumento + "% usted ingreso "+ importe);
	mensaje=("su monto total es de ")+ resultado;
	mensaje=mensaje + (" se le hizo un aumento del ")+ aumento;
	mensaje=mensaje + ("% usted ingreso ")+ importe;

	alert(mensaje);

}