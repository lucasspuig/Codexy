(function(){
    const questionContainers = [...document.querySelectorAll('.questions__answer')];

    questionContainers.forEach(container =>{
        const title = container.querySelector('.questions__title');
        const answer = container.querySelector('.questions__show');
        const arrow = container.querySelector('.questions__arrow');

        title.addEventListener('click', ()=>{
            // Cerrar todas las otras respuestas
            questionContainers.forEach(otherContainer => {
                if(otherContainer !== container) {
                    const otherAnswer = otherContainer.querySelector('.questions__show');
                    const otherArrow = otherContainer.querySelector('.questions__arrow');
                    otherAnswer.style.height = null;
                    otherArrow.classList.remove('questions__arrow--rotate');
                }
            });

            // Abrir/cerrar la respuesta actual
            if(answer.style.height){
                answer.style.height = null;
                arrow.classList.remove('questions__arrow--rotate');
            } else {
                answer.style.height = answer.scrollHeight + 'px';
                arrow.classList.add('questions__arrow--rotate');
            }
        });
    });
})();