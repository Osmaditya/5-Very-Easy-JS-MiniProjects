let timerDisplay = document.querySelector(".timerDisplay");

let msec = 0;
let secs = 0;
let mins = 0;


let timerId = null;     // Timer ko control karne ke liye variable

let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");

//START BUTTON
startBtn.addEventListener("click", () => {
    if (timerId != null) {    //// Agar timer already chal raha hai to usse clear karo
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);     //1msec
});

//STOP BUTTON
stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
});

//RESET BUTTON
resetBtn.addEventListener("click", () => {

    clearInterval(timerId); // Timer ko stop kar dete hain

    timerDisplay.innerHTML = `00:00:00`;    // Display ko reset karte hain

    msec = secs = mins = 0; // Saari values 0 set kar dete hain
});


// Actual timer ka kaam yahan hota hai
function startTimer() {
    msec++;  // Millisecond badh raha hai

    // Agar 100 msec ho gaye to 1 second complete
    if (msec == 100) {
        msec = 0;
        secs++;  // Seconds badhao

        // Agar 60 seconds ho gaye to 1 minute complete
        if (secs == 60) {
            secs = 0;
            mins++;  // Minutes badhao
        }
    }

    // Display ke liye values ko 2-digit format me convert karte hain
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    // Timer ke display ko update karte hain
    timerDisplay.innerHTML = `${minsString}:${secsString}:${msecString}`
};