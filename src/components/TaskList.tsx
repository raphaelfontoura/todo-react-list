import React from 'react';
import { Task } from './Task';
import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskCounters}>
        <p>Tarefas Criadas <span>0</span> </p>
        <p>Concluídas <span>0</span> </p>
      </div>
      <Task />
    </div>
  )
}
