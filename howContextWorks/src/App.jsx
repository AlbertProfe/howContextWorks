import { useState } from 'react'
import './App.css'
import ContextWork1 from './ContextWork1'
import ContextWork2 from "./ContextWork2"
import ContextWork3 from "./ContextWork3"
import ContextWork4 from "./ContextWork4"
import ContextWork5 from "./ContextWork5"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>How useContext works</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <hr />
      <ContextWork1 />
      <hr />
      <ContextWork2 />
      <hr />
      <ContextWork3 />
      <hr />
      <ContextWork4 />
      <hr />
      <ContextWork5 />
    </>
  );
}

export default App
