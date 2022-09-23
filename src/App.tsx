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

  function handleAddTask(newTask: String) {
    const newTasks = [...tasks, {
      id: Math.random(),
      task: newTask,
      isCompleted: false,
    }];
    setTasks(newTasks);
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <NewTask addTask={handleAddTask} />
        <div className={styles.taskContainer}>
          <div className={styles.taskCounters}>
            <p>Tarefas Criadas <span>{tasks.length}</span> </p>
            <p>Concluídas <span>0</span> </p>
          </div>
          {tasks.map(({id, task}) =>
          (
            <div className={styles.task}>
              <Task key={id} task={task} />
            </div>
          )
          )}
        </div>

      </div>
    </div>
  )
}

export default App
