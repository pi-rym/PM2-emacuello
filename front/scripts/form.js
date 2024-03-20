const form = document.getElementById("form");
const btnClear = document.getElementById("clear")
const btnSubmit = document.getElementById("submit");
const id = ["title", "director", "year", "duration", "rating", "genre", "poster"];

const getInputValue = (id) => {
    return document.getElementById(id).value.trim();
};

const checkEmptyFields = (fields) => {
    for (const field of fields) {
        if (getInputValue(field) === "") {
            return true;
        }
    }
    return false;
};

const verifyInput = () => {
    btnSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        const fields = id;
        if (checkEmptyFields(fields)) {
            form.classList.add('was-validated');
            return ;    
        } return;
    }); 
};


const clear = () => {
    btnClear.addEventListener("click", () => {
        id.forEach(x => document.getElementById(x).value='')
    })
}

module.exports = {verifyInput, clear};
