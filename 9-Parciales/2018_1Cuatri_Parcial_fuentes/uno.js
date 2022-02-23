/*
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
	let largoTerreno;
	let anchoTerreno;
	let rectangulo
	let total;

	largoTerreno=prompt("ingrese el largo del terreno");
	largoTerreno=parseInt(largoTerreno);
	anchoTerreno=prompt("ingrese el ancho del terreno");
	anchoTerreno=parseInt(anchoTerreno);
		
	rectangulo= largoTerreno*2 + anchoTerreno*2;

	alert(rectangulo);
}
