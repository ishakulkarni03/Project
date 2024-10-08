document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname;
    const donateButtonContainer = document.getElementById('donateButtonContainer');
    const contactSectionLink = document.getElementById('contactSectionLink');
    const wrapper = document.querySelector('.wrapper');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.querySelector('.form-box.register');
    const donateButtonNav = document.getElementById('donateButtonNav');
    const backButton = document.getElementById('backButton');



       // Handle login form submission
       loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        fetch('/api/login', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Redirect or handle successful login
            } else {
                // Handle login error
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    // Handle register form submission
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(registerForm);
        fetch('/api/register', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Redirect or handle successful registration
            } else {
                // Handle registration error
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    


    if (currentPage === '/' || currentPage === '/index.html') {
        const donateButton = document.createElement('button');
        donateButton.id = 'donateButtonNav';
        donateButton.textContent = 'Donate';

        donateButton.addEventListener('click', function () {
            window.location.href = 'donations.html';
        });

        donateButtonContainer.appendChild(donateButton);
    }

    if (contactSectionLink) {
        contactSectionLink.addEventListener('click', function (event) {
            event.preventDefault();
            const contactSection = document.getElementById('contactSection');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const donateNowButtons = document.querySelectorAll('.btn1');
    donateNowButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const contactSection = button.getAttribute('href').substring(1);
            const targetSection = document.getElementById(contactSection);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const homeButton = document.getElementById('homeButton');
    const loginButton = document.getElementById('loginButton');
    const aboutLink = document.getElementById('aboutLink');
    const registerLink = document.querySelector('.register-link');

    homeButton.addEventListener('click', function (event) { 
        event.preventDefault();
        wrapper.style.display = wrapper.style.display === 'none' ? 'block' : 'none';
    });

    loginButton.addEventListener('click', function () {
        wrapper.style.display = 'block';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'about.html';
    });

    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        wrapper.style.display = 'block';
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    donateButtonNav.addEventListener('click', function () {
        window.location.href = 'donations.html';
    });

    backButton.addEventListener('click', function () {
        window.history.back();
    });
});
