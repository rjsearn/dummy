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