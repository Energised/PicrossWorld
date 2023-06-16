export default {
    name: "square",
    props:{
        squareData:{
            type: Object,
            required: true
        },
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
            state: this.squareData.State,
            isFilled: false,
            crossed: false,
            elementId: "sq-" + this.xPos + "-" + this.yPos
        }
    },
    methods:{
        fillSquare(){
            if(!this.isFilled){
                document.getElementById(this.elementId).style.backgroundColor = "cornflowerblue";
            }
            else{
                document.getElementById(this.elementId).style.backgroundColor = "grey";
            }
            this.isFilled = !this.isFilled;
        },
        crossSquare(){
            // TODO
        }
    },
    mounted(){
        switch(this.state){
            case 0:
                document.getElementById(this.elementId).style.backgroundColor = "grey";
                this.isFilled = false;
                break;
            case 1:
                document.getElementById(this.elementId).style.backgroundColor = "cornflowerblue";
                this.isFilled = true;
                break;
        }
    },
    template: `

        <div :id="elementId" class="square" @click.left="fillSquare()">
        </div>
    
    `
};