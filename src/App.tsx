import styles from "./App.module.css";
import todoLogo from "./assets/img/rocket.svg";

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={todoLogo} alt="rocket todo logotipo" />
        <span>to</span>
        <span>do</span>
      </div>
      <div>
        <input type="text" />
        <button>Criar</button>
      </div>
    </div>
  )
}

export default App
