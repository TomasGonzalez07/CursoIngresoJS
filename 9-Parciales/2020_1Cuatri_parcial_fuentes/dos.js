/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  let respuesta;
  let tipo;
  let arena;
  let cal;
  let cemento;
  let precioIngresado;
  let cantidadBolsas;
  let cantidadBolsasArena;
  let cantidadBolsasCal;
  let cantidadBolsasCemento;
  let precioArena;
  let precioCal;
  let precioCemento;
  let porcentajeDescuento;
  let descuento;
  let precioDescuentoFinal;
  let importeTotalBruto;
  let cantidadMayorBolsas;
  let precioMasCaro;
  let mensaje;

  cantidadBolsasArena=0;
  cantidadBolsasCal=0;
  cantidadBolsasCemento=0;
  precioArena=0;
  precioCal=0;
  precioCemento=0;

  respuesta="si";

  while(respuesta=="si")
  {

    tipo=prompt("ingrese nombre del tipo de material(arena, cal o cemento)");
    while(tipo != "arena" && tipo !="cal" && tipo != "cemento")
    {
      tipo=prompt("ERROR, reingrese el nombre del tipo de material");
    }

    precioIngresado=prompt("ingrese el precio del producto");
    precioIngresado=parseInt(precioIngresado);
    while (precioIngresado<0)
    {
      precioIngresado=prompt("ERROR, reingrese el precio del producto");
      precioIngresado=parseInt(precioIngresado);
    }

    cantidadBolsas=prompt("ingrese cantidad de unidades");
    cantidadBolsas=parseInt(cantidadBolsas);
    while (cantidadBolsas<0 || cantidadBolsas>1000)
    {
      cantidadBolsas=prompt("ERROR, reingrese la cantidad de unidades");
      cantidadBolsas=parseInt(cantidadBolsas);
    }

    if(tipo=="arena")
    {
      cantidadBolsasArena=cantidadBolsasArena+cantidadBolsas;
      precioArena=precioIngresado;
    }
    else
    {
      if(tipo=="cal")
      {
        cantidadBolsasCal=cantidadBolsasCal+cantidadBolsas;
        precioCal=precioIngresado;
      }
      else
      {
        cantidadBolsasCemento=cantidadBolsasCemento+cantidadBolsas;
        precioCemento=precioIngresado;
      }
    }    

    respuesta=prompt("desea continuar?");
  }

  if(cantidadBolsasArena>cantidadBolsasCal && cantidadBolsasArena>cantidadBolsasCemento) 
    {
      cantidadMayorBolsas=cantidadBolsasArena;
    }   
    else
    {
      if(cantidadBolsasCal>cantidadBolsasCemento)
      {
        cantidadMayorBolsas=cantidadBolsasCal;
      }
      else
      {
        cantidadMayorBolsas=cantidadBolsasCemento;  
      }
    }

  if(precioArena>precioCal && precioArena>precioCemento)
  {
    precioMasCaro=precioArena;
  }
  else
  {
    if(precioCal>precioCemento)
    {
      precioMasCaro=precioCal;
    }
    else
    {
      precioMasCaro=precioCemento;
    }
  }

  if(cantidadBolsas>10 && cantidadBolsas<30)
    {
      porcentajeDescuento=15;
    }
    else
    {
      if(cantidadBolsas>30)
      {
        porcentajeDescuento=25;
      }
      else
      {
        porcentajeDescuento=0;
      }
    }

    importeTotalBruto=precioIngresado*cantidadBolsas;

    descuento= (importeTotalBruto/100)*porcentajeDescuento;
    precioDescuentoFinal= importeTotalBruto - descuento;
  
  mensaje="El importe final bruto sin descuento es $"+importeTotalBruto;
  mensaje=mensaje+", el importe total con descuento es de $"+precioDescuentoFinal;
  mensaje=mensaje+".El tipo con mas cantidad de bolsas es el/la "+tipo+",con "+cantidadMayorBolsas;
  mensaje=mensaje+".El tipo mas caro es "+tipo+",vale $"+precioMasCaro;

  document.write(mensaje);
}  
