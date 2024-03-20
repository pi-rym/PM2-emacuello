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
        alertGreen.style.display = 'none';
    }, 6000)
}

const showAlertRed = () => {
    alertRed.style.display = "block";
    setTimeout(function() {
        alertRed.style.display = 'none';
    }, 6000)
}

module.exports = {clear, showAlertGreen,showAlertRed};
