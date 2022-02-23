/*
	Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/


function mostrar()
{
	let contador;
	let tipo;
	let precioIngresado;
	let cantidadUnidades;
	let cantidadBarbijos;
	let cantidadJabon;
	let cantidadAlcohol;
	let marcaIngresada;
	let fabricanteIngresado;
	let fabricanteMenor;
	let cantidadBarato;
	let banderaAlcohol;
	let precioBarbijo;
	let precioJabon;
	let precioAlcohol;
	let precioMinimoAlcohol;
	let precioCompraMayor;
	let promedioCompraMayorUnidad;
	let mensaje;

	contador=0;
	cantidadUnidades=0;
	cantidadBarbijos=0;
	cantidadAlcohol=0;
	cantidadJabon=0;
	precioBarbijo=0;
	precioJabon=0;
	precioAlcohol=0;


	banderaAlcohol="es la uno";

	while(contador<5)
	{
		tipo=prompt("ingrese nombre del tipo de prevencion(barbijo,alcohol o jabon)");
		while(tipo != "barbijo" && tipo !="alcohol" && tipo != "jabon")
		{
			tipo=prompt("ERROR, reingrese el nombre del producto");
		}

		precioIngresado=prompt("ingrese el precio del producto");
		precioIngresado=parseInt(precioIngresado);
		while (precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("ERROR, reingrese el precio del producto");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadUnidades=prompt("ingrese cantidad de unidades");
		cantidadUnidades=parseInt(cantidadUnidades);
		while (cantidadUnidades<0 || cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("ERROR, reingrese la cantidad de unidades");
			cantidadUnidades=parseInt(cantidadUnidades);
		}

		marcaIngresada=prompt("ingrese la marca del producto");
		fabricanteIngresado=prompt("ingrese el fabricante del producto");

		if(tipo=="barbijo")
		{
			cantidadBarbijos=cantidadBarbijos+cantidadUnidades;
			precioBarbijo=precioIngresado*cantidadUnidades;

		}
		else
		{
			if(tipo=="jabon")
			{
				cantidadJabon=cantidadJabon+cantidadUnidades;
				precioJabon=precioIngresado*cantidadUnidades;
			}
			else
			{
				cantidadAlcohol=cantidadAlcohol+cantidadUnidades;
				precioAlcohol=precioIngresado*cantidadUnidades;

				if( banderaAlcohol=="es la uno")
				{
					banderaAlcohol="...";
					precioMinimoAlcohol=precioIngresado;
					fabricanteMenor=fabricanteIngresado;
					cantidadBarato=cantidadAlcohol;
				}
				else
				{
					precioMinimoAlcohol=precioIngresado;
					fabricanteMenor=fabricanteIngresado;
					cantidadBarato=cantidadAlcohol;
				}
			}
		}	
		
		contador=contador+1;
	}

	if(cantidadBarbijos>cantidadJabon && cantidadBarbijos>cantidadAlcohol) 
		{
			
			cantidadMayorUnidad=cantidadBarbijos;
			precioCompraMayor=precioBarbijo;
		}   
		else
		{
			if(cantidadJabon>cantidadAlcohol)
			{
				cantidadMayorUnidad=cantidadJabon;
				precioCompraMayor=precioJabon;
			}
			else
			{
				cantidadMayorUnidad=cantidadAlcohol;
				precioCompraMayor=precioAlcohol;	
			}
		}

	promedioCompraMayorUnidad= precioCompraMayor/cantidadMayorUnidad;

	
		mensaje="el alcohol mas barato es de $"+precioMinimoAlcohol;
		mensaje=mensaje+",la cantidad de unidades es de "+ cantidadBarato;
		mensaje=mensaje+" y el fabricante es "+fabricanteMenor;
		mensaje=mensaje+".El promedio de compra de la mayor cantidad de unidades es de "+promedioCompraMayorUnidad;
		mensaje=mensaje+ ".La cantidad de unidades de jabon son:"+cantidadJabon;


		document.write(mensaje);

}
