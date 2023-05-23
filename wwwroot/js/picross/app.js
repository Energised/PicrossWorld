import square from "./components/square.js";
import board from "./components/board.js";

const app = Vue.createApp({
    data(){
        return {
            count: 0
        }
    },
    methods:{

    },
    computed:{

    }
});

app.component('square', square);
app.component('board', board);

app.mount('#app');