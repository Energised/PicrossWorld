import square from "./components/square.js";

const app = Vue.createApp({
    data(){
        return {
            count: 0
        }
    }
});

app.component('square', square);

app.mount('#app');