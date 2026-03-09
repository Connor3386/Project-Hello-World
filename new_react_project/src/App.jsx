import './App.css'
import AboutMe from './props.jsx'

function App() {

  return (
<<<<<<< HEAD
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
=======

    <div>
      <AboutMe
      names='Name: Connor'
      titles='Code manager'
      paragraph='I like coding but can find it tedious at times. Im doing CS because I want to study astrophysics,
                and computational astrophysics is really interesting. I might want to avoid the CS parts if it 
                becomes too difficult in college.'
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k8y5nFWtC3iYBf0AFEj7wrJ5n9CK7HHTuQ&s'/>

      <AboutMe
      names='Name: Jules'
      titles='Project manager'
      paragraph='I have loved maps since I could remember. I want to be able to create something with maps that will 
      benefit the communuty that helped me learn to love geography and history, so I am very excited. to work on this
     app.'
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXl999FEKE4-GHm3BuDb93BeohdgQ9v6reg&s'/>

    </div>
>>>>>>> dd04414 (stuff)
  )
}

export default App
