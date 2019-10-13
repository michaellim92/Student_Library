/*
- if login successful, change page to index.html
- if unsuccesful, then display error message with animation "wrong password, please enter password again", empty out password input but keep the email input filled 
- registration page pops out a registration form
- registration must be valid email and password, figure out how to store data into a mysql DB with nodejs
- 
*/

/*use if/else statement for password verification
- if this.email === this.password => {login and change page} */

//keep email - if/else statement 
const keepEmailCheck = document.getElementById("keeplogin").checked

if (keepEmailCheck) {
    /*??? const or let*/ const saveEmail = document.getElementById("email").value;

    document.getElementById("email").textContent = saveEmail;
} else {
    document.getElementById("email").textContent = "";
}


//popup reg form
const openForm = () => {
    document.getElementById("popupreg").style.display = "block";
}

const closeForm = () => {
    document.getElementById("popupreg").style.display = "none";
}


//click "register here" to open form



//make background greyscale if the popupreg is open


//login authentication


