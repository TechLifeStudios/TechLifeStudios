document.addEventListener('DOMContentLoaded', function () {
    // Function to load content for Powerful PCs
    function loadPowerfulPcs() {
        // Change background color of selected box
        document.getElementById('high-spec').classList.remove('selected');
        document.getElementById('mid-spec').classList.remove('selected');
        document.getElementById('low-spec').classList.remove('selected');
        document.getElementById('powerful').classList.add('selected');

        // Load content for Powerful PCs
        document.getElementById('dynamic-content').innerHTML = `
            <h2>Powerful PC Content</h2>
            <!-- Add your content specific to Powerful PCs -->
        `;
    }

    // Event listeners for category boxes
    document.getElementById('high-spec').addEventListener('click', function () {
        document.getElementById('high-spec').classList.add('selected');
        document.getElementById('mid-spec').classList.remove('selected');
        document.getElementById('low-spec').classList.remove('selected');
        document.getElementById('powerful').classList.remove('selected');

        document.getElementById('dynamic-content').innerHTML = `
            <h2>High Spec PC Content</h2>
            <!-- Add your content specific to High Spec PC -->
        `;
    });

    document.getElementById('mid-spec').addEventListener('click', function () {
        document.getElementById('high-spec').classList.remove('selected');
        document.getElementById('mid-spec').classList.add('selected');
        document.getElementById('low-spec').classList.remove('selected');
        document.getElementById('powerful').classList.remove('selected');

        document.getElementById('dynamic-content').innerHTML = `
            <h2>Mid Spec PC Content</h2>
            <!-- Add your content specific to Mid Spec PC -->
        `;
    });

    document.getElementById('low-spec').addEventListener('click', function () {
        document.getElementById('high-spec').classList.remove('selected');
        document.getElementById('mid-spec').classList.remove('selected');
        document.getElementById('low-spec').classList.add('selected');
        document.getElementById('powerful').classList.remove('selected');

        document.getElementById('dynamic-content').innerHTML = `
            <h2>Low Spec PC Content</h2>
            <!-- Add your content specific to Low Spec PC -->
        `;
    });

    // Use the correct ID for the Powerful PCs box
    document.getElementById('powerful').addEventListener('click', loadPowerfulPcs);

    // Contact Button Functionality
    document.getElementById('contact-btn').addEventListener('click', function () {
        document.getElementById('overlay').style.display = 'block';
        setTimeout(() => {
            document.getElementById('overlay').style.opacity = '1';
        }, 50);
        document.querySelector('.container').classList.add('blur');
    });

    document.getElementById('close-btn').addEventListener('click', function () {
        document.getElementById('overlay').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('overlay').style.display = 'none';
        }, 300);
        document.querySelector('.container').classList.remove('blur');
    });
});
