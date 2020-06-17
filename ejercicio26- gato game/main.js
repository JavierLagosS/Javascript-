
function genera_tablero() {
    

    var tablero = document.getElementById("tablero");
    tablero.style.display = "flex";

    // for para generar el tablero de gato
    for (var i = 0; i < 9; i++) {
        // objetos tablero y celda
        var tablero = document.getElementById("tablero");
        var boton = document.createElement("button");
        var generarJuego = document.getElementById("generarJuego");

        // celda le asignamos un id ="celda(i+1)"
        boton.setAttribute("id", "boton" + (i + 1));

        // celda le asignamos la clase class="celda"
        boton.setAttribute("class", "boton");

        // agregamos el evento a cada divo
        boton.setAttribute("onclick", "ejecutar(this)");

        // agregamos el nro en cada div de izquierda a derecha
        boton.textContent = i + 1;

        // al tablero le vamos agregando cada celda con sus caracteristicas.
        tablero.appendChild(boton);

    }
    // desactivamos el boton crear juego 
    generarJuego.setAttribute("disabled", "true");

}

function ejecutar(obj) {
    var arraySimbolos = ['x', 'o'];
    var f1 = ['1', '2', '3'];
    var f2 = ['4', '5', '6'];
    var f3 = ['7', '8', '9'];

    var c1 = ['1', '4', '7'];
    var c2 = ['2', '5', '8'];
    var c3 = ['3', '6', '9'];

    var d1 = ['1', '5', '9'];
    var d2 = ['3', '5', '7'];
    obj.addEventListener("click", function () {
        contarClick();
        obj.style.backgroundColor = '#18E766';
        if (contador % 2) {
            obj.textContent = arraySimbolos[0];
        } else {
            obj.textContent = arraySimbolos[1];
        }
        obj.setAttribute("disabled", true);
        console.log(document.getElementById("boton" + f1[1]).textContent)
        // document.getElementById("boton"+f1[0]);

        // filas
        if (arraySimbolos[0] == elementos(f1[0]) &&
            arraySimbolos[0] == elementos(f1[1]) &&
            arraySimbolos[0] == elementos(f1[2])
        ) {
            alert("gano x");
        } else if (arraySimbolos[0] == elementos(f2[0]) &&
            arraySimbolos[0] == elementos(f2[1]) &&
            arraySimbolos[0] == elementos(f2[2])
        ) {
            alert("gano x");
        } else if (arraySimbolos[0] == elementos(f3[0]) &&
            arraySimbolos[0] == elementos(f3[1]) &&
            arraySimbolos[0] == elementos(f3[2])
        ) {
            alert("gano x");
        }

        // columnas
        if (arraySimbolos[0] == elementos(c1[0]) &&
            arraySimbolos[0] == elementos(c1[1]) &&
            arraySimbolos[0] == elementos(c1[2])
        ) {
            alert("gano x");
        } else if (arraySimbolos[0] == elementos(c2[0]) &&
            arraySimbolos[0] == elementos(c2[1]) &&
            arraySimbolos[0] == elementos(c2[2])
        ) {
            alert("gano x");
        } else if (arraySimbolos[0] == elementos(c3[0]) &&
            arraySimbolos[0] == elementos(c3[1]) &&
            arraySimbolos[0] == elementos(c3[2])
        ) {
            alert("gano x");
        }

        // diagonal
        if (arraySimbolos[0] == elementos(d1[0]) &&
            arraySimbolos[0] == elementos(d1[1]) &&
            arraySimbolos[0] == elementos(d1[2])
        ) {
            alert("gano x");
        } else if (arraySimbolos[0] == elementos(d2[0]) &&
            arraySimbolos[0] == elementos(d2[1]) &&
            arraySimbolos[0] == elementos(d2[2])
        ) {
            alert("gano x");
        }

        /*=========================================================================
                                      elemento o                    
        =========================================================================*/

        // filas
        if (arraySimbolos[1] == elementos(f1[0]) &&
            arraySimbolos[1] == elementos(f1[1]) &&
            arraySimbolos[1] == elementos(f1[2])
        ) {
            alert("gano o");
        } else if (arraySimbolos[1] == elementos(f2[0]) &&
            arraySimbolos[1] == elementos(f2[1]) &&
            arraySimbolos[1] == elementos(f2[2])
        ) {
            alert("gano o");
        } else if (arraySimbolos[1] == elementos(f3[0]) &&
            arraySimbolos[1] == elementos(f3[1]) &&
            arraySimbolos[1] == elementos(f3[2])
        ) {
            alert("gano o");
        }

        // columnas
        if (arraySimbolos[1] == elementos(c1[0]) &&
            arraySimbolos[1] == elementos(c1[1]) &&
            arraySimbolos[1] == elementos(c1[2])
        ) {
            alert("gano o");
        } else if (arraySimbolos[1] == elementos(c2[0]) &&
            arraySimbolos[1] == elementos(c2[1]) &&
            arraySimbolos[1] == elementos(c2[2])
        ) {
            alert("gano o");
        } else if (arraySimbolos[1] == elementos(c3[0]) &&
            arraySimbolos[1] == elementos(c3[1]) &&
            arraySimbolos[1] == elementos(c3[2])
        ) {
            alert("gano o");
        }

        // diagonal
        if (arraySimbolos[1] == elementos(d1[0]) &&
            arraySimbolos[1] == elementos(d1[1]) &&
            arraySimbolos[1] == elementos(d1[2])
        ) {
            alert("gano o");
        } else if (arraySimbolos[1] == elementos(d2[0]) &&
            arraySimbolos[1] == elementos(d2[1]) &&
            arraySimbolos[1] == elementos(d2[2])
        ) {
            alert("gano o");
        }

    });
}

var contador = 0;
function contarClick() {
    contador += 1;
    return contador;
}

function elementos(elemento) {
    return document.getElementById("boton" + elemento).textContent
}