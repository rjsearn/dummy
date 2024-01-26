

document.addEventListener('DOMContentLoaded', function () {
    // Check if the screen width is less than a certain threshold for mobile view
    function isMobileView() {
        return window.innerWidth < 800; // Adjust the threshold as needed
    }

    if (isMobileView()) {
        var menuToggle = document.getElementById('mobile-menu-toggle');
        var mainMenu = document.querySelector('.main-menu');

        menuToggle.addEventListener('click', function () {
            if (mainMenu.style.display === 'none' || mainMenu.style.display === '') {
                mainMenu.style.display = 'block';
            } else {
                mainMenu.style.display = 'none';
            }
        });

        // Add event listeners to menu links
        var menuLinks = document.querySelectorAll('.main-menu a');

        menuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                // Hide the menu after a link is clicked
                mainMenu.style.display = 'none';
            });
        });
    }
});
