const taskController = require('../controllers/task-controller')
const verifyUser = require('../middlewares/verify-user-token-middleware')
const verifyCreateTask = require('../middlewares/fields-to-create-task-middleware')

module.exports = app => {
    app.post('/task', verifyUser, verifyCreateTask, taskController.create)

    app.get('/task-list/:id?', verifyUser, taskController.list)

    app.put('/task-update/:id', verifyUser, taskController.updateTask)

    app.delete('/task-delete/:id', verifyUser, taskController.deleteTask)
}