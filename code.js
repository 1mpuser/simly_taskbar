let div=document.querySelector('div');
div.addEventListener('dblclick', inputInTask);

function inputInTask(){
    let checkbox=div.querySelector('input[type="checkbox"]');
    let reset=div.querySelector('button');
    let button=reset.cloneNode('true');
    let secondcheckbox=checkbox.cloneNode('true')
    div.removeChild(reset);
    div.removeChild(checkbox);
    let text=div.innerText;
    let input=document.createElement('input');
    input.type='text';
    input.value=text;
    div.innerText='';
    div.appendChild(secondcheckbox);
    div.appendChild(input);
    div.appendChild(button);
    input.addEventListener('change',removeInputInTask); 
}

function doneBox(){
let checkbox=div.querySelector('input[type="checkbox"]');  
}


function removeInputInTask(){
let input=div.querySelector('input[type="text"]');
let text=input.value;
div.removeChild(input);
div.firstElementChild.insertAdjacentHTML('afterEnd', text);    

}