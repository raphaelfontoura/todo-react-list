import { CheckCircle, Circle, Trash } from 'phosphor-react';
import React from 'react';

import styles from './Task.module.css';

interface TaskProps {
  id: number;
  task: String;
  done?: Boolean;
  checkDone: (id : number) => void;
  deleteTask: (id :  number) => void;
}

export function Task({ id, task, done = false, checkDone, deleteTask } : TaskProps) {

  function handleCheck() {
    checkDone(id);
  }

  function handleDelete() {
    console.log('delete');
    deleteTask(id);
  }

  return (
    <div className={styles.taskContainer}>
      <div onClick={handleCheck}>
        {done 
          ? ( <CheckCircle size={24} weight="fill" className={styles.checked} /> ) 
          : ( <Circle size={24} className={styles.unchecked}/> )
        }
      </div>
      <div>
        <p className={done ? styles.textTaskDone : styles.textTask}>
          {task}
        </p>
      </div>
      <Trash size={24} className={styles.trash} onClick={handleDelete}/>
    </div>
  )
}
