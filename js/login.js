function login(){
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    
    if(userName !== "pokemon"){
        document.getElementById("loginFailure").style.display = "block";
        document.getElementById("loginSuccessful").style.display = "none";
    } else if(password !== "Mewtwo"){
        document.getElementById("loginFailure").style.display = "block";
        document.getElementById("loginSuccessful").style.display = "none";
    } else {
        document.getElementById("loginFailure").style.display = "none";
       document.getElementById("loginSuccessful").style.display = "block";
    }
} 