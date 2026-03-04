import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     
      <div className="flex justify-center p-8">
        <div className="bg-white border-2 border-blue-300 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 p-8 w-80">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4 underline decoration-blue-500">Counter Card</h3>
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 mb-4"
          >
            Count is {count}
          </button>
         
          <p className="text-sm text-gray-500 text-center">Click the button above to add to the counter!</p>
        </div>
      </div>
   
    </>
  )
}

export default App
