/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
 
function CalcularPrecio ()

//if else
 /*
{
 	let cantidadLamparas;
    let precioLampara;
    let descuento;
    let aumento;
    let precioFinalBruto;
    let porcentajeDescuento;
    let porcentajeAumento;
    let precioDescuentoFinal;
    let precioAumentoFinal;
    let marca;
    let mensaje;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById('Marca').value;

    precioLampara= 35;

    precioFinalBruto= precioLampara*cantidadLamparas;

    if (cantidadLamparas >= 6)
    {
        porcentajeDescuento=50;
    }
    else
    {
        if(cantidadLamparas == 5)   
        {
            if( marca == "ArgentinaLuz")
            {
                porcentajeDescuento=40;
            }    

            else
            {
                porcentajeDescuento=30;
            }
        }
        else 
        {
            if (cantidadLamparas == 4)
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentajeDescuento=25;
                }
                else
                {
                    porcentajeDescuento=20;
                }
            }    
            else
            {            
                if (cantidadLamparas == 3)
                {       
                    if (marca == "ArgentinaLuz")
                    {
                        porcentajeDescuento=15;
                    }
                    else
                    {
                        if (marca == "FelipeLamparas")
                        {
                            porcentajeDescuento=10;
                        }
                        else
                        {
                            porcentajeDescuento=5;
                        }
                    }
                }        
                else
                {
                     porcentajeDescuento=0;
                }
            }        
        }         
    }

    descuento= (precioFinalBruto/100)*porcentajeDescuento;
    precioDescuentoFinal= precioFinalBruto - descuento;

    if (precioDescuentoFinal > 120)
    {
        porcentajeAumento=10;
        aumento=(precioDescuentoFinal/100)*porcentajeAumento;
        precioAumentoFinal= precioDescuentoFinal + aumento;

        mensaje="usted pagó $"+ precioAumentoFinal+" de IIBB,";
        mensaje=mensaje+ "siendo $"+ aumento + "(10%)";
        mensaje=mensaje+ " el impuesto que se pagó."; 

        alert(mensaje);
    }

    document.getElementById('txtIdprecioDescuento').value = precioDescuentoFinal;

}
*/

//if switch
/*
{
  let cantidadLamparas;
  let descuento;
  let aumento;
  let marca;
  let precioLampara;
  let precioFinalBruto;
  let porcentajeDescuento;
  let precioFinalDescuento;
  let porcentajeAumento;
  let importeFinal;
  let mensaje;

  cantidadLamparas=document.getElementById('txtIdCantidad').value;
  cantidadLamparas=parseInt(cantidadLamparas);
  marca=document.getElementById('Marca').value;

  precioLampara=35;
  precioFinalBruto= precioLampara*cantidadLamparas;

  if (cantidadLamparas>=6)
  {
    switch(marca)
    {
        default:
        porcentajeDescuento=50;
        break;
    }
  }
  else
  {
    if (cantidadLamparas==5)
    {
        switch(marca)
        {
            case "ArgentinaLuz":
            porcentajeDescuento=40;
            break;
            default:
            porcentajeDescuento=30;
            break;
        }
    }
    else 
    { 
        if (cantidadLamparas==4)    
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                porcentajeDescuento=25;
                break;
                default:
                porcentajeDescuento=20;
                break;
            }
        }
        else
        {    
            if (cantidadLamparas==3)
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                    porcentajeDescuento=15;
                    break;
                    case "FelipeLamparas":
                    porcentajeDescuento=10;
                    break;
                    default:
                    porcentajeDescuento=5;
                    break;
                }
            }    
            else
            {
                porcentajeDescuento=0;
            } 
        }          
    }        
   }

  descuento=(precioFinalBruto/100)*porcentajeDescuento;
  precioFinalDescuento= precioFinalBruto-descuento;
  importeFinal=precioFinalDescuento;

if (precioFinalDescuento>120)
{
    porcentajeAumento=10;
    aumento= (precioFinalDescuento/100)*porcentajeAumento;
    importeFinal=precioFinalDescuento+aumento;

    mensaje="IIBB usted pagó $"+importeFinal;
    mensaje=mensaje+",siendo $"+aumento;
    mensaje=mensaje+" el impuesto que se pagó";
    alert(mensaje);
}
  
  document.getElementById('txtIdprecioDescuento').value=precioFinalDescuento;

}
*/

