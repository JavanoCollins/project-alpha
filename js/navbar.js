Vue.component("navbar-component", {
    template: `
    <nav>
        <a href="../index.html">
            <img id="logo" src="../assets/img/home_page/header/logo.png" alt="Plato Alpha Logo" width="200">
        </a>
        <div class="nav-links">
            <li>
                <a href="#" class="nav-link">Work</a>
            </li>
            <li>
                <a href="#" class="nav-link">Services</a>
            </li>
            <li>
                <a href="#" class="nav-link">About</a>
            </li>
            <li>
                <a href="#" class="nav-link">Clients</a>
            </li>
            <button class="btn btn-call-sm">Book A Call</button>
        </div>
    </nav> `,
});

var app = new Vue({
    el: "#navbar-component",
    data: {
        message: "Hello Vue!",
    },
});
