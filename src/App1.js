import { useState } from 'react'
import Navbar from './components/Navbar'

const pages = ['Home', ' Portfolio', 'Contact', 'About']
const subPages = {
  category: 'Projects',
  pages: ['Project 1', 'Project 2', 'Project 3']
}

const pages1 = ['Home', ' Financial', 'Profile', 'News Feed']
const subPages1 = {
  category: 'Shopping',
  pages: ['View Cart', 'Recent Orders', 'Help']
}

const App = () => {

  const [countState, setCountState] = useState({
    count: 0,
    name: 'John Doe'
  })

  const handleIncrement = () => {
    setCountState({ ...countState, count: countState.count + 1 })
  }

  const handleDecrement = () => {
    setCountState({ ...countState, count: countState.count - 1 })
  }

  const handleReset = () => {
    setCountState({ ...countState, count: 0 })
  }

  return (
    <>
      {/* <Navbar
        name="My First App"
        pages={pages}
        subPages={subPages} />
      <Navbar
        name="My Shop"
        pages={pages1}
        subPages={subPages1} /> */}
      <h1>{countState.name}</h1>
      <h1>Count: {countState.count}</h1>
      <button
        onClick={handleIncrement} >
        +
      </button>
      <button
        onClick={handleDecrement} >
        -
      </button>
      <button
        onClick={handleReset} >
          RESET
        </button>
    </>
  )
}

export default App
