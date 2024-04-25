import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todo'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if (!searchTerm) {
      return null
    }
    dispatch(addTodo(searchTerm))
    setSearchTerm('')
  }
  return (
    <div className="pt-5 w-full mb-8">
      <form onSubmit={submitHandler} className="flex items-center gap-6">
        <input
          type="search"
          className={
            "cal(w-full bg-gray-50  flex-grow p-2 rounded-lg border border-gray-600 'text-gray-900 'focus:border-blue-500 focus:ring-blue-500)"
          }
          placeholder="Search Todos"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <button
          type="submit"
          className={
            'rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300'
          }
        >
          Add&nbsp;Todos
        </button>
      </form>
    </div>
  )
}

export default Search
