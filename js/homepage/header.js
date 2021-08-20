const clientsImgContainer = document.querySelector(".clients-img-container");

const clientImages = [
    "sixnfour.png",
    "limeade.png",
    "edls-logo.svg",
    "peepx.png",
    "bahamas-government.png",
    "rev.png",
    "jll.png",
];

clientImages.map((img) => {
    return clientsImgContainer.innerHTML += `<img class="client-img" src="../../assets/img/home_page/clients/${img}">`
})