// --- DOM Selectors ---
const clientsImgContainer = document.querySelector(".clients-img-container");
const dropdownMenu = document.querySelector(".dropdown-content");
const serviceArrow = document.querySelector(".fa-chevron-down");

// Nav Links
const serviceLink = document.querySelector("#services");



const clientImages = [
    "sixnfour",
    "limeade",
    "edls-logo",
    "bahamas-government",
    "rev",
    "jll",
    "peepx",
];

const showHideServiceArrow = () => {
    serviceArrow.classList.toggle("rotateArrow")
}

serviceLink.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show-element");
    showHideServiceArrow();
    dropdownMenu.innerHTML = `
                        <div class="service">
                            <i class="fas fa-laptop-code"></i>
                            <h3>Software Development</h3>
                            <p>
                                Lorem ipsum, dolor sit amet
                                consectetur adipisicing.
                            </p>
                        </div>
                        <div class="service">
                            <h3>System Integration</h3>
                            <p>
                                Lorem ipsum, dolor sit amet
                                consectetur adipisicing.
                            </p>
                        </div>
                        <div class="service">
                            <h3>Ecommerce</h3>
                            <p>
                                Lorem ipsum, dolor sit amet
                                consectetur adipisicing.
                            </p>
                        </div>
                        <div class="service">
                            <h3>Maintenance</h3>
                            <p>
                                Lorem ipsum, dolor sit amet
                                consectetur adipisicing.
                            </p>
                        </div>
                        <div class="service">
                            <h3>Website Design</h3>
                            <p>
                                Lorem ipsum, dolor sit amet
                                consectetur adipisicing.
                            </p>
                        </div>
    `;
});

// Render client logo images to the client section
clientImages.map((img) => {
    return (clientsImgContainer.innerHTML += `<img class="client-img ${img}" src="../../assets/img/home_page/clients/${img}.png">`);
});
