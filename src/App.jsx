import Search from './components/Search'
import TodoItem from './components/TodoItem'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'

function App() {
  const todo = useSelector((state) => state.todos)

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center   w-full md:w-[35%] bg-gray-50 mx-auto">
        <div className="mt-12 w-full">
          <h1 className="py-3 text-center text-4xl font-bold text-gray-900">
            Todos App
          </h1>
          <Search />
          {todo.length === 0 ? (
            <div className="flex justify-center items-center bg-gray-300 rounded-xl p-4">
              <h3 className="font-bold text-xl">No todos left</h3>
            </div>
          ) : (
            todo.map((todo) => {
              return <TodoItem key={todo.id} {...todo} />
            })
          )}
        </div>
      </section>
    </>
  )
}

export default App
