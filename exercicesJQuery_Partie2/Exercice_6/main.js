// mouseenter: événements à tirer lorsque la souris entre dans un élément
// mouseleave: événements à tirer lorsque la souris quitte un élément
$(document).ready(function(){
// au passage de la souris colore en vert et retrouve sa couleur à la sortie de la souris
    $("#green").mouseenter(function(){
        $("#texte").css("color","green");
    });
    $("#green").mouseleave(function(){
     $("#texte").css("color","");
    });
// au passage de la souris colore en rouge et retrouve sa couleur à la sortie de la souris
    $("#red").mouseenter(function(){
        $("#texte").css("color","red");
    });
    $("#red").mouseleave(function(){
     $("#texte").css("color","");
    });
// au passage de la souris colore en bleu et retrouve sa couleur à la sortie de la souris
    $("#blue").mouseenter(function(){
       $("#texte").css("color","blue");
    });
    $("#blue").mouseleave(function(){
        $("#texte").css("color","");
    });
});
