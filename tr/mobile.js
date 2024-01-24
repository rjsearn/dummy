
        document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
            document.querySelector('.main-menu').classList.toggle('hidden');
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 600) {
                // Remove the 'hidden' class to display the menu on larger screens
                document.querySelector('.main-menu').classList.remove('hidden');
            } else {
                // Add the 'hidden' class to hide the menu on smaller screens
                document.querySelector('.main-menu').classList.add('hidden');
            }
        });
