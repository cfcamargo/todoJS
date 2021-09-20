import { createApp } from 'vue'
import Todos from './api/todos'
import './assets/css/main.css'

const apitodos = new Todos()

const app = createApp ({

    data() {
        return {
            todos: [],
        }
    },
    created() {
        this.fetchTodos()
    },
    methods: {
        async fetchTodos() {
            this.todos = await apitodos.index()
            
        }
    }

})

app.mount('#app')

