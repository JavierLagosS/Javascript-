// Meritos a Rene Por ayudarme a crear el tablero!
function genera_tablero() {

    // for para generar 25 div 5x5
    for (var i = 0; i < 25; i++) {
        // objetos tablero y celda
        var tablero = document.getElementById("tablero");
        var celda = document.createElement("div");

        // celda le asignamos un id ="celda(i+1)"
        celda.setAttribute("id", "celda" + (i + 1));

        // celda le asignamos la clase class="celda"
        celda.setAttribute("class", "celda");

        // celda le asignamos el atributo data-id="i+1"
        celda.setAttribute("data-id", (i + 1));

        // agregamos el evento a cada divo
        celda.setAttribute("onclick", "ejecutar(this)");

        // agregamos el nro en cada div de izquierda a derecha
        celda.textContent = i + 1;

        // al tablero le vamos agregando cada celda con sus caracteristicas.
        tablero.appendChild(celda);
    }

}


function pintarColumnasIniciales(){
    var primeraColumna = [1, 6, 11, 16, 21];
    var ultimaColumna = [5, 10, 15, 20, 25];
    
    var idCeldaPrimeraColumna = primeraColumna[Math.floor(Math.random() * primeraColumna.length)]; // el Math.random lo saque de aca https://timonweb.com/tutorials/how-to-get-a-random-value-from-a-javascript-array/
    var ojbC1 = document.getElementById("celda"+idCeldaPrimeraColumna);
    ojbC1.style.backgroundColor = '#18E766';

    var idCeldaUltimaColumna = ultimaColumna[Math.floor(Math.random() * ultimaColumna.length)]; 
    var ojbC5 = document.getElementById("celda"+idCeldaUltimaColumna);
    ojbC5.style.backgroundColor = '#18E766';
}




function ejecutar(obj) {
    obj.addEventListener("click", function () {
        obj.style.backgroundColor = '#18E766';

        var obtenerDataId = document.getElementById(obj.previousSibling.id);
        var obtenerDataIdSiguiente = document.getElementById(obj.nextSibling.id);
        if (obtenerDataId == null) {
            console.log("primero")
            var idSiguiente = obtenerDataIdSiguiente.getAttribute("data-id");
            console.log(("id Siguiente " + idSiguiente))
        } else if (obtenerDataIdSiguiente == null) {
            console.log("ultimo")
            var idAnterior = obtenerDataId.getAttribute("data-id");
            var objIdAnterior = document.getElementById("celda" + idAnterior);
        } else {
            var idAnterior = obtenerDataId.getAttribute("data-id");
            var objIdAnterior = document.getElementById("celda" + idAnterior);


            var idSiguiente = obtenerDataIdSiguiente.getAttribute("data-id");
            console.log(("id Siguiente " + idSiguiente))
            if (estaPintado(objIdAnterior)) {
                alert("el anterior esta pintado");
            }
            console.log(("id Anterior " + idAnterior))
        }

      
        var nroColumna = ((idAnterior % 5))
        if (nroColumna == 0) {
            alert("primera Columna")
        } else if (nroColumna == 4) {
            alert("ultima Columna")
        }


    });


}

function estaPintado(obj) {
    if (obj.style.backgroundColor === "#18E766") {
        return true;
    }
}