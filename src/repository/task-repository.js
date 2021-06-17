const TaskSchema = require('../models/tasks')

module.exports = {
    post: (data) => {
        return TaskSchema.create(data)
    },
    get: (data) => {
        return TaskSchema.find(data)
    },
    put: (altera) => {
        return TaskSchema.updateTask(altera)
    },
    delete: (remove) => {
        return TaskSchema.updateTask(remove)
    }
}