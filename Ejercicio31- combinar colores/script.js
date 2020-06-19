$(document).ready(function () {

    // rojos
    var rangoRojo = $("#rangoRojo");
    var rgbRojo = $("#rgbRojo");

    // verdes
    var rangoVerde = $("#rangoVerde");
    var rgbVerde = $("#rgbVerde");
    // azules
    var rangoAzul = $("#rangoAzul");
    var rgbAzul = $("#rgbAzul");

    // contenedor para mostrar el color
    var muestraColor = $("#muestraColor");
    // se define el rgb
    var rgb =  "rgb("+rgbRojo.val()+","+rgbVerde.val()+", "+rgbAzul.val()+")";


    rangoRojo.on('input', function () {
        rgbRojo.val(rangoRojo.val());
        muestraColor.css("background", verColorRojo(rgbRojo.val(), rgbVerde.val(), rgbAzul.val()));
    });

    rangoVerde.on('input', function () {
        rgbVerde.val(rangoVerde.val());
        muestraColor.css("background", verColorRojo(rgbRojo.val(), rgbVerde.val(), rgbAzul.val()));
    });
    rangoAzul.on('input', function () {
        rgbAzul.val(rangoAzul.val());
        muestraColor.css("background", verColorRojo(rgbRojo.val(), rgbVerde.val(), rgbAzul.val()));
    });

    // if((verColorRojo(rgbRojo.val(), rgbVerde.val(), rgbAzul.val())) = "rgb(0, 0, 0)"){
    //     muestraColor.css("color", "black");
    // }
 
});
function verColorRojo(rojo, verde, azul){
    var muestraColor = document.getElementById("muestraColor");
    muestraColor.textContent = "rgb("+rojo+","+verde+", "+azul+")";


    return "rgb("+rojo+","+verde+", "+azul+")";

}

function copyToClipboard(elemento) {
    var $temp = $("<input>")
    console.log($temp)
    $("body").append($temp);
    $temp.val($(elemento).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  