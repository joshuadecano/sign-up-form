const pass = document.getElementById('pass');
const passConf = document.getElementById('passConf');
const error = document.querySelectorAll('.error');
const buttons = document.getElementById('button');

function checkPassword() {
    const test = document.querySelector('#confPass');
    if (document.getElementById('pass').value != 
    document.getElementById('confPass').value) {
        test.classList.add("error");
        buttons.disabled = true;
    }
    else {
        test.classList.remove("error");
        buttons.disabled = false;
    }
}