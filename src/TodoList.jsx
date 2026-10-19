function TodoList () {

    const todoList = [
    {id: 1, title: "Data"},
    {id: 2, title: "Finance"},
    {id: 3, title: "Lifestyle"}
  ]

  return (
   
    <div>
      <h1> TODO LIST</h1>
      <ul>
        {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default TodoList