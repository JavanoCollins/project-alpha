Vue.component("nav-link", {
    props: ["title", "id", "dropdown", "href"],
    template: `<li>
                <a v-if="!dropdown" :href="href" class="nav-link" :id="id">
                    {{title}}
                </a>
                <div v-if="dropdown" class="dropdown">
                    <div class="service-arrow">
                        <a href="#" class="dropbtn nav-link" :id="id"
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
    created() {
        console.log(this.services);
    },
});