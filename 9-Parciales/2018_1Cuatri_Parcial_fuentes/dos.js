/*
mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".
*/
function mostrar()
{
  let nombreIngresado;
  let localidadIngresada;
  let mensaje;

  nombreIngresado=document.getElementById('elNombre').value;
  localidadIngresada=document.getElementById('laLocalidad').value;

  mensaje="Usted es "+nombreIngresado+" y vive en la localidad de "+localidadIngresada;

  alert(mensaje);
}
