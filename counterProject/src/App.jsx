import  { useState } from "react";
import styles from "../src/Card.module.css";

function App() {
  try {


    const [counter, setCount] = useState(0);

    const updateInc = () => { setCount(counter + 1) };

    const updateDec = () => { setCount(counter - 1) };

    return (
      <>
        <div className={styles.card}>
          <h1 className={styles.heading1} >Count: {counter} </h1>
          <div className={styles.buttonGroup} >
              <button onClick={updateInc}>Increment</button>
              <button onClick={updateDec}>Decrement</button>
          </div>
          
        </div>
      </>
    )
  } catch (error) {
    console.log(error);
    
  }
}

export default App
