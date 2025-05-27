const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Toggle the panels
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle Sign Up Form
const signUpForm = document.querySelector('.sign-up form');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = signUpForm.querySelector('input[placeholder="Name"]').value.trim();
    const email = signUpForm.querySelector('input[placeholder="Email"]').value.trim();
    const password = signUpForm.querySelector('input[placeholder="Password"]').value.trim();

    if (name === '' || email === '' || password === '') {
        alert("Please fill in all fields.");
    } else {
        // Simulate signup
        alert(`Account created for ${name}`);
        container.classList.remove("active"); // Switch to login
        signUpForm.reset();

        window.location.href = "/NAFLD/nafld.html";

    }
});

// Handle Sign In Form
const signInForm = document.querySelector('.sign-in form');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signInForm.querySelector('input[placeholder="Email"]').value.trim();
    const password = signInForm.querySelector('input[placeholder="Password"]').value.trim();

    if (email === '' || password === '') {
        alert("Please fill in both email and password.");
    } else {
        // Simulate login
        alert(`Welcome back, ${email}`);
        signInForm.reset();

        window.location.href = "/NAFLD/nafld.html";

    }
});
