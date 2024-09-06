import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function Todo({ todo, removeTodo, updateTodo }) {
    const [editicon, setediticon] = useState(false)

    const { id, content } = todo
    const [updatenewTodo, setupdatenewTodo] = useState(content)

    const remove = () => {
        removeTodo(id)
    }

    const update = () => {
        const request = {
            id: id,
            content: updatenewTodo
        }

        updateTodo(request)
        setediticon(false)
    }
    return (
        <div className='Todo_List_Components_item'>
            <div>
                {
                    editicon ? <input value={updatenewTodo} onChange={(e) => { setupdatenewTodo(e.target.value) }}
                        type="text" className='todo-create-input' placeholder='Düzenleyebilirsiniz' /> : content
                }

            </div>
            <div className='Todo_icon'>
                <IoIosRemoveCircle onClick={remove} className='Todo_icon_1' />
                {
                    editicon ? <FaCheck className='Todo_icon_3' onClick={update} /> : <FaEdit className='Todo_icon_2' onClick={() => setediticon(true)} />
                }


            </div>

        </div>

    )
}

export default Todo