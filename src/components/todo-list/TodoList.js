import './TodoList.css'

function TodoList(props) {
    // console.log(props.todo)
    return (
        <ul>{
            props.todos.map((todo) => {
                return <li key={todo.id}>{todo.title}</li>;
            })
        }</ul>
    );
}

export default TodoList