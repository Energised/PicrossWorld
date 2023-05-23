export default {
    name: "square",
    data(){
        return {
            value: 1
        }
    },
    template: `

        <div style="width:10px;height:10px">
            TEST - {{ value }}
        </div>
    
    `
};