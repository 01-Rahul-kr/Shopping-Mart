let cloths = document.getElementById("cloths");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

cloths.addEventListener("click", function(){
    cloths.style.color="red";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})

reviews.addEventListener("click", function(){
    cloths.style.color="white";
    reviews.style.color="red";
    blogs.style.color="white";
    contacts.style.color="white";
})

blogs.addEventListener("click", function(){
    cloths.style.color="white";
    reviews.style.color="white";
    blogs.style.color="red";
    contacts.style.color="white";
})

contacts.addEventListener("click", function(){
    cloths.style.color="white";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="red";
})

// login || SignUp
function toggleForm() {
  const loginForm = document.querySelector('.signin');
  const signupForm = document.querySelector('.signup');

  
  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  }
}

function toggleForm() {
    const signin = document.querySelector('.signin');
    const signup = document.querySelector('.signup');
    
    if (signin.style.display === 'none') {
      signin.style.display = 'block';
      signup.style.display = 'none';
    } else {
      signin.style.display = 'none';
      signup.style.display = 'block';
    }
}

let login = document.getElementById("login");

login.addEventListener("click", function(){
  document.querySelector(".loginPage").style.display="block";
})

//Contact Us

document.getElementById("Submit").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("Massage").value.trim();

  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
  }

  if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("Massage").value = "";
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}