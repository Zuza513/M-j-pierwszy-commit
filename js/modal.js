function onClickGalleryImage(src) {
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    const modalImage = document.getElementById("modalImg");
    modalImage.src = src;
}

function onClickExit() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
} 

function onClickRight() {
    const gallery = document.getElementsByClassName("galleryImage");
    const modalImage = document.getElementById("modalImg");
    const modalImageSrc = modalImage.getAttribute("src");

    console.log(modalImage);
    console.log(modalImageSrc);
    console.log(gallery);

    let index;
    for (let i = 0; i < gallery.length; i++){
        console.log(gallery[i].getAttribute("src"));
        if (modalImageSrc.includes(gallery[i].getAttribute('src'))) {
            index = i;
        }
    }

    console.log("index: ", index);

    modalImage.src = gallery[index + 1].src;
}

//////////////// Zamknięcie zdjęcia po dotarciu do ostatniego indexu    ///////////////