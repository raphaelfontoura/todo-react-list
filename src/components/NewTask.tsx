import { PlusCircle } from 'phosphor-react';
import React, { useState } from 'react';

import styles from './NewTask.module.css';

interface NewTaskProps {
  addTask: (newTask: string) => void;
}

export function NewTask({ addTask }: NewTaskProps) {

  const [newTask, setNewTask] = useState("");

  function handleInputNewTask(event: React.FormEvent<HTMLInputElement>) {
    setNewTask(event.currentTarget.value);
  }

  function handleAddNewTask() {
    addTask(newTask);
    setNewTask("");
  }

  return (
    <div className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" onChange={handleInputNewTask} value={newTask}/>
      <button onClick={handleAddNewTask}>Criar <PlusCircle size={16} /></button>
    </div>
  )
}