const centerBox = document.querySelector('.centerBox');
const forms = document.querySelector('.formc');

//const pass = document.querySelector('input[name="password"]')
//const passConf = document.querySelector('input[name="confPass"]')
const error = document.querySelectorAll('.error')


function checkPassword() {
    const test = document.querySelector('#confPass');
    if (document.getElementById('pass').value != 
    document.getElementById('confPass').value) {
        test.classList.add("error")
    }
    else {
        //document.getElementById('confPass').style.borderColor = 'red';
        test.classList.remove("error")
    }
}