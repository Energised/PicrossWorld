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
    // components:{
    //     square: import("./components/square.js"),
    //     board: import("./components/board.js")
    // }
});

app.component('square', square);
app.component('board', board);

app.mount('#app');