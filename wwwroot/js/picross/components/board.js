export default {
    name: "board",
    props:{
        width:{
            type: Number,
            required: true
        },
        height:{
            type: Number,
            required: true
        },
        board:{
            type: Object,
            required: true
        }
    },
    methods:{
      saveBoardState(){
          $.ajax({
              url: "PicrossGame/Save",
              data: this.board,
              type: "POST",
              success(){
                  console.log("Success!");
              }
          });
      }  
    },
    template: `
    
    <table>
        <template v-for="h in height">
            <tr :colspan="width">
                <template v-for="w in width">
                    <td>
                        <square
                            :x-pos="w"
                            :y-pos="h">
                        </square>
                    </td>
                </template>
            </tr>
        </template>
        <button type="button" @click="saveBoardState()">Save</button>
    </table>
    
    `
};