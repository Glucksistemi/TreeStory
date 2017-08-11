var components = {
    navigation: {
        template: '<div class="field-column navigation">' +
        '<div class="history" ><ol><li v-for="item, index in history" :key="index">{{nodes[item].header}} ({item.id}})</li></ol></div>' +
        '<div class="items_list"><ol><li v-for="item, index in nodes" :key="index" @click="goto(index)">{{item.header}} ({{index}})</li></ol></div></div>',
        props: ['history', 'nodes', 'edit'],
        methods: {
            goto: function (node) {
                console.log('goto called');
                this.$emit('goto', node)
            }
        },
        components: {
            'node_li': {
                template: '<li>' +
                '<span v-if="!edit"></span>' +
                '</li>',
                props: ['edit', 'header', 'index']
            }
        }
    },
    view_node: {
        template: '<div class="field-column node"><div class="item-view" >' +
        '<div style="flex-basis: 5%"><h2>{{node.header}}</h2></div>' +
        '<div v-html="parse_text"></div>' +
        '<div><illustration v-for="ill, index in node.illustrations" :key="index" :source="ill.url"></illustration></div>' +
        '</div>' +
        '<div class="choices-view"><choice v-for="ch, index in node.choices" :info="ch" :key="index" v-on:goto="goto"></choice></div> ' +
        '</div>',
        props: ['node'],
        computed: {
            parse_text: function () {
                return this.node.text.split('\n').join('<br>')
            }
        },
        components: {
            'illustration': {
                template: '<img :src="source" class="illustration">',
                props: ['source']
            },
            'choice': {
                props: ['info'],
                template: '<div class="choice" @click="select" v-bind:class="{main: info.main}"><h4>{{info.header}}</h4><p>{{info.text}}</p></div>',
                methods: {
                    select: function () {

                        this.$emit('goto', this.info.goto.node)
                    }
                }
            }
        },
        methods: {
            goto: function (node) {
                this.$emit('goto', node)
            }
        }
    },
    edit_node: {
        template: '<div class="field-column node"><div class="item-edit"> ' +
        '<div style="flex-basis: 5%"><span>Header:</span><input v-model="node.header"></div>' +
        '<div><h4>Text:</h4><p><textarea v-model="node.text"></textarea></p></div>' +
        '</div class="chices-edit"><choice v-for="ch, index in node.choices" :info="ch" :key="index"></choice>' +
        '<div class="choice"><button @click="newChoice()">New choice</button></div> </div>',
        props: ['node', "nodelist"],
        components: {
            choice: {
                template: '<div class="choice" v-bind:class="{main: info.main}">' +
                '<p>header: <input v-model="info.header"></p>' +
                '<p><textarea v-model="info.text"></textarea></p>' +
                '<p><select></select></p>' +
                '<p><button>Удалить</button></p>' +
                '</div>',
                props: ['info']
            }
        },
        methods: {
            newChoice: function () {
                this.node.choices.push({
                    "header": "",
                    "text": "",
                    "version": 0,
                    "illustrations": [],
                    "main": false,
                    "goto": {}
                })
            },
            newNode: function (choice) {
                
            }
        }
    }
}