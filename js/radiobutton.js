function showBeyblade() {
    var worldSpryzen = document.getElementById("worldSpryzen").checked;
    var img = document.getElementById("beyblade");

    if(worldSpryzen) {
        img.src = "./../pictures/spryzen.jpg";
    }
    var braveValtreyk = document.getElementById("braveValtreyk").checked

    if(braveValtreyk) {
        img.src ="./../pictures/Valtreyk.jpg"
    }
    var tempestDragon = document.getElementById("tempestDragon").checked

    if(tempestDragon) {
        img.src ="./../pictures/dragon.jpg"
    }
}