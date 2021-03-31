import { useState } from 'react'
import './TodoCreate.css'

const TodoCreate = props => {
    // let todo = '';
    const [todo, setTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            id: (Math.floor(Math.random() * 100) + 1),
            title: todo
        }
        props.onCreateTodo(newTodo)
        // todo = ''
        setTodo('')        
    }

    const handleTodoInput = event => {
        // todo = event.target.value;
        setTodo(event.target.value)
        console.log(todo)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={handleTodoInput}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoCreate