document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    const resultSection = document.getElementById('result');
    let currentStep = 0;

    questions.forEach((question) => {
        const buttons = question.querySelectorAll('.quiz-button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                question.style.display = 'none';
                currentStep++;
                const nextQuestion = document.querySelector(`.question[data-step="${currentStep + 1}"]`);
                if (nextQuestion) {
                    nextQuestion.style.display = 'block';
                } else {
                    resultSection.style.display = 'block';
                }
            });
        });
    });
});
