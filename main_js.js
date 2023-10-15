
// selecte all elements from html page 
let colorBtn = document.querySelector('#color') , 
    clearBtn = document.querySelector('#clean') ,
    eraserBtn = document.querySelector('#eraser') ,
    theStatus = document.querySelector('#status');
// use the eraser 
let useEraser = false ;

// paint  the borde
let mainLi = document.querySelector('.bord') ;
for(let i = 0 ; i < 1504 ; ++ i ) {
    let li = document.createElement('li');
    li.setAttribute('class','paint');
    mainLi.appendChild(li);
}
if(useEraser == false ) {
    theStatus.innerHTML = 'off' ;
    theStatus.style.backgroundColor = 'red' ;
}else {
    theStatus.innerHTML = 'on' ;
    theStatus.style.backgroundColor = 'green' ;
}
// checked the buttun 
eraserBtn.onclick = () => {
    console.log('here')
    if(useEraser) useEraser = false ;
    else useEraser = true ;
    if(useEraser == false ) {
        theStatus.innerHTML = 'off' ;
        theStatus.style.backgroundColor = 'red' ;
    }else {
        theStatus.innerHTML = 'on' ;
        theStatus.style.backgroundColor = 'green' ;
    }
}

document.addEventListener('click' , (ele) => {
    if( ele.target.classList.contains('paint') ) {
        if(!useEraser)ele.target.style.backgroundColor = colorBtn.value;
        else ele.target.style.backgroundColor = 'white';
    }
}) ;

// clean All Squar From Color
let allCiles = document.querySelectorAll('ul li') ;
clearBtn.onclick = () => {
    allCiles.forEach( el => {
        el.style.backgroundColor = 'white';
    })
};




