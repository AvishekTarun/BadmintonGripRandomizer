const words = ['Forehand', 'Backhand', 'Bevel', 'Panhandle'];
let intervalId;

document.getElementById('startButton').onclick = startReading;
document.getElementById('stopButton').onclick = stopReading;

function startReading() {
    if (intervalId) return; // If already started, do nothing
    intervalId = setInterval(readWord, randomInterval());
}

function stopReading() {
    clearInterval(intervalId);
    intervalId = null;
}

function readWord() {
    let word = getBiasedRandomWord();
    document.getElementById('wordDisplay').innerText = word;
    speechSynthesis.speak(new SpeechSynthesisUtterance(word));

    // Reset the interval
    clearInterval(intervalId);
    intervalId = setInterval(readWord, randomInterval());
}

function getBiasedRandomWord() {
    // Increase the chance of selecting 'Forehand'
    const extendedWords = ['Forehand', 'Forehand', 'Backhand', 'Bevel', 'Panhandle']; // 'Forehand' appears more
    const randomIndex = Math.floor(Math.random() * extendedWords.length);
    return extendedWords[randomIndex];
}

function randomInterval() {
    // Random time between 0.8 seconds (800 milliseconds) and 2.5 seconds (2500 milliseconds)
    return Math.random() * (2500 - 800) + 800;
}
