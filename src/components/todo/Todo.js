import { useState } from 'react'
import './Todo.css'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'

function Todo() {
    const [getTodo, setTodo] = useState([
        { id: 1, title: 'eat'},
        { id: 2, title: 'sleep'},
        { id: 3, title: 'code'}
    ])
    
    const eventCreateTodo = (todo) => {
    //    setTodo(getTodo.concat(todo))
        setTodo(prevTodo => prevTodo.concat(todo))
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList todos={getTodo} />
        </div>
    );
}

export default Todo