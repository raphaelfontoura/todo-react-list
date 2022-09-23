import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';

interface Task {
  id: number;
  task: String;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [id, setId] = useState(1);

  function handleAddTask(newTask: String) {
    const newTasks = [...tasks, {
      id: id,
      task: newTask,
      isCompleted: false,
    }];
    setTasks(newTasks);
    setId(id + 1);
  }

  function handleTaskDone(id: number) {
    const newTasks = tasks.map(task => task.id === id ? {
      ...task,
      isCompleted: !task.isCompleted,
    } : task);
    setTasks(newTasks);
  }

  function handleDeleteTask(id: number) { 
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  function countCompletedTasks() {
    return tasks.filter(task => task.isCompleted).length;
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <NewTask addTask={handleAddTask} />
        <div className={styles.taskContainer}>
          <div className={styles.taskCounters}>
            <div>
              <p> Tarefas Criadas </p> 
              <span className={styles.pillCount}>{tasks.length}</span>
            </div>
            <div>
              <p> Concluídas </p>
              {tasks.length > 0 && 
                (  
                  <span className={styles.pillCount}>
                    {countCompletedTasks()} de {tasks.length}
                  </span>
                )
              }
            </div>
            
          </div>
          {tasks.map(({id, task, isCompleted}) =>
          (
            <div className={styles.task}>
              <Task 
                key={id} 
                id={id}
                task={task} 
                done = {isCompleted}
                checkDone={handleTaskDone} 
                deleteTask={handleDeleteTask}
              />
            </div>
          )
          )}
        </div>

      </div>
    </div>
  )
}

export default App
