
function getValue(num){
    // console.log(num);
    var result = document.getElementById("result");
    result.value += num;
}

function clearValue(){
    var result = document.getElementById("result");
    result.value = "";
}

function finalValue(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}