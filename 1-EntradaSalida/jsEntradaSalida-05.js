/*
Tomas Gonzalez
e/s 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	let edadIngresada;
	let mensaje;

	nombreIngresado=document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;

	//alert("usted se llama "+nombreIngresado+" y tiene "+edadIngresada)+" años";

	mensaje="usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años";
	
	alert(mensaje);
}
/*
ejercicio 05 bis
Debemos lograr tomar nombre, apellido (este por prompt) y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José,perez  y tiene 66 años" 	*/
function mostrar()
{
	let nombreIngresado;
	let apellidoIngresado;
	let edadIngresada;
	let mensaje;

	apellidoIngresado = prompt("ingrese su apellido");
	nombreIngresado=document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;

	mensaje="usted se llama " +nombreIngresado+","+apellidoIngresado +" y tiene "+edadIngresada+" años";
	
	alert(mensaje);


	
}