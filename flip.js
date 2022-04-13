// on click class heads change image
let count = 0;
function clickImage() {
    // change src of image
    var image = document.getElementsByClassName("heads");

    if (count%2 == 0) {
        image[0].style.transition = "transform 1s";
        image[0].src = "images/Reshu Image 2.jpeg";
        image[0].style.transform = "rotateY(-180deg)";
    }
    else {
        image[0].style.transform = "rotateY(0deg)";
        image[0].style.transition = "transform 1s";
        image[0].src = "images/Reshu rp.jpeg";
    }
    count++;
}

let vcount = 1054;
function incCount() {
    vcount++;
    var c = document.getElementsByClassName("count");
    c[0].innerHTML = vcount;
}