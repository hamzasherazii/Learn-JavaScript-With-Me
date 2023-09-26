var email = document.getElementById("email");
var pswd = document.getElementById("pswd");
var submit = document.getElementById("submit");

submit.onclick = function(){
    if(email.value != "" && pswd.value != ""){
        document.write("Success!");
    }
}