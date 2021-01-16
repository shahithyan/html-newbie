function add() {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;

    var result = parseFloat(firstNumber) + parseFloat(secondNumber);
    result = result.toFixed(2)
    document.getElementById("result").innerHTML = result;
}

function subtract() {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;

    var result = parseFloat(firstNumber) - parseFloat(secondNumber);
    result = result.toFixed(2);   
    document.getElementById("result").innerHTML = result;

}

function multiplication() {
   var firstNumber =document.getElementById("firstNumber").value;
   var secondNumber = document.getElementById("secondNumber").value;

   var result = parseFloat(firstNumber) * parseFloat(secondNumber);
   result = result.toFixed(2);
   document.getElementById("result").innerHTML = result;
}

function divison() {
   var firstNumber =document.getElementById("firstNumber").value;
   var secondNumber = document.getElementById("secondNumber").value;
   
   var result = parseFloat(firstNumber) / parseFloat(secondNumber);
   result = result.toFixed(2);
   document.getElementById("result").innerHTML = result
}