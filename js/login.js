function login(){
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    
    if(userName !== "pokemon"){
        document.getElementById("loginFailure").style.display = "block";
    } else if(password !== "Mewtwo"){
        document.getElementById("loginFailure").style.display = "block";
    } else {
       window.location.href = "./../forms/loginsuccesful.html"
    }
} 