//switch if
/*
{

  let cantidadLamparas;
  let descuento;
  let aumento;
  let marca;
  let precioLampara;
  let precioFinalBruto;
  let porcentajeDescuento;
  let precioFinalDescuento;
  let porcentajeAumento;
  let importeFinal;
  let mensaje;

  cantidadLamparas=document.getElementById('txtIdCantidad').value;
  cantidadLamparas=parseInt(cantidadLamparas);
  marca=document.getElementById('Marca').value;

  precioLampara=35;
  precioFinalBruto= precioLampara*cantidadLamparas;

  switch(cantidadLamparas)
  {
    case 1:
    case 2:
    porcentajeDescuento=0;
    break;

    case 3:
    if(marca=="ArgentinaLuz")
    {
        porcentajeDescuento=15;
    }
    else
    {
        if(marca=="FelipeLamparas")
        {
            porcentajeDescuento=10;
        }
        else
        {
            porcentajeDescuento=5;
        }
    }
    break;

    case 4:
    if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
    {
        porcentajeDescuento=25;
    }
    else
    {
        porcentajeDescuento=20;
    }
    break;

    case 5:
    if(marca=="ArgentinaLuz")
    {
        porcentajeDescuento=40;
    }
    else
    {
        porcentajeDescuento=30;
    }
    break;

    default:
    porcentajeDescuento=50; 
    break;
   }

    descuento=(precioFinalBruto/100)*porcentajeDescuento;
    precioFinalDescuento= precioFinalBruto-descuento;
    importeFinal=precioFinalDescuento;

  if (precioFinalDescuento>120)
  {
    porcentajeAumento=10;
    aumento= (precioFinalDescuento/100)*porcentajeAumento;
    importeFinal=precioFinalDescuento+aumento;

    mensaje="IIBB usted pagó $"+importeFinal;
    mensaje=mensaje+",siendo $"+aumento;
    mensaje=mensaje+" el impuesto que se pagó";
    alert(mensaje);
  }
  
  document.getElementById('txtIdprecioDescuento').value=precioFinalDescuento;
}
*/
//switch switch

{
  let cantidadLamparas;
  let descuento;
  let aumento;
  let marca;
  let precioLampara;
  let precioFinalBruto;
  let porcentajeDescuento;
  let precioFinalDescuento;
  let porcentajeAumento;
  let importeFinal;
  let mensaje;

  cantidadLamparas=document.getElementById('txtIdCantidad').value;
  cantidadLamparas=parseInt(cantidadLamparas);
  marca=document.getElementById('Marca').value;

  precioLampara=35;
  precioFinalBruto= precioLampara*cantidadLamparas;

switch(cantidadLamparas)
{
    case 1:
    case 2:
    porcentajeDescuento=0;
    break;

    case 3:
    switch(marca)
    {
        case "ArgentinaLuz":
        porcentajeDescuento=15;
        break;
        case "FelipeLamparas":
        porcentajeDescuento=10;
        break;
        default:
        porcentajeDescuento=5;
        break;
    }
    break;

    case 4:
    switch(marca)
    {
        case "ArgentinaLuz":
        case "FelipeLamparas":
        porcentajeDescuento=25;
        break;
        default:
        porcentajeDescuento=20;
        break;
    }
    break;
    
    case 5:
    switch(marca)
    {
        case "ArgentinaLuz":
        porcentajeDescuento=40;
        break;
        default:
        porcentajeDescuento=30;
        break;
    }
    break;    
    
    default:
    porcentajeDescuento=50; 
    break;
    
}

  descuento=(precioFinalBruto/100)*porcentajeDescuento;
  precioFinalDescuento= precioFinalBruto-descuento;
  importeFinal=precioFinalDescuento;

if (precioFinalDescuento>120)
{
    porcentajeAumento=10;
    aumento= (precioFinalDescuento/100)*porcentajeAumento;
    importeFinal=precioFinalDescuento+aumento;

    mensaje="IIBB usted pagó $"+importeFinal;
    mensaje=mensaje+",siendo $"+aumento;
    mensaje=mensaje+" el impuesto que se pagó";
    alert(mensaje);
}
  
  document.getElementById('txtIdprecioDescuento').value=precioFinalDescuento;
}


