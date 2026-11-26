import { useState } from 'react'
// @ts-expect-error CSS imports are handled by the bundler.
import './App.css'
import { Search, Add, Moon, Trash, Pen } from "reicon-react"
import '@fontsource/kanit'
import { AddList } from './components/addNewList'

function App() {
  const [showAddModel, setShowAddModel] = useState(false)


  return (
      <section className='main-container'>
        {showAddModel && <div className='modal'>
          {/* Give heading for the task & you do the input fields  for what the items */}
          <div className='modal-show'>
            <input type='text' placeholder='Title' id='title'></input>
            <textarea></textarea>
            <input type='date'></input>
          </div>
          </div>}

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
          <button className='btn-add'>
              <Add className="add" onClick={() => setShowAddModel(true)}/>
          </button>
        </div>

        {/* The Modal */}
        <div id='myModal' className='modal'>


        </div>

      </section>
  )
}

export default App
