// import { useState } from 'react'
// @ts-expect-error CSS imports are handled by the bundler.
import './App.css'
import { PlusCircle, Search } from "reicon-react"
function App() {
  // const [count, setCount] = useState(0)

  return (
      <section className='main-container'>

        <h2>TODO LIST</h2>

        <div className='home-container'>
        
          <div className='hero-header'>
            <div className='sub-header'>
              <input type="text" placeholder="Search note..."/>
              <Search id='search-icon'></Search>
            </div>
            
            <div className='status'>
              <select>
                <option>All</option>
                <option>Complete</option>
                <option>Incomplete</option>
              </select>
            </div>

          </div>

          <div className="hero-section">
            <label className="checkbox">
                <input type="checkbox"></input>
                NOTE #1
            </label>

            <label className="checkbox">
              <input type="checkbox"></input>
                NOTE #2
            </label>

            <label className="checkbox">
              <input type="checkbox"></input>
                NOTE #3
            </label>
          </div>

          

        </div>
        <div className="add-icon">
            <PlusCircle className="add" />
          </div>
      </section>
  )
}

export default App
