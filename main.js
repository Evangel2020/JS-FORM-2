const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const statesoforigin = document.getElementById('statesoforigin');
const dateofbirth = document.getElementById('dateofbirth');
const country = document.getElementById('country');


//apply variables for date conditions

let currentDate = new Date();
let start = new Date(2020,8,29,00,00);
let end =new Date(2020,8,31,11,59,59);

//define condition for my input values

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkinputs();
});

function checkinputs() {
    //get the values from the inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const statesoforiginValue = statesoforigin.value;
    const dateofbirthValue = dateofbirth.value.trim();
    const countryValue = country.value;

    if(fnameValue == '') {
        //show error
        //add error class
        setErrorFor(fname, 'First name cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(fname);
    }
    if(lnameValue == '') {
        //show error
        //add error class
        setErrorFor(lname, 'Last name cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(lname);
    }
    if(emailValue == '') {
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(email);
    }
    if(mobileValue == '') {
        //show error
        //add error class
        setErrorFor(mobile, 'mobile cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(mobile);
    }
    if(statesoforiginValue == '') {
        //show error
        //add error class
        setErrorFor(statesoforigin, 'statesoforigin cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(statesoforigin);
    }
    if(dateofbirthValue == '') {
        //show error
        //add error class
        setErrorFor(dateofbirth, 'dateofbirth cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(dateofbirth);
    }
    if(countryValue == '') {
        //show error
        //add error class
        setErrorFor(country, 'country cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(country);
    }

    //apply registration period
    if(currentDate >= start && currentDate <= end) {
        alert('Registration successful');
        return true;
    }
    else {
        alert('Registration has ended');
        return false;
    }
}

function setErrorFor(input,message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}