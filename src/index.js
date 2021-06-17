const express = require ('express')
const db = require('./infra/mongodb')
const config = require('./config')
const telegramRouter = require('./routes-telegram')
const taskTelegramController = require('./controllers/task-telegram-controller')

const app = express()

db.connect()

app.listen(config.port, () => {
    console.log(`Server ${config.app} is running`)
})

app.use(express.json())

const userRoute = require('./routes/user-route')
const taskRoute = require('./routes/task-route')
const authRoute = require('./routes/auth-route')

authRoute(app)
userRoute(app)
taskRoute(app)

telegramRouter.listtask((cb) => {
    taskTelegramController.get(cb)
})

telegramRouter.savetask((cb) => {
    taskTelegramController.save(cb)
})
