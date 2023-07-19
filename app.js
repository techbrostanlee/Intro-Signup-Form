const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const emailAdd = document.querySelector('#email');
const passWord = document.querySelector('#new-password');
const firstNameError = document.querySelector('#firstname-error');
const lastNameError = document.querySelector('#lastname-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#new-password-error');


const btnSubmit = document.querySelector('.btn');

btnSubmit.addEventListener('submit', (e)=>{
    e.preventDefault();
    
});


const isRequired = value => value === "" ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};



const checkFirstName =()=>{
    let valid = false;
    const min = 3;
    const max = 25;
    const firstname = firstName.value.trim()

    if(!isRequired(firstname)){
        firstNameError.innerText = 'FirstName cannot be blank.'
        firstNameError.style.color ='red';
        firstName.style.border = '1.8px solid red'


    }
    else if(!isBetween(firstname.length, min, max)){
        firstNameError.innerText = 'Firstname must be between ${min} and ${max} characters.'
        firstNameError.style.color ='red';
        firstName.style.border = '1.8px solid red'
    }
    else{
        valid = true;
    }

}

const checkLastName =()=>{
    let valid = false;
    const min = 3;
    const max = 25;
    const lastname = lastName.value.trim()

    if(!isRequired(lastname)){
        lastNameError.innerText = 'lastName cannot be blank.'
        lastNameError.style.color ='red';
        lastName.style.border = '1.8px solid red'


    }
    else if(!isBetween(lastname.length, min, max)){
        lastNameError.innerText = 'Lastname must be between ${min} and ${max} characters.'
        lastNameError.style.color ='red';
        lastName.style.border = '1.8px solid red'
    }
    else{
        valid = true;
    }

}

const checkEmail= () =>{
    let valid = false;
    const email = emailAdd.value.trim()
    if(!isRequired(email)){
        emailError.innerText = 'email cannot be blank';
        emailError.style.color = 'red';
        emailAdd.style.border = '1.8px solid red';
    }
    else if(!isEmailValid(email)){
        emailError.innerText = 'provide valid email';
        emailError.style.color = 'red';
        emailAdd.style.border = '1.8px solid red';

    }
    else{
        valid = true;
    }

}

const checkPassword = () =>{
    let valid = false;
    const password = passWord.value.trim();
    if(!isRequired(password)){
        passwordError.innerText = 'password cannot be blank';
        passwordError.style.color = 'red';
        passWord.style.border = '1.8px solid red';

    }
    else if(!isPasswordSecure(password)){
        passwordError.innerText = 'password must include 8 characters, at least one uppercase, lowercase, number and special character';
        passwordError.style.color = 'red';
        passWord.style.border = '1.8px solid red';

    }

    else{
        valid = true;
    }

    
}