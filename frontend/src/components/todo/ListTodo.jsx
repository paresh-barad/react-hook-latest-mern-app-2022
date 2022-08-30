import { getTodos, deleteTodo } from "../../store/actions/todoAction";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

const ListTodo = ({ setTodo }) => {

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    const handleDelete = (todoId, event) => {
        event.preventDefault();
        dispatch(deleteTodo(todoId));
    };

    const handleOnUpdateClick = (todoId, event) => {
        event.preventDefault();
        const foundTodo = todos.find((todo) => todo._id == todoId);
        setTodo({ ...foundTodo });
    }

    return (
        <>
            <div className="todo-list-main">
                <div className="todo-list-title">Todo list</div>
                <br></br>
                <ul>
                    {todos && todos.map((todo) => {
                        return (
                            <li key={todo._id}>
                                {todo.name}
                                <div className="delete-btn">
                                    <input className="delete-real" type='button' value='Delete' onClick={(event) => handleDelete(todo._id, event)}></input>
                                </div>
                                <div className="edit-btn">
                                    <input className="edit-real" type='button' value='Edit' onClick={(event) => handleOnUpdateClick(todo._id, event)}></input>
                                </div>
                            </li>
                        )
                    }
                    )}

                </ul>
            </div>

        </>
    )
}

export default ListTodo;