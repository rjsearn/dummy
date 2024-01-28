// script.js

// Include the data file
// Note: Make sure to include this script after the data.js script in your HTML file
// to ensure that the variables are defined before they are used.
// Alternatively, you can use a module system for better organization.

var bannerIndex1 = 0;
var bannerImageLink1 = document.getElementById('bannerImageLink1');
var bannerTargetLink1 = document.getElementById('bannerTargetLink1');

var bannerIndex2 = 0;
var bannerImageLink2 = document.getElementById('bannerImageLink2');
var bannerTargetLink2 = document.getElementById('bannerTargetLink2');

var bannerIndex3 = 0;
var bannerImageLink3 = document.getElementById('bannerImageLink3');
var bannerTargetLink3 = document.getElementById('bannerTargetLink3');

function rotateBanner1() {
    bannerIndex1 = (bannerIndex1 + 1) % banners1.length;
    bannerImageLink1.src = banners1[bannerIndex1].src;
    bannerTargetLink1.href = banners1[bannerIndex1].href;
}

function rotateBanner2() {
    bannerIndex2 = (bannerIndex2 + 1) % banners2.length;
    bannerImageLink2.src = banners2[bannerIndex2].src;
    bannerTargetLink2.href = banners2[bannerIndex2].href;
}

function rotateBanner3() {
    bannerIndex3 = (bannerIndex3 + 1) % banners3.length;
    bannerImageLink3.src = banners3[bannerIndex3].src;
    bannerTargetLink3.href = banners3[bannerIndex3].href;
}

function openBannerLink1() {
    window.open(banners1[bannerIndex1].href, '_blank');
}

function openBannerLink2() {
    window.open(banners2[bannerIndex2].href, '_blank');
}

function openBannerLink3() {
    window.open(banners3[bannerIndex3].href, '_blank');
}

// Change banners every 3000 milliseconds (3 seconds)
var bannerInterval1 = setInterval(rotateBanner1, 3000);
var bannerInterval2 = setInterval(rotateBanner2, 3000);
var bannerInterval3 = setInterval(rotateBanner3, 3000);

// First set of banners event listeners
bannerImageLink1.addEventListener('mouseover', function() { clearInterval(bannerInterval1); });
bannerImageLink1.addEventListener('mouseout', function() { bannerInterval1 = setInterval(rotateBanner1, 3000); });

// Second set of banners event listeners
bannerImageLink2.addEventListener('mouseover', function() { clearInterval(bannerInterval2); });
bannerImageLink2.addEventListener('mouseout', function() { bannerInterval2 = setInterval(rotateBanner2, 3000); });

// Third set of banners event listeners
bannerImageLink3.addEventListener('mouseover', function() { clearInterval(bannerInterval3); });
bannerImageLink3.addEventListener('mouseout', function() { bannerInterval3 = setInterval(rotateBanner3, 3000); });
