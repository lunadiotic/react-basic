import './Todo.css'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'

function Todo() {
    const data = [
        { id: 1, title: 'eat'},
        { id: 2, title: 'sleep'},
        { id: 3, title: 'code'}
    ]
    
    const eventCreateTodo = (todo) => {
        data.push(todo)
        console.log(data)
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList todos={data} />
        </div>
    );
}

export default Todo