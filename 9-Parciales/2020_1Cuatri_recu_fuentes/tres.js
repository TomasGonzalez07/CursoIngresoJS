/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
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
	let nacionalidadMaximaTemperatura;
	let acumuladorSolterosGeneral;
	let acumuladorSolteras;
	let acumuladorMujeresViudas;
	let acumuladorPersonasTemperaturaAlta;
	let acumuladorEdadCasadas;
	let cantidadMujeresCasadas;
	let promedioMujeresCasadas;
	let mensaje;

	respuesta="si";
	banderaTemperatura="mas alta";
	acumuladorSolterosGeneral=0;
	acumuladorSolteras=0;
	acumuladorMujeresViudas=0;
	acumuladorPersonasTemperaturaAlta=0;
	acumuladorEdadCasadas=0;
	cantidadMujeresCasadas=0;

	while(respuesta=="si")
	{	
		nombreIngresado=prompt("ingrese el nombre");

		nacionalidadIngresada=prompt("ingrese su nacionalidad");

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
			nacionalidadMaximaTemperatura=nacionalidadIngresada;
		}
		else
		{
			temperaturaMaxima=temperaturaIngresada;
			nacionalidadMaximaTemperatura=nacionalidadIngresada;
		}

		switch(estadoCivil)
		{
			case "soltero":
			switch(generoIngresado)
			{
				case "f":
				acumuladorSolteras=acumuladorSolteras+1;
				break;
			}	

			if(edadIngresada>18)
			{
				acumuladorSolterosGeneral=acumuladorSolterosGeneral+1;
			}
			
			break;

			case "viudo":
			switch(generoIngresado)
			{
				case "f":
				acumuladorMujeresViudas=acumuladorMujeresViudas+1;
				break;
			}
			case"casado":
			switch(generoIngresado)
			{
				case"f":
				cantidadMujeresCasadas=cantidadMujeresCasadas+1;
				acumuladorEdadCasadas=acumuladorEdadCasadas+edadIngresada;
				break;
			}

			if(edadIngresada>60 && temperaturaIngresada>38)
		{
			acumuladorPersonasTemperaturaAlta=acumuladorPersonasTemperaturaAlta+1;
		}

			respuesta=prompt("desea continuar?");
		}

		

		promedioMujeresCasadas=acumuladorEdadCasadas/ cantidadMujeresCasadas;

	mensaje="La persona con mas temperatura es "+nacionalidadMaximaTemperatura;
	mensaje=mensaje+".<br>Hay "+acumuladorSolterosGeneral+" soltero/s mayor/es de edad.";
	mensaje=mensaje+"<br>Hay "+acumuladorSolteras+" mujeres solteras y "+acumuladorMujeresViudas;
	mensaje=mensaje+" mujeres viudas."+"<br>Hay "+acumuladorPersonasTemperaturaAlta+"personas de la tercera edad con mas de 38 de temperatura.";
	mensaje=mensaje+"<br>El promedio de edad entre hombres solteros es de "+promedioMujeresCasadas+".";

	document.write(mensaje);


}
