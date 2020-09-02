// dom elements
const modal = document.querySelector(".imgModal");
const images = document.querySelectorAll(".gallery img");
const fullimg = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const buttonPrev = document.querySelector(".gallery-prev");
const buttonNext = document.querySelector(".gallery-next");

// vars
let infoImages = [];

// event listeners
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("open");
        fullimg.setAttribute("src", `./img/${img.getAttribute("original-data")}`);
        caption.textContent = img.getAttribute("alt");

        images.forEach(image => {
            infoImages.push({'url':image.getAttribute("original-data"), 'caption':image.getAttribute("alt")});
        });
    });
});

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("imgModal")){
        modal.classList.remove("open");
    }
})