import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../store/actions/todoAction';

const AddTodo = ({ todo, setTodo }) => {

    const dispatch = useDispatch();
    const todoInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(todo.name.trim() == "") {
            todoInput.current.style.border = '2px solid red';
            return false;
        }

        if (todo._id) {
            const todoId = todo._id;
            const updateTodoData = {
                name: todo.name,
                isComplete: todo.isComplete,
                date: todo.date,
            }
            dispatch(updateTodo(updateTodoData, todoId));
            setTodo({
                name: '',
                isComplete: false
            })
        } else {
            const newTodo = {
                ...todo,
                date: new Date()
            }
            dispatch(addTodo(newTodo));

            setTodo({
                name: '',
                isComplete: false
            })
        }

    }

    const handleSetTodo = (todo, event) => {
        if(event.target.value.trim() == "") {
            todoInput.current.style.border = '2px solid red';
        } else {
            todoInput.current.style.border = '1px solid black';
        }
        setTodo({ ...todo, name: event.target.value });
    }

    return (
        <>
            <div className="todo-form">
            <div className="todo-add-title">Add todo</div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <input type={'text'} id="enter-todo"
                        label="enterTodo"
                        variant="outlined"
                        autoFocus
                        value={todo.name}
                        className="todo-text"
                        required
                        ref={todoInput}
                        onChange={(e) => handleSetTodo(todo, e)}></input>

                    <input type='submit' className="todo-submit" value={'Submit'} />
                </form>
            </div>
        </>
    )
}

export default AddTodo;