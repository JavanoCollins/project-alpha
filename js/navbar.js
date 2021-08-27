Vue.component("nav-bar", {
    props: ["title", "id", "dropdown", "href"],
    template: `
    <nav id="navbar" class="container">
        <a href="../index.html">
                        <img
                            id="logo"
                            src="../assets/img/home_page/header/logo.png"
                            alt="Plato Alpha Logo"
                            width="200"
        /></a>
        <div class="nav-links">
            <a id="work" class="nav-link" href="/work.html">Work</a>

            <div class="dropdown">
                <div class="service-arrow">
                    <a class="dropbtn nav-link" id="services" 
                        >Services</a>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>

            <a class="nav-link" href="/pricing.html">Pricing</a>
            
            <a class="nav-link" href="/about.html">About Us</a>

            <button class="btn btn-call-sm">Book A Call</button>
        </div>
        <div class="dropdown-content"></div>
    </nav>
    `,
});

var app = new Vue({
    el: "#navbar",
    data: () => {
        return {};
    },
});
