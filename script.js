// Select all image buttons
const buttons = document.querySelectorAll('.image-button');
let eliminated = []; // Track eliminated characters for game logic

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const character = this.getAttribute('data-character');
        
        if (this.classList.contains('eliminated')) {
            // Remove overlay (bring back to play)
            this.classList.remove('eliminated');
            eliminated = eliminated.filter(char => char !== character);
            console.log(`${character} is back in play! Remaining: ${24 - eliminated.length}`);
        } else {
            // Add white overlay (eliminate)
            this.classList.add('eliminated');
            eliminated.push(character);
            console.log(`${character} eliminated. Remaining: ${24 - eliminated.length}`); // Assumes 24 characters
        }
    });
});

const dock =document.getElementById('rst').addEventListener('click', resetGame)
function resetGame() {
    buttons.forEach(button => button.classList.remove('eliminated'));
    eliminated = [];
    console.log('Game reset!');
}

