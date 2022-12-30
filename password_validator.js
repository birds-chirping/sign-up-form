const psw = document.getElementById('psw');
const confPsw = document.getElementById('confirmed-psw');
const pswRules = document.querySelector('.psw-rules');
const rules = document.querySelectorAll('li');
const inputs = document.querySelectorAll('input');
const color_valid = getComputedStyle(document.documentElement).getPropertyValue('--form-valid-color');
const color_invalid = getComputedStyle(document.documentElement).getPropertyValue('--form-pswrules-color');


function togglePswRules() {
    if (this.id === 'psw') {
        pswRules.style.visibility = 'visible';
        // pswRules.style.display = 'block';
    } else if (this.id !== 'confirmed-psw') {
        pswRules.style.visibility = 'hidden';
        // pswRules.style.display = 'none';
        rules.forEach( (rule) => { 
            if (rule.firstChild.style.visibility == 'visible') {
                rule.firstChild.style.visibility = 'inherit';
            }
        });
    }
}


function check(statement) {
    statement.style.fontWeight = '900';
    statement.style.color = color_valid; 
    statement.firstChild.style.visibility = 'visible';
}

function uncheck(statement) {
    statement.style.fontWeight = '400';
    statement.style.color = color_invalid; 
    statement.firstChild.style.visibility = 'hidden';
}

function checkPsw() {
    (/(?=.*?[a-z])/).test(psw.value) ? check(rules[0]) : uncheck(rules[0]);
    (/(?=.*?[A-Z])/).test(psw.value) ? check(rules[1]) : uncheck(rules[1]);
    (/(?=.*?\d)/).test(psw.value) ? check(rules[2]) : uncheck(rules[2]);
    (/(?=.{8,})/).test(psw.value) ? check(rules[3]) : uncheck(rules[3]);
    (psw.value === confPsw.value && psw.value) ? check(rules[4]) : uncheck(rules[4]);
    confPsw.setAttribute('pattern', psw.value);
}


function checkConfPsw() {
    (psw.value === confPsw.value && psw.value) ? check(rules[4]) : uncheck(rules[4]);
}


// Show password rules when 'Password' field is selected
// Hide when other input fields are clicked (except 'Confirm password')

inputs.forEach((e) => {
    e.addEventListener('focus', togglePswRules) 
});


// Password validation
psw.setAttribute("pattern", "(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\\d).{8,}");
psw.addEventListener('keyup', checkPsw);
confPsw.addEventListener('keyup', checkConfPsw);
