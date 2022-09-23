import { Circle, Trash } from 'phosphor-react';
import React from 'react';

import styles from './Task.module.css';

interface TaskProps {
  task: String;
}

export function Task({ task } : TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <Circle size={24} />
      <div>
        <p>{task}</p>
      </div>
      <Trash size={24} />
    </div>
  )
}
