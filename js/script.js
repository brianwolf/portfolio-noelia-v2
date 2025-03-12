let thumbnails = document.querySelectorAll(".img-responsive");

let popupBackground = document.getElementById("popup-background")
let popupTitle = document.querySelector("#popup-title");
let popupImage = document.querySelector("#popup-image");

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        popupBackground.style.display = "block";
        popupTitle.innerHTML = this.alt;
        popupImage.src = this.src;
    })
});

popupBackground.addEventListener("click", function () {
    popupBackground.style.display = "none";
})