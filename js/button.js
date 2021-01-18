function myFunction() {
    var buttonText = document.getElementById("myButton").innerHTML;

    if(buttonText === "Button is clicked"){
        document.getElementById("myButton").innerHTML = "I am a button";
    } else{
        document.getElementById("myButton").innerHTML = "Button is clicked";
    }
}