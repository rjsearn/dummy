let currentIndex = 0;
let currentSet = 0;

  function showNextImage() {
    if (currentIndex < getCurrentSetLength() - 1) {
        currentIndex = (currentIndex + 1) % getCurrentSetLength();
    } else {
        // If the current image is the last one, hide the "Next Page" button
        document.getElementById("nextButton").style.display = "none";
    }

    document.getElementById("displayedImage").src = images[currentSet][currentIndex];
    document.querySelector(".start-here-link").href = links[currentSet][currentIndex];
    updateHeading();
}

function showPreviousImage() {
    // Always show the "Next Page" button when going back to a previous image
    document.getElementById("nextButton").style.display = "block";

    if (currentIndex > 0) {
        currentIndex = (currentIndex - 1) % getCurrentSetLength();
        document.getElementById("displayedImage").src = images[currentSet][currentIndex];
        document.querySelector(".start-here-link").href = links[currentSet][currentIndex];
        updateHeading();
    }
}

    function updateHeading() {
        document.getElementById("imageHeading").textContent = headings[currentSet][currentIndex];
    }

    function changeContent(set) {
        currentSet = set - 1;
        currentIndex = 0;
        document.getElementById('displayedImage').src = images[currentSet][currentIndex];
        document.querySelector(".start-here-link").href = links[currentSet][currentIndex];
        updateHeading();
    }

    changeContent(1);

    function getCurrentSetLength() {
        return images[currentSet].length;
    }

 

