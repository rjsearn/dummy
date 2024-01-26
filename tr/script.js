    let currentIndex = 0;

    // Function to display the current image, heading, and link
    function displayCurrentImage() {
      const imageDisplay = document.getElementById("imageDisplay");
      const imageHeading = document.getElementById("imageHeading");
      const startHereLink = document.querySelector(".start-here-link");
      const previousButton = document.getElementById("previousButton");

      imageDisplay.src = images[currentIndex];
      imageHeading.innerText = headings[currentIndex];
      startHereLink.href = links[currentIndex];

      // Check if it's the first image and hide the previous button
      if (currentIndex === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }

      // Check if it's the last image and hide the next button
      const nextButton = document.getElementById("nextButton");
      if (currentIndex === images.length - 1) {
        nextButton.style.display = "none";
      } else {
        nextButton.style.display = "inline-block";
      }
    }

  function showNextImage() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        displayCurrentImage();
      }
    }

    // Function to show the previous image
    function showPreviousImage() {
      if (currentIndex > 0) {
        currentIndex--;
        displayCurrentImage();
      } else {
        previousButton.style.display = "none";
      }
    }

    // Event listener for the next button
    document.getElementById("nextButton").addEventListener("click", showNextImage);

    // Event listener for the previous button
    document.getElementById("previousButton").addEventListener("click", showPreviousImage);

    // Initial display of the first image
    displayCurrentImage();