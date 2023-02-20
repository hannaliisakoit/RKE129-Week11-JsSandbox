const currentMainImage = document.querySelector(".galleri-image4 img");
const imagesToChooseFrom = document.querySelector(".gallery img");

imagesToChooseFrom.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e) {

    imagesToChooseFrom.forEach(img => img.style.opacity = 1);

    currentMainImage.scr = e.target.src;
    e.target.style.opacity = 0.5;
}