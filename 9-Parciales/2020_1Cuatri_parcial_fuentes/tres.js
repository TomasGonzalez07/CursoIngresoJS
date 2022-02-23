/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.x
b) Cuantos mayores de edad estan viudosx
c) La cantidad de hombres que hay solteros o viudos.x
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura.x
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	let edadIngresada;
	let temperaturaIngresada;
	let generoIngresado;
	let nombreIngresado;
	let estadoCivil;
	let respuesta;
	let contador;
	let banderaTemperatura;
	let temperaturaMaxima;
	let nombreMaximaTemperatura;
	let acumuladorViudos;
	let acumuladorSolteros;
	let acumuladorHombresViudos;
	let acumuladorPersonasTemperaturaAlta;
	let acumuladorEdadSolteros;
	let cantidadHombresSolteros;
	let promedioEdadHombresSolteros;
	let mensaje;

	respuesta="si";
	banderaTemperatura="mas alta";
	acumuladorViudos=0;
	acumuladorSolteros=0;
	acumuladorHombresViudos=0;
	acumuladorPersonasTemperaturaAlta=0;
	acumuladorEdadSolteros=0;
	cantidadHombresSolteros=0;

	while(respuesta=="si")
	{	
		nombreIngresado=prompt("ingrese el nombre");

		edadIngresada=prompt("ingrese la edad");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<0 || edadIngresada>100)
		{
			edadIngresada=prompt("ERROR, reingrese la edad");
		}

		generoIngresado=prompt("ingrese el genero(f o m o nb)");
		while(generoIngresado!= "f" && generoIngresado!= "m" && generoIngresado!="nb")
		{
			generoIngresado=prompt("ERROR, reingrese el genero");
		}

		estadoCivil=prompt("ingrese el estadoCivil(soltero, casado o viudo)");
		while(estadoCivil!= "soltero" && estadoCivil!= "casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("ERROR, reingrese el estadoCivil");
		}

		temperaturaIngresada=prompt("ingrese la temperatura");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(temperaturaIngresada<35 || temperaturaIngresada>42)
		{
			temperaturaIngresada=prompt("ERROR, reingrese la temperatura");
		}

		if(banderaTemperatura=="mas alta")
		{
			banderaTemperatura="...";
			temperaturaMaxima=temperaturaIngresada;
			nombreMaximaTemperatura=nombreIngresado;
		}
		else
		{
			temperaturaMaxima=temperaturaIngresada;
			nombreMaximaTemperatura=nombreIngresado;
		}

		switch(estadoCivil)
		{
			case "soltero":
			switch(generoIngresado)
			{
				case "m":
				acumuladorSolteros=acumuladorSolteros+1;
				acumuladorEdadSolteros=acumuladorEdadSolteros+edadIngresada;
				cantidadHombresSolteros=cantidadHombresSolteros+1;
				break;
			}
			break;

			case "viudo":
			switch(generoIngresado)
			{
				case "m":
				acumuladorHombresViudos=acumuladorHombresViudos+1;
				break;
			}
			if(edadIngresada>18)
			{
				acumuladorViudos=acumuladorViudos+1;
			}
			break;	
		}

		if(edadIngresada>60 && temperaturaIngresada>38)
		{
			acumuladorPersonasTemperaturaAlta=acumuladorPersonasTemperaturaAlta+1;
		}

		respuesta=prompt("desea continuar?");
	}


	promedioEdadHombresSolteros=acumuladorEdadSolteros/ cantidadHombresSolteros;

	mensaje="La persona con mas temperatura es "+nombreMaximaTemperatura;
	mensaje=mensaje+".<br>Hay "+acumuladorViudos+" viudo/s mayor/es de edad.";
	mensaje=mensaje+"<br>Hay "+acumuladorSolteros+" hombres solteros y "+acumuladorHombresViudos;
	mensaje=mensaje+" hombres viudos."+"<br>Hay "+acumuladorPersonasTemperaturaAlta+"personas de la tercera edad con mas de 38 de temperatura.";
	mensaje=mensaje+"<br>El promedio de edad entre hombres solteros es de "+promedioEdadHombresSolteros+".";

	document.write(mensaje);

}