// JavaScript Code
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to category boxes
    const homeTab = document.getElementById('home-tab');
    const businessTab = document.getElementById('business-tab');
    const gamingTab = document.getElementById('gaming-tab');
    const schoolTab = document.getElementById('school-tab');
    const powerfulTab = document.getElementById('powerful-tab');

    homeTab.addEventListener('click', () => {
        // Redirect to Home subdirectory
        window.location.href = './home';
    });

    businessTab.addEventListener('click', () => {
        // Redirect to Business PCs subdirectory
        window.location.href = './business';
    });

    gamingTab.addEventListener('click', () => {
        // Redirect to Gaming PCs subdirectory
        window.location.href = './gaming';
    });

    schoolTab.addEventListener('click', () => {
        // Redirect to School PCs subdirectory
        window.location.href = './school';
    });

    powerfulTab.addEventListener('click', () => {
        // Redirect to Powerful PCs subdirectory
        window.location.href = './powerful-pcs';
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
