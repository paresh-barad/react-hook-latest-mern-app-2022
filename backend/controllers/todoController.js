const Todo = require('../model/Todo');

const getTodos = (req, res) => {
    Todo.find((err, todos) => {
        if(err) res.send(err);
        res.json(todos);
    })
}

const createTodo = (req, res) => {
    const todo = new Todo({
        name: req.body.name
    });

    todo.save((err, todo) => {
        if(err) res.send(err.message);
        res.json(todo);
    })
}

const updateTodo = (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params.todoId },
        {
            $set: {
                name: req.body.name
            }
        },
        { new: true },
        (err, Todo) => {
            if(err) res.send(err);
            res.json(Todo);
        }
    )
}

const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoId })
        .then(() => {
            res.json({ message: 'Todo has been deleted..'})
        })
        .catch((err) => {
            res.send(err);
        })
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};