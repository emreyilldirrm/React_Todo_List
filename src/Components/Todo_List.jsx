import React from 'react'
import Todo from './Todo'

function Todo_List({ todos, removeTodo, updateTodo }) {

    return (
        <div className='Todo_Components_container'>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
                ))
            }

        </div>


    )
}

export default Todo_List