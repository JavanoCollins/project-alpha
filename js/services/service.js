const showcaseSection = document.getElementById("showcase-section");
const otherServices = document.querySelector(".other-services");

const servicesInfo = [
    (softwareSolutions = {
        icon: "fab fa-uncharted",
        title: "Software Solutions",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        className: "software-solutions",
        showcaseName: "software-services",
    }),
    (webDesign = {
        icon: "fas fa-drafting-compass",
        title: "Website Design",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        className: "web-design",
        showcaseName: "web-design-services",
    }),
    (maintenance = {
        icon: "fas fas fa-wrench",
        title: "Maintenance",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        className: "maintenance",
        showcaseName: "maintenance-services",
    }),
    (ecommerce = {
        icon: "fas fa-money-check-alt",
        title: "E-commerce",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        className: "ecommerce",
        showcaseName: "ecommerce-services",
    }),
    (systemIntegration = {
        icon: "fas fa-cogs",
        title: "System Integration",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        className: "system-integration",
        showcaseName: "system-integration-services",
    }),
];

const renderServices = () => {
    const result = servicesInfo.filter(
        (service) => !otherServices.classList.contains(service.showcaseName)
    );

    result.map((service) => {
        otherServices.innerHTML += `
            <div class="other-service" onclick="location.href='/services/${service.className}.html'">
                <i class="${service.icon}"></i>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
    })
};

renderServices();
