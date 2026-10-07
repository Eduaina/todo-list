import './App.css'

function App() {
  const todoList = [
    {id: 1, title: "Data"},
    {id: 2, title: "Finance"},
    {id: 3, title: "Lifestyle"},
    {id: 4, title: "Travel"}
  ]

  return (
    <>
      <div>
        <h1> TODO LIST</h1>
        <ul>
          {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
