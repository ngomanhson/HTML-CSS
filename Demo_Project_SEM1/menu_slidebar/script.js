let listElements = document.querySelectorAll('.acc-link');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        if (listElement.classList.contains('acc-active')){
            listElement.classList.remove('acc-active');
        }else{
            listElements.forEach (listE => {
                listE.classList.remove('acc-active');
            })
            listElement.classList.toggle('acc-active');
        }
    })
});