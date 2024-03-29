document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to category boxes
    const highSpecBox = document.getElementById('high-spec');
    const midSpecBox = document.getElementById('mid-spec');
    const lowSpecBox = document.getElementById('low-spec');
    const powerfulBox = document.getElementById('powerful');

    const dynamicContent = document.getElementById('dynamic-content');

    highSpecBox.addEventListener('click', () => {
        highSpecBox.classList.add('selected');
        midSpecBox.classList.remove('selected');
        lowSpecBox.classList.remove('selected');
        powerfulBox.classList.remove('selected');

        dynamicContent.innerHTML = `
            <h2>Gaming PCs Content</h2>
            <!-- Add your content specific to Gaming PCs -->
        `;
    });

    midSpecBox.addEventListener('click', () => {
        highSpecBox.classList.remove('selected');
        midSpecBox.classList.add('selected');
        lowSpecBox.classList.remove('selected');
        powerfulBox.classList.remove('selected');

        dynamicContent.innerHTML = `
            <h2>Business PCs Content</h2>
            <!-- Add your content specific to Business PCs -->
        `;
    });

    lowSpecBox.addEventListener('click', () => {
        highSpecBox.classList.remove('selected');
        midSpecBox.classList.remove('selected');
        lowSpecBox.classList.add('selected');
        powerfulBox.classList.remove('selected');

        dynamicContent.innerHTML = `
            <h2>School PCs Content</h2>
            <!-- Add your content specific to School PCs -->
        `;
    });

    powerfulBox.addEventListener('click', () => {
        highSpecBox.classList.remove('selected');
        midSpecBox.classList.remove('selected');
        lowSpecBox.classList.remove('selected');
        powerfulBox.classList.add('selected');

        dynamicContent.innerHTML = `
            <h2>Powerful PCs Content</h2>
            <!-- Add your content specific to Powerful PCs -->
        `;
    });

    // Contact Button Functionality
    const contactBtn = document.getElementById('contact-btn');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    const mainContent = document.querySelector('.container');

    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
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

    // Function to handle subdirectory redirection
    function redirectToSubdirectory(subdirectory) {
        const currentLocation = window.location.href;
        const baseUrl = currentLocation.split('/').slice(0, 3).join('/');
        window.location.href = `${baseUrl}/${subdirectory}`;
    }

    // Home Button Redirection
    const homeBtn = document.querySelector('.nav-link.home');
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        redirectToSubdirectory('');
    });

    // Contact Button Redirection
    const contactLink = document.querySelector('.nav-link.contact');
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        redirectToSubdirectory('contact');
    });
});
