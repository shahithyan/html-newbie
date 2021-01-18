function progress(){
    var progressElement = document.getElementById("test");
    var number = 10;
    var timer = setInterval(updateProgress, 1000);

    function updateProgress(){
        if(number > 100) {
            progressElement.value = 0;
            clearInterval(timer);
        } else {
            progressElement.value = number; 
            number = number + 10;  
        }
    }
}