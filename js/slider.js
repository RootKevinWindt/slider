//start point
var slidePage = 1;

//variable for de slides start with 1
showSlides(slidePage);

//function to go to next image
function plusSlide(image){
    //slidepage + image means next image or previous image
    showSlides(slidePage += image);
}

function showSlides(image){
    //make empty variable
    var i;
    //connect images to variable
    var slides = document.getElementsByClassName("slideshow__slides");
    //if there is no more slide to go to, go back to slide 1
    if (image > slides.length) {slidePage = 1}
    //if there are more slides, go to next slide
    if (image < 1) {slidePage = slides.length}
    //let image slider go on for ever with a loop
    for (i = 0; i < slides.length; i++){
        //don't display all images
        slides[i].style.display = "none";
    }
    //if 1 image is being displayed block others
    slides[slidePage-1].style.display = "block";
}








