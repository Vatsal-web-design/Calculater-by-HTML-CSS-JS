let b1 = document.getElementsByClassName(".b1");
let b2 = document.getElementsByClassName(".b2");
let b3 = document.getElementsByClassName(".b3");
let b4 = document.getElementsByClassName(".b4");
let b5 = document.getElementsByClassName(".b5");
let b6 = document.getElementsByClassName(".b6");
let b7 = document.getElementsByClassName(".b7");
let b8 = document.getElementsByClassName(".b8");
let b9 = document.getElementsByClassName(".b9");
let b0 = document.getElementsByClassName(".b0");
let bac = document.getElementsByClassName(".bac");
let bde = document.getElementsByClassName(".bde");
let bsum = document.getElementsByClassName(".bsum");
let bdiv = document.getElementsByClassName(".bdiv");
let bplus = document.getElementsByClassName(".bplus");
let bsub = document.getElementsByClassName(".bsub");
let bp = document.getElementsByClassName(".bp");
let beq = document.getElementsByClassName(".beq");
let inp1 = document.getElementById("inp1")



function myFunction1(){
    inp1.value += "1";
}
function myFunction2(){
    inp1.value += "2";
}
function myFunction3(){
    inp1.value += "3";
}
function myFunction4(){
    inp1.value += "4";
}
function myFunction5(){
    inp1.value += "5";
}
function myFunction6(){
    inp1.value += "6";
}
function myFunction7(){
    inp1.value += "7";
}
function myFunction8(){
    inp1.value += "8";
}
function myFunction9(){
    inp1.value += "9";
}
function myFunction0(){
    inp1.value += "0";
}
function myFunctionac(){
    inp1.value = "";
}
function myFunctionde(){
    inp1.value = inp1.value.slice(0,-1);
}
function myFunctionp(){
    inp1.value += "%";
}
function myFunctionplus(){
    inp1.value += "+";
}
function myFunctionsub(){
    inp1.value += "-";
}
function myFunctiondiv(){
    inp1.value += "/";
}
function myFunctionmul(){
    inp1.value += "*";
}
function myFunctiond(){
    inp1.value += ".";
}
function myFunctioneq(){
    inp1.value = eval(inp1.value);
}
