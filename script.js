// JavaScript Code
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to category boxes
    const highSpecBox = document.getElementById('high-spec');
    const midSpecBox = document.getElementById('mid-spec');
    const lowSpecBox = document.getElementById('low-spec');
    const custombuildBox = document.getElementById('custom-build');
    const dynamicContent = document.getElementById('dynamic-content');

    highSpecBox.addEventListener('click', () => {
        // Change background color of selected box
        highSpecBox.classList.add('selected');
        midSpecBox.classList.remove('selected');
        lowSpecBox.classList.remove('selected');
        custombuildBox.classList.remove('selected');

        // Load content for High Spec PC
        dynamicContent.innerHTML = `
            <h2>High Spec PC Content</h2>
            <!-- Add your content specific to High Spec PC -->
        `;
    });

    midSpecBox.addEventListener('click', () => {
        // Change background color of selected box
        highSpecBox.classList.remove('selected');
        midSpecBox.classList.add('selected');
        lowSpecBox.classList.remove('selected');
        custombuildBox.classList.remove('selected');

        // Load content for Mid Spec PC
        dynamicContent.innerHTML = `
            <h2>Mid Spec PC Content</h2>
            <!-- Add your content specific to Mid Spec PC -->
        `;
    });

    lowSpecBox.addEventListener('click', () => {
        // Change background color of selected box
        highSpecBox.classList.remove('selected');
        midSpecBox.classList.remove('selected');
        lowSpecBox.classList.add('selected');
        custombuildBox.classList.remove('selected');

        // Load content for Low Spec PC
        dynamicContent.innerHTML = `
            <h2>Low Spec PC Content</h2>
            <!-- Add your content specific to Low Spec PC -->
        `;
    });

    custombuildBox.addEventListener('click', () => {
        // Change background color of selected box
        highSpecBox.classList.remove('selected');
        midSpecBox.classList.remove('selected');
        lowSpecBox.classList.remove('selected');
        custombuildBox.classList.add('selected');

        // Load content for Custom Build
        dynamicContent.innerHTML = `
            <h2>Custom Build Content</h2>
            <!-- Add your content specific to Custom Build -->
        `;
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
