// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Login/Signup Toggle
const loginToggle = document.getElementById('login-toggle');
const signupToggle = document.getElementById('signup-toggle');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginNav = document.getElementById('login-nav');
const logoutNav = document.getElementById('logout-nav');
const logoutLink = document.getElementById('logout-link');

if (loginToggle) {
    loginToggle.addEventListener('click', () => {
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });
}

if (signupToggle) {
    signupToggle.addEventListener('click', () => {
        signupToggle.classList.add('active');
        loginToggle.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });
}

// Authentication
const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
};

const updateNav = () => {
    if (isLoggedIn()) {
        if (loginNav) loginNav.style.display = 'none';
        if (logoutNav) logoutNav.style.display = 'block';
    } else {
        if (loginNav) loginNav.style.display = 'block';
        if (logoutNav) logoutNav.style.display = 'none';
    }
};

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real app, you'd validate credentials here
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'contact.html';
    });
}

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real app, you'd create a new user here
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'contact.html';
    });
}

if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });
}

// Protect Contact Page
if (document.body.classList.contains('contact-page-body')) {
    const contactPage = document.querySelector('.contact-page');
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    } else {
        contactPage.innerHTML = `
            <div class="contact-form-container" data-aos="fade-up">
                <h1>Contact Us</h1>
                <p>Welcome! Please fill out the form below to get in touch with us.</p>
                <form>
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email" required>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>
        `;
    }
}

// Initial setup
updateNav();
