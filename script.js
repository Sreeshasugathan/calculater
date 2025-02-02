var screen = document.getElementById("screen")
var button = document.querySelector("button")
var container = document.querySelector("container")
function buttonclick (value){
    screen.value += value;
}

function clearscreen(){
    screen.value = "";
}

function findresult() {
    var result = eval(screen.value)
    screen.value = result;

}

function deleteLastCharacter() {
screen.value = screen.value.slice(0,-1);

}





