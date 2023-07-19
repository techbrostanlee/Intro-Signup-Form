const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const emailAdd = document.querySelector('#email');
const passWord = document.querySelector('#new-password');

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