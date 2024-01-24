document.addEventListener('DOMContentLoaded', function () {
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
});
