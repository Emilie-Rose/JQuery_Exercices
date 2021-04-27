$(document).ready(function(){
    $("input").focus(function(){
// qd focus sur input : définis la bordure '1px solid green'
        $(this).css("border","1px solid green")
    });
    $("input").blur(function(){
// qd on perd le focus sur input : définis la bordure '1px solid red'
        $(this).css("border","1px solid red")
    });
});