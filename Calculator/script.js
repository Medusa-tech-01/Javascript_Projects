let screenValue = "";
let screen = document.querySelector('input');
let buttons = document.querySelectorAll('.btn');

function sqrt(){
    screenValue = Math.sqrt(screenValue);
    screen.value = screenValue;
}
function pie(){
    screenValue = 3.14159265359;
    screen.value = screenValue;
}
function pow(){
    x = screenValue;

}
function log(){
    screenValue = Math.log10(screenValue);
    screen.value = screenValue;
}

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        buttontext = e.target.innerText;
        if(buttontext == '='){
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else if(buttontext == 'AC'){
            screenValue = ""; 
            screen.value = screenValue;
        }
        else if(buttontext == 'DEL'){
            len = screenValue.length;
            screenValue = screenValue.slice(0, len-1);
            screen.value = screenValue;
        }
        else if(buttontext == 'sin'){
            screenValue = Math.sin(screenValue);
            screen.value = screenValue;
        }
        else if(buttontext == 'cos'){
            screenValue = Math.cos(screenValue);
            screen.value = screenValue;
        }
        else if(buttontext == 'tan'){
            screenValue = Math.tan(screenValue);
            screen.value = screenValue;
        }
        else if(buttontext == 'e'){
            screenValue = 2.71828182846;
            screen.value = screenValue;
        }
        else if(buttontext == 'x!'){
            var i, num, f;
            f = 1;
            num = screenValue;
            for(i=1; i<=num; i++){
                f = f*i;
            }
            screen.value = f;
        }
        else if(buttontext == '1/x'){
            screenValue = 1/screenValue;
            screen.value = screenValue;
        }
        else if(buttontext == 'x^2'){
            screenValue = Math.pow(screenValue,2);
            screen.value = screenValue;
        }

        else{
            console.log(e.target) // returns the entire html tag
            // return the text in the tags
            console.log(e.target.innerText)
            screenValue = screenValue + buttontext
            screen.value = screenValue;
        }
        
    })
})



// add backspace
// add brackets