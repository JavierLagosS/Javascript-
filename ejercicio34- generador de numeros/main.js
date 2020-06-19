var num=[];

function espar(num){
	//numero par o impar

	var ep=false; 
	if (num % 2 == 0){
		ep=true;
	}
	return ep;
}
function esPrimo(num){
	// Casos especiales
	if (num == 0 || num == 1 || num == 4) return false;
	for (let x = 2; x < num / 2; x++) {
		if (num % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

$(document).ready(function(){

	$('#buton2').prop('disabled', true);
	$('#buton3').prop('disabled', true);
	$('#buton4').prop('disabled', true);
	$('#buton5').prop('disabled', true);

	$("#buton1").click(function(){
			
		//alert("Hola");
		for(var i=0; i<20; i++){
			num[i] = Math.trunc(Math.random()*100);
		}

		var texto = "";
		
		for(var j=0; j<20; j++){
			texto += num[j] + " - ";
		}
		
		$("#cajatext").val(texto);

		$('#buton2').prop('disabled', false);
		$('#buton3').prop('disabled', false);
		$('#buton4').prop('disabled', false);
		$('#buton5').prop('disabled', false);
		
	});

	$("#buton2").click(function(){
		
		var texto = "";
		for(var i=0; i<num.length; i++){
			if (espar(num[i]) == false)
				texto += num[i] + " - ";
		}
		$("#cajatext").val(texto);
		
    });

    $("#buton3").click(function(){
		
		var texto = "";
		for(var i=0; i<num.length; i++){
			if (espar(num[i]) == true)
				texto += num[i] + " - ";
		}
		$("#cajatext").val(texto);
		
    });
    $("#buton4").click(function(){
		
		var texto = "";
		for(var i=0; i<num.length; i++){
			if (esPrimo(num[i]) == true )
				texto += num[i] + " - ";
		}
		$("#cajatext").val(texto);
		
	});
    $("#buton5").click(function(){
		
		var texto = "";
		for(var i=0; i<num.length; i++){
			if (esPrimo(num[i]) == false )
				texto += num[i] + " - ";
		}
		$("#cajatext").val(texto);
		
	});

});