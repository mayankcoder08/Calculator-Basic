// console.log("Hello world");

const display = document.getElementById("display");

function appendToDisplay(val){
    display.value += val;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        if(display.value === ''){
            alert("kindlyy enter values!!!")
            display.value ="";
        }
        const res = eval(display.value);
        display.value = res;
    }
    catch(err){
        console.log(error);
    }
}