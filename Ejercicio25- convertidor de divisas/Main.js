var valor =document.getElementById("cantidad");
var botonManual= document.getElementById("button");

const MonedaIngreso= document.getElementById('f1')['Moneda'];
const MonedaEgreso= document.getElementById('f1')['MonedaA'];

// Variables De los precios de las monedas en base al clp
var Mclp= 1;
var MUsd=0.0013;
var MEuro=0.0012 ;
var MYen=0.14 ;
var MlibraEsterlina=0.0010;

valor.addEventListener("input", function(){
    console.log(valor.value);
    console.log(MonedaIngreso.value);
    console.log(MonedaEgreso.value);
    document.getElementById("mostrarValor").innerHTML= valor.value +" "+ MonedaIngreso.value;
    /* caso 1  */
 if(MonedaIngreso.value==="clp"){
    if(MonedaEgreso.value==="clp"){   
        document.getElementById("Mostrar").innerHTML= valor.value + " " + MonedaEgreso.value;
    }
    if(MonedaEgreso.value==="USD"){
        document.getElementById("Mostrar").innerHTML= valor.value*MUsd + " " + MonedaEgreso.value;     
     }
     if(MonedaEgreso.value==="Euro"){
        document.getElementById("Mostrar").innerHTML= valor.value*MEuro + " " + MonedaEgreso.value;    
     }
     if(MonedaEgreso.value==="Yen"){
        document.getElementById("Mostrar").innerHTML=valor.value*MYen + " " + MonedaEgreso.value;     
     }
     if(MonedaEgreso.value==="LibraEsterlina"){     
        document.getElementById("Mostrar").innerHTML= valor.value*MlibraEsterlina + " " + MonedaEgreso.value;

    }
}
/* Fin Caso 1 */
 

});

     