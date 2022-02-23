/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 

{
	let precioUno;
	let precioDos;
	let precioTres;
	let precios;
	let suma;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precios= parseInt(precioUno)+ parseInt(precioDos)+ parseInt(precioTres);
	suma=precios;

	alert (suma);

}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let precios;
	let promedio;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precios= parseInt(precioUno)+ parseInt(precioDos)+ parseInt(precioTres);
	promedio= precios/3;

	alert (promedio);
}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let precios;
	let iva;
	let precioFinal;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precios=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres);

	iva= (precios/100)* 21;

	precioFinal=precios+iva;

	alert(precioFinal);
}