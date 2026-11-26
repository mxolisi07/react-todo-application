// import { useState } from 'react'
// @ts-expect-error CSS imports are handled by the bundler.
import './App.css'
import { Search, Add, Moon, Trash, Pen } from "reicon-react"
import '@fontsource/kanit'
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
                <option className='text'>ALL</option>
                <option className='text'>Complete</option>
                <option className='text'>Incomplete</option>
              </select>
            </div>

            <div className='theme-mode'>
              <Moon id='theme'/>
            </div>

          </div>

          <div className="hero-section">
            <label className="checkbox">
                <div className='list-name'>
                  <input className='main-checkbox' type="checkbox"></input>
                  <h3>NOTE #1</h3>
                </div>
                
                <div className='icons'>
                    <Pen />
                    <Trash />
                </div>
            </label>

              <hr></hr>
            <label className="checkbox">
                <div className='list-name'>
                  <input className='main-checkbox' type="checkbox"></input>
                  <h3>NOTE #2</h3>
                </div>
                
                <div className='icons'>
                    <Pen />
                    <Trash />
                </div>
            </label>
              <hr></hr>
            <label className="checkbox">
                <div className='list-name'>
                  <input className='main-checkbox' type="checkbox"></input>
                  <h3>NOTE #3</h3>
                </div>
                
                <div className='icons'>
                    <Pen />
                    <Trash />
                </div>
            </label>
          </div>

          

        </div>

        <div className="add-icon">
            <Add className="add" />
        </div>

      </section>
  )
}

export default App
