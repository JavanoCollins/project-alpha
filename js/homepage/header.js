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

const services = [
    (softwareSolutions = {
        icon: "fab fa-uncharted",
        title: "Software Solutions",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        link: "software-solutions",
        className: "software-sol",
    }),
    (webDesign = {
        icon: "fas fa-drafting-compass",
        title: "Website Design",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        className: "web-design",
    }),
    (maintenance = {
        icon: "fas fas fa-wrench",
        title: "Maintenance",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        className: "maintenance",
    }),
    (ecommerce = {
        icon: "fas fa-money-check-alt",
        title: "E-commerce",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        className: "ecommerce",
    }),
    (systemIntegration = {
        icon: "fas fa-cogs",
        title: "System Integration",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        className: "system-int",
    }),
];

const showHideServiceArrow = () => {
    serviceArrow.classList.toggle("rotateArrow");
};

const showDropDownMenu = () => {
    dropdownMenu.classList.toggle("show-element");

    showHideServiceArrow();

    services.map((service) => {
        dropdownMenu.innerHTML += `
                        <div class="service ${service.className}" onclick="location.href='./services/software-development.html'">
                            <i class=${service.icon}></i>
                            <h3>${service.title}</h3>
                            <p>
                                ${service.description}
                            </p>
                        </div>
    `;
    });
};

console.log(services);

serviceLink.addEventListener("click", showDropDownMenu);

// Render client logo images to the client section
clientImages.map((img) => {
    return (clientsImgContainer.innerHTML += `<img class="client-img ${img}" src="../../assets/img/home_page/clients/${img}.png">`);
});
