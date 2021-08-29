const clientsImgContainer = document.querySelector(".clients-img-container");

const clientImages = [
    "sixnfour",
    "limeade",
    "edls-logo",
    "bahamas-government",
    "rev",
    "jll",
    "peepx",
];

// Render client logo images to the client section
clientImages.map((img) => {
    return (clientsImgContainer.innerHTML += `<img class="client-img ${img}" src="../../assets/img/home_page/clients/${img}.png">`);
});
