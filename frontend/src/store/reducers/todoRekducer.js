import { toast } from "react-toastify";

const todoReducer = (todos = [], action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return action.todos.data;
        case 'ADD_TODO':
            toast.success('Todo has been Added...', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return [action.todo.data, ...todos];
        case 'DELETE_TODO':
            toast.success('A todo has been deleted...', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return todos.filter((todo) => todo._id != action.todoId);

        case 'UPDATE_TODO':
            toast.success('Todo has been update succesful...', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return todos.map((todo) => todo._id == action.updatedTodo._id ? action.updatedTodo : todo)
        default:
            return todos;
    }
}

export default todoReducer;