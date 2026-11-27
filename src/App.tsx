import { useState } from 'react'
// @ts-expect-error CSS imports are handled by the bundler.
import './App.css'
import { Search, Add, Moon, Trash, Pen } from "reicon-react"
import '@fontsource/kanit'
import type { userTasks } from './types/types'


function App() {
  const [showAddModel, setShowAddModel] = useState(false)

  
  const [tasks, setTasks] = useState<userTasks[]>([])
  const [newDescription, setNewDescription] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [newCompleted, setNewCompleted] = useState(false)
  const [newId, setNewId] = useState("")
  const [newDueDate, setNewDueDate] = useState("")
  // go back

  const handleTitle = (event: any) => {
    setNewTitle(event.target.value)
  }

  const handleDescription = (event: any) => {
    setNewDescription(event.target.value)
  }

  const handleCompleted = (event: any) => {
    setNewCompleted(event.target.value)
  }

  const handleId = (event: any) => {
    setNewId(event.target.value)
  }

  const handleDueDate = (event: any) => {
    setNewDueDate(event.target.value)
  }

  const addTask = () => {                         
    setTasks([...tasks, { title: newTitle, description: newDescription, id: newId, completed: newCompleted, dueDate: newDueDate }])
  } 

  const handleSubmit = () => {
    setShowAddModel(false)
  }

  // const [newTitle, setNewTitle] = useState("")
  // const [newDescription, setNewDescription] = useState("")
  // const [newDate, setNewDate] = useState()

  // const saveNewTask = () => {
  //   const newTask = {
  //     title: "",
  //     description: "",
  //     date: ""
  //   }
    
  // }

  return (
      <section className='main-container'>

        <div className='main-model'>
          {showAddModel && (
            <div className='modal'>
              {/* Give heading for the task & you do the input fields  for what the items */}
                <div className='modal-content' onSubmit={handleSubmit}>
                  <h3>NEW TASK</h3>
                  <label>TITLE</label>
                  <input onChange={handleTitle} type='text' placeholder='Title' id='title'></input>
                  <label>DESCRIPTION</label>
                  <textarea onChange={handleDescription}></textarea>
                  <label>DATE</label>
                  <input onChange={handleDueDate} type='date'></input>


                  <div className='modal-actions'>
                    <button onClick={() => setShowAddModel(false)}>CANCEL</button>
                    <button onClick={addTask}>APPLY</button>
                  </div>
                </div>

            </div>
          )}
        </div>

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

            {tasks.map((task) => {
                    return <h3>{task.description}</h3>
                  })}
           
            {/* <div className="checkbox">
                <div className='list-name'>
                  <input className='main-checkbox' type="checkbox"></input>
                  
                </div>
                
                <div className='icons'>
                    <Pen />
                    <Trash />
                </div>
            </div>

              <hr></hr>
            <div className="checkbox">
                <div className='list-name'>
                  <input className='main-checkbox' type="checkbox"></input>
                  <h3>NOTE #2</h3>
                </div>
                
                <div className='icons'>
                    <Pen />
                    <Trash />
                </div>
            </div>

              <hr></hr>

            <div className="checkbox">
                <div className='list-name'>
                  <input className='main-checkbox' type="checkbox"></input>
                  <h3>NOTE #3</h3>
                </div>
                
                <div className='icons'>
                    <Pen />
                    <Trash />
                </div>
            </div> */}
          </div>

          

        </div>

        <div className="add-icon">
          <button className='btn-add'>
              <Add className="add" onClick={() => setShowAddModel(true)}/>
          </button>
        </div>

      </section>
  )
}

export default App
