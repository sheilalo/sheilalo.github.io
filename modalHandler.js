// Start looking for clicks once the document loads
$(document).ready(function() {
    // If an image with class "myImg" is clicked
    $('img.contentImg').click(function() {
        // Get some references to things
        var modal = document.getElementById("imgModal");
        var modalImg = document.getElementById("image");
        var captionText = document.getElementById("modal-caption");

        // Show the modal dialog
        modal.style.display = "block";
        // Set the image in the dialog to the image that was clicked on
        modalImg.src = this.src;
        // Set the caption to the Alt-text for the image that was clicked on
        captionText.innerHTML = this.alt;

        // Setup refernce to close button
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            modal.style.display = "none";
        }
    });

    // If the modal thing is clicked
    $('div.modal').click(function() {
        // Hide the modal thing
        this.style.display = "none";
    }).children().click(function(e) {
        // If the thing that was clicked is a child of the modal dialog, do nothing
        // (like if you click the picture or the caption)
        return false;
    });

});
