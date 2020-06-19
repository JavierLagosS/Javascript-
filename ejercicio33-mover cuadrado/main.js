
$("#btnder").click(function(){
    var coord = $("#contmover").position();
    var y = coord.top;
    var x = coord.left;

    $("#contmover").css("left",x+10);
});

$("#btnizq").click(function(){
    var coord = $("#contmover").position();
    var y = coord.top;
    var x = coord.left;

    $("#contmover").css("left",x-10);
});

$("#btnabj").click(function(){
    var coord = $("#contmover").position();
    var y = coord.top;
    var x = coord.left;

    $("#contmover").css("top",y+10);
});

$("#btnarr").click(function(){
    var coord = $("#contmover").position();
    var y = coord.top;
    var x = coord.left;

    $("#contmover").css("top",y-10);
});

$("#btnrei").click(function(){
    $("#contmover").css("top",50);
    $("#contmover").css("left",0);
});

