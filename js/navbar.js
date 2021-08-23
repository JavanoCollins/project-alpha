Vue.component("nav-link", {
    props: ["title", "link", "dropdown"],
    template: `<li>
                <a v-if="!dropdown" href="#" class="nav-link" :id="link">
                    {{title}}
                </a>
                <div v-if="dropdown" class="dropdown">
                    <div class="service-arrow">
                        <a href="#" class="dropbtn nav-link" :id="link"
                            >{{title}}</a
                        >
                        <i class="fas fa-chevron-down"></i>
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
});