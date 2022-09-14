import { Circle, Trash } from 'phosphor-react';
import styles from "./Task.module.css";
import React from 'react'

export function Task() {
  return (
    <div className={styles.taskContainer}>
      <Circle size={24} />
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia optio porro nisi ullam voluptate voluptates. </p>
      </div>
      <Trash size={24} />
    </div>
  )
}
