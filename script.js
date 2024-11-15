
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.quiz-button');
    const progressBar = document.querySelector('.progress');

    let progress = 0;

    button.addEventListener('click', () => {
        progress += 20;
        if (progress > 100) progress = 100;
        progressBar.style.width = progress + '%';
    });
});
