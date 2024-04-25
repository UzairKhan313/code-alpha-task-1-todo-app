import React from 'react'
import { FaTrash, FaCheck } from 'react-icons/fa'
import { toggleComplete, removetodo } from '../slices/todo'
import { useDispatch } from 'react-redux'

const TodoItem = ({ id, name, isComplete }) => {
  const dispatch = useDispatch()

  const removeTodoItemHandler = (id) => {
    dispatch(removetodo(id))
  }
  const toggleCompleteHandler = (id) => {
    dispatch(toggleComplete(id))
  }

  return (
    <div
      className={
        'my-4 flex w-full items-center  justify-between bg-gray-300 px-4 py-2  rounded-lg border border-gray-200 shadow'
      }
    >
      <h3 className="font-bold text-xl">{name}</h3>
      <div className="flex gap-2">
        <button
          onClick={() => removeTodoItemHandler(id)}
          type="button"
          className={
            'h-8 w-8 flex justify-center items-center text-red-700 border border-red-700 rounded-lg hover:bg-red-700 hover:text-white'
          }
        >
          <FaTrash />
        </button>

        <button
          onClick={() => toggleCompleteHandler(id)}
          type="button"
          className={`h-8 w-8 flex justify-center  items-center rounded-lg ${
            isComplete
              ? 'bg-emerald-700 text-gray-200'
              : 'bg-gray-400 text-emerald-700'
          }`}
        >
          <FaCheck />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
