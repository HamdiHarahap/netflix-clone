feather.replace();

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    const index = question.getAttribute('data-index');
    const hover = document.querySelector(`.question[data-index='${index}']`)

    question.addEventListener('mouseenter', function() {
        hover.style.backgroundColor = '#414141'
    })

    question.addEventListener('mouseleave', function() {
        hover.style.backgroundColor = '#2d2d2d'
    })

    question.addEventListener('click', function() {
        const answer = document.querySelector(`.answer[data-index='${index}']`);
        const openIcon = document.querySelector(`.open[data-index='${index}']`);
        const closeIcon = document.querySelector(`.x[data-index='${index}']`);

        answer.classList.toggle('alive');
        openIcon.classList.toggle('close');
        closeIcon.classList.toggle('alive');
    });
});
