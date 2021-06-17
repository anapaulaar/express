const taskService = require('../repository/task-repository')
const TaskSchema = require('../models/tasks')

module.exports = {
    create: (req, res) => {
        taskService.post(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(400).send(err))
    },

    list: (req, res) => {
        if (req.params.id) {
            TaskSchema.findById(req.params.id)
            .then(listById => res.json(listById))
            .catch(err => res.status(400).send(err))
            return
        }

        taskService.get({userId: req.headers.userPayload.id})
            .then(listAll => res.json(listAll))
            .catch(err => res.status(400).send('Não foi possivel listar' + err))
    },

    updateTask: (req, res) => {

        TaskSchema.findByIdAndUpdate( req.params.id, req.body)
            .then((altera) => {
                if (!altera){
                    res.status(404).send('Não foi possivel atualizar a tarefa')
                    return
                }
                res.json(altera)
            })
            .catch(err => res.status(400).send(err))
    },

    deleteTask: (req, res) => {
            TaskSchema.findOneAndRemove({_id: req.params.id})
                .then((remove) => {
                    if (!remove){
                        res.status(404).send('Não foi possível excluir')
                        return
                    }
                    res.json(remove)
                })
                .catch(err => res.status(400).send('Impossível excluir' + err))
    }
}