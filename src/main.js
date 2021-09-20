import { createApp } from 'vue'
import Todos from './api/todos'
import './assets/css/main.css'

const apitodos = new Todos()

const app = createApp ({

    data() {
        return {
            todo: '',
        }
    },
    created() {
        
    },
    methods: {

    }

})

app.mount('#app')

