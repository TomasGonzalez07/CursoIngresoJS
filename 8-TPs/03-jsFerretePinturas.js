/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
	let centigrados;
	let mensaje;

	temperatura=document.getElementById('txtIdTemperatura').value;
	temperatura=parseInt(temperatura);

	centigrados= (temperatura-32) /1.8;

	mensaje= temperatura+" fahrenheit son ";
	mensaje=mensaje+centigrados;
	mensaje=mensaje+" centigrados";

	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	let temperatura;
	let fahrenheit;
	let mensaje;

	temperatura=document.getElementById('txtIdTemperatura').value;
	temperatura=parseInt(temperatura);

	fahrenheit= (temperatura*1.8) + 32;

	mensaje=temperatura+" centigrados son ";
	mensaje=mensaje+ fahrenheit;
	mensaje=mensaje+" fahrenheit";


	alert(mensaje);
}
