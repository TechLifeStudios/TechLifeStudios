// JavaScript Code
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to category boxes
    const highSpecBox = document.getElementById('high-spec');
    const midSpecBox = document.getElementById('mid-spec');
    const lowSpecBox = document.getElementById('low-spec');
    const powerfulBox = document.getElementById('powerful');
    const dynamicContent = document.getElementById('dynamic-content');

    highSpecBox.addEventListener('click', () => {
        // Redirect to Home page
        window.location.href = './';
    });

    midSpecBox.addEventListener('click', () => {
        // Redirect to About page
        window.location.href = './about';
    });

    lowSpecBox.addEventListener('click', () => {
        // Redirect to Contact page
        window.location.href = './contact';
    });

    powerfulBox.addEventListener('click', () => {
        // Redirect to Powerful PCs page
        window.location.href = './powerful-pcs'; // Change this to the actual subdirectory name
    });

    // Contact Button Functionality
    const contactBtn = document.getElementById('contact-btn');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    const mainContent = document.querySelector('.container');

    contactBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 50);
        mainContent.classList.add('blur');
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
        mainContent.classList.remove('blur');
    });
});
