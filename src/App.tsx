import styles from "./App.module.css";
import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

function App() {

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <NewTask />
        <TaskList />
      </div>
    </div>
  )
}

export default App
