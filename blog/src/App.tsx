import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './elements/JxsFragment'

const jsxEl = <h1>I am a JSX element</h1>

const Header = (
  <header> 
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
)

const Footer = (
  <p>Copyright &copy; 2024</p>
)

function App() {
  const [count, setCount] = useState(0)
  const today = new Date()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {jsxEl}

      {Header}

      {/* <h3 style={{backgroundColor:'blue', color:'gold'}}>It's today: {today.toLocaleDateString()} </h3> */}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {Footer}
    </>
  )
}

export default App
