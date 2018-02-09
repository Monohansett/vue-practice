Vue.config.devtools = true;

window.onload = function() {
    var vm = new Vue({
        el: '#todos',
        data: {
            tasks: [],
            newTask: '',
            editTask: null
        },

        filters: {
            openTasks: function() {
                return this.tasks.filter(function(task) {
                    return task.done
                })
            }
        },

        methods: {
            addTask: function(e) {
                e.preventDefault()
                this.tasks.push({
                    text: this.newTask.charAt(0).toUpperCase() + this.newTask.substring(1),
                    done: true
                });
                this.newTask = ''
            },

            removeTask: function(index) {
                this.tasks.splice(this.tasks.indexOf(index), 1)
            },
        }
    })
}