var components = {
    navigation: {
        template: '<div class="field-column navigation">' +
        '<div class="history" ><ol><li v-for="item, index in history" :key="index">{{nodes[item].header}} ({item.id}})</li></ol></div>' +
        '<div class="items_list"><ol><li v-for="item, index in nodes" :key="index" @click="goto(index)">{{item.header}} ({{index}})</li></ol></div></div>',
        props: ['history', 'nodes'],
        methods: {
            goto: function (node) {
                console.log('goto called');
                this.$emit('goto', node)
            }
        }
    },
    view_node: {
        template: '<div class="field-column node"><div class="item-view" >' +
        '<div style="flex-basis: 5%"><h2>{{node.header}}</h2></div>' +
        '<div>{{node.text}}</div>' +
        '<div><illustration v-for="ill, index in node.illustrations" :key="index" :source="ill.url"></illustration></div>' +
        '</div>' +
        '<div class="choices-view"><choice v-for="ch, index in node.choices" :info="ch" :key="index" v-on:goto="goto"></choice></div> ' +
        '</div>',
        props: ['node'],
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
    }
}