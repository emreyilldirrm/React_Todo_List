import React, { useState } from 'react'


function Todo_Create({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('')

    const clearTodo = () => {
        setNewTodo("")
    }

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 999999999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearTodo()

    }

    return (

        <div className='container-todo-create'>
            <div className='todo-create'>
                <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }}
                    type="text" className='todo-create-input' placeholder='Todo giriniz' name="" id="" />
                <button onClick={createTodo} className='todo-create-button'>Todo oluştur</button>
            </div>
        </div>

    )
}

export default Todo_Create