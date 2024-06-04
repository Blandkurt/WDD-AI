function getAdvice() {
    const question = document.getElementById('question').value.toLowerCase();
    let advice = '';

    if (question.includes('study') || question.includes('learn')) {
        advice = 'Focus on your studies and keep learning new things!';
    } else if (question.includes('exercise') || question.includes('health')) {
        advice = 'Regular exercise and a balanced diet are key to good health.';
    } else if (question.includes('work') || question.includes('job')) {
        advice = 'Work hard and stay dedicated to your job. Success will follow.';
    } else if (question.includes('relationship') || question.includes('friend')) {
        advice = 'Communicate openly and honestly with your friends and loved ones.';
    } else {
        advice = 'I\'m sorry, but I don\'t have advice for that specific question.';
    }

    document.getElementById('advice').innerText = advice;
}