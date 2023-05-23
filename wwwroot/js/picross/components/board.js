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
    </table>
    
    `
};