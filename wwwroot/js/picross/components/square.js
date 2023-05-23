export default {
    name: "square",
    props:{
        xPos:{
            type: Number,
            required: true
        },
        yPos:{
            type: Number,
            required: true
        }
    },
    data(){
        return {
            value: 1,
            filled: false,
            crossed: false,
            elementId: "sq-" + this.xPos + "-" + this.yPos
        }
    },
    methods:{
        fillSquare(){
            if(!this.filled){
                document.getElementById(this.elementId).style.backgroundColor = "cornflowerblue";
            }
            else{
                document.getElementById(this.elementId).style.backgroundColor = "grey";
            }
            this.filled = !this.filled;
        },
        crossSquare(){
            // TODO
        }
    },
    template: `

        <div :id="elementId" class="square" @click.left="fillSquare()">
        </div>
    
    `
};