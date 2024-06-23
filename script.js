document.addEventListener('DOMContentLoaded', function() {
    const eminemForm = document.getElementById('eminem-form');
    const bustaRhymesForm = document.getElementById('busta-rhymes-form');
    // Add similar form variables for other rappers...

    const victorySection = document.getElementById('victory');
    const victoryMessage = document.getElementById('victory-message');

    eminemForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleDiss('Eminem', 'eminem-input');
    });

    bustaRhymesForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleDiss('Busta Rhymes', 'busta-rhymes-input');
    });

    // Add similar event listeners for other rappers...

    function handleDiss(rapperName, inputId) {
        const inputText = document.getElementById(inputId).value.trim();
        if (inputText !== '') {
            displayVictoryMessage(rapperName);
        }
    }

    function displayVictoryMessage(rapperName) {
        victoryMessage.textContent = `Congratulations, you have defeated ${rapperName}.`;
        victorySection.style.display = 'block';
        animateConfetti();
    }

    function animateConfetti() {
        // Code to animate confetti goes here
        // Example: This could use a library like confetti-js
    }
});
