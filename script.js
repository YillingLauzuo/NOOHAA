const footerText = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footerText.innerHTML = `&copy; ${currentYear} NOOHAA. All rights reserved.`;



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});




const form = document.getElementById('contactForm');
const popup = document.getElementById('custom-popup');
const popupText = document.getElementById('popup-text');

form.addEventListener('submit', function(e) {

    e.preventDefault(); 
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    

    if (name === "" || email === "" || message === "") {
        popupText.textContent = "Please fill out all fields.";
        popup.style.display = "flex"; 
        return;
    }
    
    if (!email.includes('@')) {
        popupText.textContent = "Please enter a valid email address.";
        popup.style.display = "flex"; 
        return;
    }
    
    popupText.textContent = `Thank you, ${name}! Your message has been sent.`;
    popup.style.display = "flex";
    form.reset();
});