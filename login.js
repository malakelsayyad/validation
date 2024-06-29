var signInEmail = document.getElementById('signInEmail');
var signInPass = document.getElementById('signInPass');
var signInList = [];

var username= document.getElementById('username')


if (localStorage.getItem('signUpList') !== null) {

    signInList = JSON.parse(localStorage.getItem('signUpList'))
} else {
    signInList = []
}

function isEmpty() {

    if (signUpName.value == "" || signUpEmail.value == "" || signUpPass.value == "") {
        return true
    } else {
        return false
    }
}
function isEmailExist() {
    for (var i = 0; i < signInList.length; i++) {
        if (signInList[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            return true
        }
    }
}



function isLoginEmpty() {

    if (signInPass.value == "" || signInEmail.value == "") {
        return true
    } else {
        return false
    }
}

function clearLogin() {
    signInEmail.value = '';
    signInPass.value = '';
}


function login() {
   
    var email = signInEmail.value
    var pass = signInPass.value;
    var currentUser;
    if (isLoginEmpty()) {
        document.getElementById('loginError').innerHTML = '<span class="text-danger m-3"> Inputs are required</span>'
        return true
    }
    console.log({ email, pass })
    console.log(signInList[0].pass)
    console.log(signInList[0].email)

    for (var i = 0; i < signInList.length; i++) {
        if (signInList[i].email.toLowerCase() == email.toLowerCase() && signInList[i].pass.toLowerCase() == pass.toLowerCase()) {
            
            currentUser=signInList[i].name;
            console.log(currentUser);
            localStorage.setItem('currentUser',JSON.stringify(currentUser))
            window.location.href = "welcome.html"
            break;
           
        }
        else {
            incorrect.innerHTML = '<span class="text-danger m-3">Incorrect password or email</span>';

        }
    }
}