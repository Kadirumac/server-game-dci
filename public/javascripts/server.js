let feld = document.querySelectorAll('td')


feld.forEach( (elem) =>{
    elem.addEventListener('click',()=>{
      
      elem.value = !elem.value

        if(elem.value==true){
            elem.style.background='#97d8f1'
        } else{elem.style.background='#ebc855'}
        
    })
})

