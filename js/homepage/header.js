// --- DOM Selectors ---
const dropdownMenu = document.querySelector(".dropdown-content");
const serviceArrow = document.querySelector(".fa-chevron-down");

// Nav Links
const serviceLink = document.querySelector("#services");

// Services Links
const services = [
    (softwareSolutions = {
        icon: "fab fa-uncharted",
        title: "Software Solutions",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        className: "software-solutions",
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
        className: "system-integration",
    }),
];

services.map((service) => {
    dropdownMenu.innerHTML += `
                        <div class="service ${service.className}" onclick="location.href='/services/${service.className}.html'">
                            <div class="service-icon-container">
                                <i class="${service.icon}"></i>
                                <h3>${service.title}</h3>
                            </div>
                            <p>
                                ${service.description}
                            </p>
                        </div>
    `;
});

const showHideServiceArrow = () => {
    serviceArrow.classList.toggle("rotateArrow");
};

const toggleDropDownMenu = (e) => {
    if (e.target.classList.contains("dropbtn")) {
        console.log(e);
        dropdownMenu.classList.toggle("show-element");
    } else {
        dropdownMenu.classList.remove("show-element")
    }
    showHideServiceArrow();
};

document.body.addEventListener("click", toggleDropDownMenu);
// serviceLink.addEventListener("click", toggleDropDownMenu);
