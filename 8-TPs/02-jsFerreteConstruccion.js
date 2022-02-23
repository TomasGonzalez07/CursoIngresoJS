/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	let largoTerreno;
	let anchoTerreno;
	let rectanguloAlambre;
	let total;

	largoTerreno=document.getElementById('txtIdLargo').value;
	anchoTerreno=document.getElementById('txtIdAncho').value;

	largoTerreno=parseInt(largoTerreno);
	anchoTerreno=parseInt(anchoTerreno);
		
	rectanguloAlambre= largoTerreno*2 + anchoTerreno*2;

	total=rectanguloAlambre*3;

	alert(total);

}
function Circulo () 
{
	let radioTerreno;
	let pi;
	let circuloAlambre;
	let total;

	radioTerreno=document.getElementById('txtIdRadio').value;
	radioTerreno=parseInt(radioTerreno);

	pi= Math.PI;

	circuloAlambre= [pi*radioTerreno*2];
	total=circuloAlambre*3;

	alert(total);
	
}
function Materiales () 
{
	let largoTerreno;
	let anchoTerreno;
	let cemento;
	let cal;
	let mensaje;

	largoTerreno=document.getElementById('txtIdLargo').value;
	anchoTerreno=document.getElementById('txtIdAncho').value;

	largoTerreno=parseInt(largoTerreno);
	anchoTerreno=parseInt(anchoTerreno);

	cemento= largoTerreno*anchoTerreno*2;
	cal=largoTerreno*anchoTerreno*3;

	mensaje="se necesitan "+ cemento;
	mensaje=mensaje+ " bolsas de cemento y ";
	mensaje=mensaje+ cal + " bolsas de cal";

	alert(mensaje);

}