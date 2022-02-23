/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroDividendo;
	let numeroDivisor;
	let resultado;

	numeroDividendo=document.getElementById('txtIdNumeroDividendo').value;
	numeroDivisor=document.getElementById('txtIdNumeroDivisor').value;

	resultado= parseInt(numeroDividendo) % parseInt(numeroDivisor);

	alert("el resto es "+ resultado);
}
