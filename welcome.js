
var currentUser =  localStorage.getItem('currentUser')
console.log(currentUser);
var userName = document.getElementById('userName')

userName.innerHTML='welcome'+currentUser;

function logout(){
     localStorage.removeItem(currentUser); 
    window.location.href='index.html';
    console.log(window.location);
 
}