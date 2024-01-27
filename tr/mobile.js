/* Mobile Menu Toggle */
function toggleMenu() {
            var mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.style.display = (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') ? 'block' : 'none';
        }

        window.addEventListener('click', function(e) {
            var mobileMenu = document.getElementById('mobileMenu');
            var mobileMenuToggle = document.getElementById('mobile-menu-toggle');

            if (mobileMenu.style.display === 'block' && e.target !== mobileMenu && e.target !== mobileMenuToggle && !mobileMenu.contains(e.target)) {
                mobileMenu.style.display = 'none';
            }
});

/* Main Menu Highlight */
document.addEventListener("DOMContentLoaded", function () {
            // Get the current page URL
            var currentPage = window.location.href;

            // Select all menu links
            var menuLinks = document.querySelectorAll('.main-menu a');

            // Iterate through each link
            menuLinks.forEach(function (link) {
                // Check if the link's href matches the current page URL
                if (link.href === currentPage) {
                    // Add 'active' class to the link if it matches
                    link.classList.add('active');
                }
            });
});

/* Mobile Menu Highlight */
document.addEventListener("DOMContentLoaded", function () {
            // Get the current page URL
            var currentPage = window.location.href;

            // Select all menu links
            var menuLinks = document.querySelectorAll('.mobile-menu a');

            // Iterate through each link
            menuLinks.forEach(function (link) {
                // Check if the link's href matches the current page URL
                if (link.href === currentPage) {
                    // Add 'active' class to the link if it matches
                    link.classList.add('active');
                }
            });
});
