import axios from "axios";

const baseUrl = 'http://localhost:8000/todos';
export const addTodo = (newTodo) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: baseUrl,
            withCredentials: false,
            data: newTodo
        }).then((todo) => {
            dispatch({
                type: 'ADD_TODO',
                todo
            });
        }).catch((error) => {
            console.log(error.message);
        });
    }
}

export const getTodos = () => {
    return (dispatch) => {
        axios({
            method:'get',
            url: baseUrl,
            withCredentials: false
        }).then((todos) => {
            dispatch({
                type: 'GET_TODOS',
                todos
            })
        }).catch((error) => {
            console.log(error.message);
        });
    }
}

export const deleteTodo = (todoId) => {
    return (dispatch) => {
        axios({
            method:'delete',
            url: baseUrl+"/"+todoId,
            withCredentials: false
        }).then((todo) => {
            dispatch({
                type:'DELETE_TODO',
                todoId
            })
        }).catch((error) => {
            console.log(error.message);
        })
    }
}

export const updateTodo = (updatedTodo, todoId) => {
    return (dispatch) => {
        axios({
            method:'put',
            url: baseUrl+"/"+todoId,
            withCredentials: false,
            data: updatedTodo
        }).then(() => {
            dispatch({
                type:'UPDATE_TODO',
                updatedTodo: {...updatedTodo, _id: todoId}
            })
        }).catch((error) => {
            console.log(error.message);
        })
    }
}
