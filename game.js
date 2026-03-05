// game.js - interact with WASM module

// wait for Emscripten module to be ready
var Module = Module || {};
Module.onRuntimeInitialized = function() {
    const play = Module.cwrap('play', 'number', ['number']);

    const choices = ['Rock', 'Paper', 'Scissors'];
    const resultDiv = document.getElementById('result');

    document.getElementById('choices').addEventListener('click', function(e) {
        const btn = e.target;
        const choice = btn.getAttribute('data-choice');
        if (choice === null) return;
        const user = parseInt(choice, 10);
        const code = play(user);
        const comp = code >> 2;
        const outcome = code & 3;
        let message = `Computer chose ${choices[comp]}. `;
        if (outcome === 0) {
            message += 'You lose!';
        } else if (outcome === 1) {
            message += "It's a draw.";
        } else if (outcome === 2) {
            message += 'You win!';
        } else {
            message = 'Error';
        }
        resultDiv.textContent = message;
    });
};