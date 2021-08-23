const limeadeImgContainer = document.querySelector(".limeade-img-container");
const sixnfourImgContainer = document.querySelector(".sixnfour-img-container");

const limeadeOne = document.querySelector(".limeade-img-1");
const limeadeTwo = document.querySelector(".limeade-img-2");
const limeadeThree = document.querySelector(".limeade-img-3");
const sixnfourOne = document.querySelector(".sixnfour-img-1");
const sixnfourTwo = document.querySelector(".sixnfour-img-2");
const sixnfourThree = document.querySelector(".sixnfour-img-3");

limeadeOne.style.zIndex = 2;

// Cycles through portfolio images
const cycleImages = (imgOne, imgTwo, imgThree) => {
    // Checks if image one is a the front
    if (imgOne.style.zIndex == 2) {
        // Image One
        gsap.to(imgOne, { x: 100, y: 80, duration: 0.2 });
        gsap.set(imgOne, { zIndex: 0, duration: 0.2 });
        // Image Two
        gsap.to(imgTwo, { x: 0, y: 0, duration: 0.2 });
        gsap.set(imgTwo, { zIndex: 2, duration: 0.2 });
        // Image Three
        gsap.to(imgThree, { x: 50, y: -80, duration: 0.2 });
        gsap.set(imgThree, { zIndex: 1, duration: 0.2 });

      // Checks if image two is a the front
    } else if (imgTwo.style.zIndex == 2) {
        // Image One
        gsap.to(imgOne, { x: 50, y: -80, duration: 0.2 });
        gsap.set(imgOne, { zIndex: 1, duration: 0.2 });
        // Image Two
        gsap.to(imgTwo, { x: 100, y: 80, duration: 0.2 });
        gsap.set(imgTwo, { zIndex: 1, duration: 0.2 });
        // Image Three
        gsap.to(imgThree, { x: 0, y: 0, duration: 0.2 });
        gsap.set(imgThree, { zIndex: 2, duration: 0.2 });

      // Checks if image three is a the front
    } else {
        // Image One
        gsap.to(imgOne, { x: 0, y: 0, duration: 0.2 });
        gsap.set(imgOne, { zIndex: 2, duration: 0.2 });
        // Image Two
        gsap.to(imgTwo, { x: 50, y: -80, duration: 0.2 });
        gsap.set(imgTwo, { zIndex: 1, duration: 0.2 });
        // Image Three
        gsap.to(imgThree, { x: 100, y: 80, duration: 0.2 });
        gsap.set(imgThree, { zIndex: 0, duration: 0.2 });
    }
};

limeadeImgContainer.addEventListener("click", () => {
    cycleImages(limeadeOne, limeadeTwo, limeadeThree);
});
sixnfourImgContainer.addEventListener("click", () => {
    cycleImages(sixnfourOne, sixnfourTwo, sixnfourThree);
});
