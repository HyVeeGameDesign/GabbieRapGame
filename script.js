document.addEventListener('DOMContentLoaded', function() {
    const eminemForm = document.getElementById('eminem-form');
    const bustaRhymesForm = document.getElementById('busta-rhymes-form');
    const nasForm = document.getElementById('nas-form');
    const aTribeCalledQuestForm = document.getElementById('a-tribe-called-quest-form');
    const digablePlanetsForm = document.getElementById('digable-planets-form');
    const notoriousDavidForm = document.getElementById('notorious-david-form');

    const victorySection = document.getElementById('victory');
    const victoryMessage = document.getElementById('victory-message');
    const confettiCanvas = document.getElementById('confetti');

    eminemForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleDiss('Eminem', 'eminem-input');
    });

    bustaRhymesForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleDiss('Busta Rhymes', 'busta-rhymes-input');
    });

    nasForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleDiss('Nas', 'nas-input');
    });

    aTribeCalledQuestForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleDiss('A Tribe Called Quest', 'a-tribe-called-quest-input');
    });

    digablePlanetsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleDiss('Digable Planets', 'digable-planets-input');
    });

    notoriousDavidForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleDiss('The Notorious D.A.V.I.D.', 'notorious-david-input', true);
    });

    function handleDiss(rapperName, inputId, isFinalBoss = false) {
        const inputText = document.getElementById(inputId).value.trim();
        if (inputText !== '') {
            displayVictoryMessage(rapperName, isFinalBoss);
        }
    }

    function displayVictoryMessage(rapperName, isFinalBoss) {
        victoryMessage.textContent = `Congratulations, you have defeated ${rapperName}.`;

        if (isFinalBoss) {
            animateConfetti();
        }

        victorySection.style.display = 'block';
    }

    function animateConfetti() {
        // Implement confetti animation logic here
        // Example using confetti-js library:
        confetti.create(confettiCanvas, {
            resize: true,
            useWorker: true,
        })({ particleCount: 200, spread: 200 });
    }
});

