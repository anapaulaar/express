const TaskRepository = require('../repository/task-repository.js')
const UserRepository = require('../repository/user-repository.js')
const telegramHelper = require('../helpers/telegram.js')

module.exports = {
    save: (user) => {

        const idTelegram = user.chat.id
        const taskTitle = user.text.split("/savetask")[1]

        UserRepository.getOne({ idTelegram }, 'nome')
            .then((user) => {

                const task = {
                    userId: user._id,
                    title: taskTitle
                }

                TaskRepository.post(task)
                    .then((task) => {
                        telegramHelper.sendMessage(idTelegram, `Tarefa ${task.title} foi criada com sucesso!`)
                    })
            })
            .catch(err => console.log(err))
    },
    get: (user) => {

        const idTelegram = user.chat.id

        UserRepository.getOne({ idTelegram }, 'nome')
            .then((user) => {
                TaskRepository.get({ userId: user.id })
                    .then((tasks) => {
                        tasks.forEach(task => {
                            telegramHelper.sendMessage(idTelegram, task.title)
                        });
                    })
            })
            .catch(err => console.log(err))
    }
}