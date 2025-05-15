
const correctAnswer = "Learning English with artificial intelligence";
let selectedOption = null;
const options = document.querySelectorAll('.option');
const progressBar = document.querySelector('.progress-bar');

options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedOption = option;
    });
});

function checkAnswer() {
    if (!selectedOption) {
        alert('Пожалуйста, выберите вариант ответа!');
        return;
    }

    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else {
            option.classList.remove('correct');
        }
    });

    if (selectedOption.textContent === correctAnswer) {
        progressBar.style.width = '100%';
        setTimeout(() => {
            alert('Поздравляем! Правильный ответ!');
        }, 500);
    } else {
        selectedOption.classList.add('wrong');
        setTimeout(() => {
            alert('Попробуйте еще раз!');
        }, 500);
    }
}

function resetQuiz() {
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'wrong');
    });
    selectedOption = null;
    progressBar.style.width = '0%';
}
