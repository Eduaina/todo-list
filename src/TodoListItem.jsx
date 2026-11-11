
function TodoListItem({todo}){
    return(
        <li>
        <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => onCompleteTodo(todo.id)}
        ></input>
            {todo.title}
    </li>
    )
}

export default TodoListItem