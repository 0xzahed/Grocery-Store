
let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  login.classList.toggle('active');
}


/*for search btn*/

let form = document.querySelector('.search-form');
let searchInput = form.querySelector('input[type="text"]');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    searchInput.value = ''; 
});

// login form 
function toggleLoginForm() {
  var loginForm = document.getElementById("login-form");
  if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
  } else {
      loginForm.style.display = "none";
  }
}

function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,32}$/;
  if (!password.match(passwordRegex)) {
      alert(
          "Please enter a password with at least 8 characters, including one capital letter, one special symbol, and one number."
      );
  } else {
      
      alert("Login validation successful!");
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
  }
}

function validateSignup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

 
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("All fields are required.");
  } else if (!email.match(emailRegex)) {
    alert("Please enter a valid email address.");
  } else if (!password.match(passwordRegex)) {
    alert("Password must contain at least 8 characters, one lowercase letter, one uppercase letter, and one digit.");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match. Please re-enter the same password.");
  } else {
    
    alert("Signup successful!");
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
}
}