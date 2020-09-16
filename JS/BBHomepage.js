/*CODE FROM TUTORIALS ON YOUTUBE:
https://www.youtube.com/watch?v=VYsVOamdB0g
https://www.youtube.com/watch?v=gBzsE0oieio&t=2498s
*/

let rightButton = document.getElementsByClassName("carousel_button--right")[0]

let leftButton = document.getElementsByClassName("carousel_button--left")[0]

let carousel = document.getElementById("carousel_track")

let carouselImages = Array.from(document.getElementsByClassName("carousel_image"))

const imgWidth = carouselImages[0].getBoundingClientRect().width;

// Arranging the slides next to one another
const setImgPosition = (img, index) => {
    img.style.left = imgWidth * index + "px";
};

carouselImages.forEach(setImgPosition);
carouselImages[0].classList.add('active');
/* This I did on my own after working with linked lists in CS 260 */

function getSentinels (arr) {
    //Sentinels are used to make the carousel loop we set a front and back sentinel
    let frontSentinel = arr[0];
    let backSentinel = Array.from(arr)[Array.from(carouselImages).length - 1];
    frontSentinel.classList.add('front-sentinel');
    backSentinel.classList.add('back-sentinel');
}

getSentinels(carouselImages)

/*CODE FROM TUTORIALS ON YOUTUBE:
https://www.youtube.com/watch?v=VYsVOamdB0g
https://www.youtube.com/watch?v=gBzsE0oieio&t=2498s
*/
rightButton.addEventListener('click', event =>{
    let cur = document.querySelector('.active');
    let next = cur.nextElementSibling

    if (next == null) {
        // if there is not a next element sibling we refer to the sentinel
        let revolver = document.querySelector('.front-sentinel');
        let move = revolver.style.left;
        carousel.style.transform = 'translateX(-' + move + ')';
        cur.classList.remove('active')
        revolver.classList.add('active')
        return 
    }
    else {
        let move = next.style.left
        carousel.style.transform = 'translateX(-' + move + ')';
        cur.classList.remove('active');
        next.classList.add('active');
    }
});

/*CODE FROM TUTORIALS ON YOUTUBE:
https://www.youtube.com/watch?v=VYsVOamdB0g
https://www.youtube.com/watch?v=gBzsE0oieio&t=2498s
*/
leftButton.addEventListener('click', event =>{
    let current = document.querySelector('.active');
    let prev = current.previousElementSibling

    if (prev == null) {
        // if there is not a prev element sibling we refer to the sentinel
        let revolver = document.querySelector('.back-sentinel');
        let move = revolver.style.left;
        carousel.style.transform = 'translateX(-' + move + ')';
        current.classList.remove('active');
        revolver.classList.add('active');
        return
    }
    else {
        let movement = prev.style.left
        carousel.style.transform = 'translateX(-' + movement + ')';
        current.classList.remove('active');
        prev.classList.add('active');
    }
});

/*CODE FROM TUTORIALS ON YOUTUBE:
https://www.youtube.com/watch?v=VYsVOamdB0g
https://www.youtube.com/watch?v=gBzsE0oieio&t=2498s
Auto scroll wasn't covered in the video but I basically adapted their code to work with a setInterval()
*/
function autoScroll() {
    let current = document.querySelector('.active');
    let next = current.nextElementSibling;

    if ( next == null ) {
        let revolver = document.querySelector('.front-sentinel');
        let move = revolver.style.left;
        carousel.style.transform = 'translateX(-' + move + ')';
        current.classList.remove('active')
        revolver.classList.add('active')
        return 
    }
    else {
        let move = next.style.left
        carousel.style.transform = 'translateX(-' + move + ')';
        current.classList.remove('active');
        next.classList.add('active');
    }
};

setInterval( autoScroll, 3500);