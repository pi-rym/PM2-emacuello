const btnClear = document.getElementById("clear");
const id = ["title", "director", "year", "duration", "rate", "genre", "poster"];
const alertGreen = document.getElementById('alertGreen');
const alertRed = document.getElementById('alertRed');


const clear = () => {
    btnClear.addEventListener("click", () => {
        id.forEach(x => document.getElementById(x).value='')
    })
}

const showAlertGreen = () => {
    alertGreen.style.display = "block";
    setTimeout(function() {
        alertGreen.classList.add('againHidden');
    }, 6000)
    setTimeout(function() {
        alertRed.classList.remove('againHidden');
    }, 500)
}

const showAlertRed = () => {
    alertRed.style.display = "block";
    setTimeout(function() {
        alertRed.classList.add('againHidden');
    }, 6000)
    setTimeout(function() {
        alertRed.classList.remove('againHidden');
    }, 500);
}

module.exports = {clear, showAlertGreen,showAlertRed};
