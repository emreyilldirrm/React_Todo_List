import { useState } from 'react'
import './App.css'
import Todo_Create from './Components/todo_Create'
import Todo_List from './Components/Todo_List'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (newtodo) => {
    setTodos([...todos, newtodo])
  }
  console.log('todos', todos)

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const updateTodo = (updateTodo) => {

    const UpdatedTodos = todos.map((have_todo) => {
      if (have_todo.id !== updateTodo.id) {
        return have_todo
      }

      return updateTodo
    })

    setTodos([...UpdatedTodos])

  }
  return (
    <div className='App'>
      <div className='main'>
        <Todo_Create onCreateTodo={createTodo} />
        <Todo_List todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
      </div>

    </div>
  )
}

export default App
