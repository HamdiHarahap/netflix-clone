feather.replace();

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        const answer = document.querySelector(`.answer[data-index="${index}"]`);
        const openIcon = document.querySelector(`.open[data-index="${index}"]`);
        const closeIcon = document.querySelector(`.x[data-index="${index}"]`);

        answer.classList.toggle('alive');
        openIcon.classList.toggle('close');
        closeIcon.classList.toggle('alive');
    });
});
