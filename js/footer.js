Vue.component("footer-component", {
    template: `
        <footer class="">
                <!-- FOOTER 1  -->
                <div id="footer-1">
                    <div class="footer-1-col-1">
                        <img
                            id="footer-1-logo"
                            src="./assets/img/plato-alpha-imgs/plato-alpha-transparent.png
                        "
                            alt="Plato Alpha Logo"
                        />
                        <h2 id="footer-1-text">
                            Let's Discus Your Next Project
                        </h2>

                        <button class="btn btn-call-md">Book A Call</button>
                    </div>

                    <div class="footer-1-col-2">
                        <img id="bahamas-img" src="./assets/img/home_page/footer/bahamas.png" alt="">
                        <div id="line"></div>
                        <ul>
                            <li>HEADQUARTERS</li>
                            <li>Old Fort Bay Town Centre</li>
                            <li>Nassau, The Bahamas</li>
                            <li>alpha@platoalpha.com</li>
                        </ul>
                    </div>
                </div>

                <!-- FOOTER 2  -->
                <div id="footer-2">
                    <!-- Footer 2 Column 1 -->
                    <div class="footer-col footer-col-1">
                        <h3 class="footer-heading">Global</h3>
                        <a href="" class="footer-link">Work</a>
                        <a href="" class="footer-link">Services</a>
                        <a href="" class="footer-link">About</a>
                        <a href="" class="footer-link">Clients</a>
                        <a href="" class="footer-link">Book A Call</a>
                    </div>
                    <!-- Footer 2 Column 2 -->
                    <div class="footer-col footer-col-2">
                        <h3 class="footer-heading">Technology</h3>
                        <a href="" class="footer-link">Tech</a>
                        <a href="" class="footer-link">Open Source</a>
                    </div>
                    <!-- Footer 2 Column 3 -->
                    <div class="footer-col footer-col-3">
                        <h3 class="footer-heading">Services</h3>
                        <a href="" class="footer-link">Software Development</a>
                        <a href="" class="footer-link">System Integration</a>
                        <a href="" class="footer-link">Ecommerce</a>
                        <a href="" class="footer-link">Website Design</a>
                        <a href="" class="footer-link">Maintenance</a>
                    </div>

                    <!-- Footer 2 Column 4 -->
                    <div class="footer-col footer-col-4">
                        <h3 class="footer-heading">Build</h3>
                        <a href="" class="footer-link">Play With Pricing</a>
                        <a href="" class="footer-link">Book A Call</a>
                    </div>
                </div>

                <!-- FOOTER 3  -->
                <div id="footer-3">
                    <p id="footer-3-text">
                        <strong>&copy 2021 Plato Alpha.</strong> All rights
                        reserved.
                    </p>
                    <div class="social-links">
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-facebook-square"></i>
                    </div>
                </div>
            </footer>
    `,
});

var app = new Vue({
    el: "#footer-component",
    data: {
        message: "Hello Vue!",
    },
});
