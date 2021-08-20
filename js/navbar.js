Vue.component("nav-link", {
    props: ["link", "dropdown"],
    template: `<li>
                <a v-if="!dropdown" href="#" class="nav-link">
                    {{link}}
                </a>
                <div v-if="dropdown" class="dropdown">
                    <div class="service-arrow">
                        <a href="#" class="dropbtn nav-link"
                            >{{link}}</a
                        >
                        <i class="fas fa-chevron-down"></i>
                    </div>

                    <div class="dropdown-content">
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
                    </div>
                    
                </div>
            </li>`,
});

var app = new Vue({
    el: "#navbar",
    data: () => {
        return {
        };
    },
    created() {
        console.log(this.services);
    },
});

{
    /* <nav>
        <a href="../index.html">
            <img id="logo" src="../assets/img/home_page/header/logo.png" alt="Plato Alpha Logo" width="200">
        </a>
        <div class="nav-links">
            <li>
                <a href="#" class="nav-link">Work</a>
            </li>
            <li>
                <div class="dropdown">
                    <a href="#" class="dropbtn nav-link">Services</a>
                    <div class="dropdown-content">
                        <div class="service">
                            <p>Software Development</p>
                        </div>
                        <div class="service">
                            <p>Software Development</p>
                        </div>
                        <div class="service">
                            <p>Software Development</p>
                        </div>
                        <div class="service">
                            <p>Software Development</p>
                        </div>
                        <div class="service">
                            <p>Software Development</p>
                        </div>
                        <div class="service">
                            <p>Software Development</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="nav-link">About</a>
            </li>
            <li>
                <a href="#" class="nav-link">Clients</a>
            </li>
            <button class="btn btn-call-sm">Book A Call</button>
        </div>
    </nav> */
}
