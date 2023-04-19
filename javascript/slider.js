(function(){
    const deslizar = [...document.querySelectorAll('.pagina')]
    const siguiente = document.getElementById("after")
    const anterior = document.getElementById("before")
    let value;

    siguiente.addEventListener('click', ()=>changePosition(1));
    anterior.addEventListener('click', ()=>changePosition(-1));

    function changePosition(cambio){
        const currentElement = parseInt(document.querySelector('.pagina--show').dataset.id);

        value= currentElement;
        value+= cambio;

        if(value==0 || value== deslizar.length+1){
            value = value === 0 ? deslizar.length : 1
        }

        deslizar[currentElement-1].classList.toggle('pagina--show');
        deslizar[value-1].classList.toggle('pagina--show');
    }
})()