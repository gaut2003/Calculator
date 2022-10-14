let valEl = document.getElementById("val")
let resEl = document.getElementById("res")
function clearer(){
    valEl.innerText = ""
    resEl.innerText = ""
}
function adder(k){
    valEl.innerText += k
    if(k=='*' || k=='+' || k=='-' || k=='/' || k=='%'){
        compute(0)
    }
}
function compute(is){
    let temp = valEl.innerText, i
    let t = temp[temp.length-1];
    for(i=0;i<temp.length-1;i++){
        if((temp[i]=='*' || temp[i]=='+' || temp[i]=='-' || temp[i]=='/' || temp[i]=='%') && i!=0){
            break;
        }
    }
    if(i!=temp.length-1){
        let part1 = parseFloat(temp.substring(0,i));
        let part2 = parseFloat(temp.substring(i+1));
        let k5 = temp[i];
        if(k5=='+'){
            resEl.innerText = (part1)+(part2);
        }else if(k5=='-'){
            resEl.innerText = (part1)-(part2);
        }else if(k5=='*'){
            resEl.innerText = (part1)*(part2);
        }else if(k5=='%'){
            resEl.innerText = (part1)%(part2);
        }else{
            resEl.innerText = (part1)/(part2);
        }
        resEl.innerText = '= ' + resEl.innerText
        if(!is){
            valEl.innerText = resEl.innerText + t
            if(valEl.innerText[0] == '='){
                valEl.innerText = valEl.innerText.substring(1)
            }
        } 
    }
}

// Preloader

var loader = document.querySelector(".loader")
window.addEventListener("load", faded);

function faded(){
    loader.classList.add("disppear");
}

//used keydown inseatd of keypress....in order to use the backspace key
document.addEventListener('keydown', keypress_event);



function keypress_event(e) {
    if ('0123456789*+-/%().'.includes(e.key)) adder(e.key);
    else if ('=' === e.key) compute(1);

    //added the enter key as well to get the result
    else if ('Enter' === e.key) compute(1);
       //backspace for removing the last input
       if (e.key === "Backspace") {
        var resultInput = valEl.innerText;
        //remove the last element in the string
        valEl.innerText = resultInput.substring(0, valEl.innerText.length - 1);
      }     
         // Delete key for removing all the input
    if (e.key === "Delete") {
        var resultInput = valEl.innerText;
        //remove all elements in the string
        valEl.innerText = 0
      }
}