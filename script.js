const validator = new window.JustValidate('#form');
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const {form} = document.forms;
function formValue(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
}

let validation = new JustValidate('#form')
validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Enter ur name', 
    },
    {
        rule: 'minLength',
        errorMessage: 'min length is 2',
        value: 2,
    }
])
validation.addField('#email', [
    {
        rule: 'required',
        errorMessage: 'Enter ur email', 
    },
    {
        rule: 'minLength',
        errorMessage: 'This is not email',
        value: 12,
    }
])
validation.addField('#password', [
    {
        rule: 'required',
        errorMessage: 'Enter ur password', 
    },
    {
        rule: 'minLength',
        errorMessage: 'Min password value is 6',
        value: 6,
    }
])
validation.addField('#confirmPassword', [
    {
        rule: 'required',
        errorMessage: 'Enter ur comfirm password', 
    },
    {
        rule: 'minLength',
        errorMessage: '',
        value: 6,
    }
])
if (password === confirmPassword) {
    console.log('Правильно')
}
validation.addField('#tel', [
    {
        rule: 'required',
        errorMessage: 'Enter ur telefon number', 
    },
    {
        rule: 'minLength',
        errorMessage: 'Number phone value is 9 number',
        value: 9,
    }
])