let clickStopbutton = document.getElementById('stopButton');
let RedSignal = document.getElementById('redLight');
let clickReadybutton = document.getElementById('readyButton');
let yellowSignal = document.getElementById('yellowLight');
let clickGobutton = document.getElementById('goButton');
let greenSignal = document.getElementById('greenLight');

function stopButton() {
    clickStopbutton.style.backgroundColor = "#cf1124";
    RedSignal.style.backgroundColor = "#cf1124";
    clickReadybutton.style.backgroundColor = "#1f1d41";
    yellowSignal.style.backgroundColor = "#4b5069";
    clickGobutton.style.backgroundColor = "#1f1d41";
    greenSignal.style.backgroundColor = "#4b5069";
}
function readyButton() {
    clickReadybutton.style.backgroundColor = "#f7c948";
    yellowSignal.style.backgroundColor = "#f7c948";
    clickStopbutton.style.backgroundColor = "#1f1d41";
    RedSignal.style.backgroundColor = "#4b5069";
    clickStopbutton.style.backgroundColor = "#1f1d41";
    RedSignal.style.backgroundColor = "#4b5069";
}
function goButton() {
    clickGobutton.style.backgroundColor = "#199473";
    greenSignal.style.backgroundColor = "#199473";
    clickStopbutton.style.backgroundColor = "#1f1d41";
    RedSignal.style.backgroundColor = "#4b5069";
    clickReadybutton.style.backgroundColor = "#1f1d41";
    yellowSignal.style.backgroundColor = "#4b5069";
}
