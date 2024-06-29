var signInEmail= document.getElementById('signInEmail');
var signInPass= document.getElementById('signInPass');
var signInList;

var signUpName= document.getElementById('signUpName');
var signUpEmail= document.getElementById('signUpEmail');
var signUpPass= document.getElementById('signUpPass');
var signUpList=[];



if (localStorage.getItem('signUpList') != null) {
    signUpList = JSON.parse(localStorage.getItem('signUpList'));

  }
  else {
    signUpList = [];
  }



function isEmpty() {

    if (signUpName.value == "" || signUpEmail.value == "" || signUpPass.value == "") {
        return true
    } else {
        return false
    }
}
function isEmailExist() {
    for (var i = 0; i < signUpList.length; i++) {
        if (signUpList[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            return true
        }
    }
}




function signUp() {

    if (isEmpty() == true) {
        document.getElementById('emailExist').innerHTML ='<span class="text-danger m-3">All inputs is required</span>'
        return true
    }

    var emails={
        name:signUpName.value,
        email : signUpEmail.value,
        pass:signUpPass.value,
    }
   
    if (isEmailExist()) {
        console.log(isEmailExist())

        document.getElementById('emailExist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    
        
    } else {


        signUpList.push(emails)
        localStorage.setItem('signUpList', JSON.stringify(signUpList))
        document.getElementById('emailExist').innerHTML = '<span class="text-success m-3">Success</span>'
        clearSignUp();
    }
    console.log(emails);
    console.log(currentUser)
}     

function clearSignUp() {
    signUpName.value = '';
    signUpEmail.value='';
    signUpPass.value='';
}