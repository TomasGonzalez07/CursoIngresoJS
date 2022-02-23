/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// defino variable y le doy un valor
	let nombreIngresado;
	nombreIngresado = prompt("ingrese su nombre", "Juan Perez");

	//alert("nombre");
	//alert(nombre)

	alert("su nombre es " + nombreIngresado);
	//alert("ok");
}

