window.onmousemove = function (){
    var x = window.event.clientX;
    var y = window.event.clientY;

    // console.log('x='+x)
    // console.log('y='+y)

    var textarea = document.getElementById("contenedorTexto");
    textarea.value = x+','+y;


    var body = document.getElementById("body");
}
body.addEventListener("click", function () {

        var x = window.event.clientX;
        var y = window.event.clientY;

        var test = document.getElementById("test");
        var parrafo = document.createElement("p");
        parrafo.textContent =" cordenada en x = " + x + " cordenada en y= " +y ;
        test.appendChild(parrafo);


});

var reset = document.getElementById("reset");
reset.addEventListener("click", function() {

    document.getElementById("test").innerHTML = "";
})



