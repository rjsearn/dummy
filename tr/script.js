let currentIndex = 0;
let currentSet = 0;

    function showNextImage() {
        if (currentIndex < getCurrentSetLength() - 1) {
            currentIndex = (currentIndex + 1) % getCurrentSetLength();
        document.getElementById("displayedImage").src = images[currentSet][currentIndex];
        document.querySelector(".start-here-link").href = links[currentSet][currentIndex];
        updateHeading();
       } 
        
    }
    	
	function showPreviousImage() {
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

 

