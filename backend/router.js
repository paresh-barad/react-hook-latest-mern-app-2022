const { 
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require('./controllers/todoController');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Lets\'s build a crud api!');
});

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.put('/todos/:todoId', updateTodo);
router.delete('/todos/:todoId', deleteTodo);

module.exports = router;