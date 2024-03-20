const btnClear = document.getElementById("clear")
const id = ["title", "director", "year", "duration", "rate", "genre", "poster"];

const clear = () => {
    btnClear.addEventListener("click", () => {
        id.forEach(x => document.getElementById(x).value='')
    })
}

module.exports = {clear};
