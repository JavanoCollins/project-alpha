Vue.component("navbar", {
    template: `<nav>
                    <img src="../assets/img/home_page/header/logo.png" width="200">
                    <div class="nav-links">
                        <li><a href="#" class="nav-link">Work</a></li>
                        <li><a href="#" class="nav-link">Services</a></li>
                        <li><a href="#" class="nav-link">About</a></li>
                        <li><a href="#" class="nav-link">Clients</a></li>
                        <button class="btn btn-call-sm">Book A Call</button>
                    </div>
            </nav> `,
});

var app = new Vue({
    
    el: "#app",
    data: {
        message: "Hello Vue!",
    },
});
