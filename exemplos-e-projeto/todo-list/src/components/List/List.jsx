import { useState } from 'react'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'

import '../List/list.styles.css'
const List = () => {
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    const task = {
      id: Math.random(),
      title: newTask,
      isComplete: false
    }

    if(task.title === '') {
      return
    }

    setList([...list, task])
    setNewTask('')
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Tarefas a fazer:</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar nova tarefa" 
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {list.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    checked={task.isComplete}
                    onClick={() => {}}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => {}}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}

export default List