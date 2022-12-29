const psw = document.getElementById('psw');
const confPsw = document.getElementById('confirmed-psw');
const pswRules = document.querySelector('.psw-rules').style;
const rules = document.querySelectorAll('li');
const inputs = document.querySelectorAll('input');
const color_valid = 'green';
const color_invalid = '#4d4d4d';


function togglePswRules() {
    if (this.id === 'psw') {
        pswRules.visibility = 'visible';
    } else if (this.id !== 'confirmed-psw') {
        pswRules.visibility = 'hidden';
    }
}

function checkPsw() {
    (/(?=.*?[a-z])/).test(psw.value) ? rules[0].style.color = color_valid : rules[0].style.color = color_invalid;
    (/(?=.*?[A-Z])/).test(psw.value) ? rules[1].style.color = color_valid : rules[1].style.color = color_invalid;
    (/(?=.*?\d)/).test(psw.value) ? rules[2].style.color = color_valid : rules[2].style.color = color_invalid;
    (/(?=.{8,})/).test(psw.value) ? rules[3].style.color = color_valid : rules[3].style.color = color_invalid;
    
    confPsw.setAttribute('pattern', psw.value);
}

function checkConfPsw() {
    if (psw.value === confPsw.value && psw.value) {
        rules[4].style.color = color_valid;
    } else {
        rules[4].style.color = color_invalid;
    }
}


// Show password rules when 'Password' field is selected
// Hide when other input fields are clicked (except 'Confirm password')

inputs.forEach((e) => {
    e.addEventListener('click', togglePswRules) 
});


// Password validation
psw.setAttribute("pattern", "(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\\d).{8,}");
psw.addEventListener('keyup', checkPsw);
confPsw.addEventListener('keyup', checkConfPsw);
