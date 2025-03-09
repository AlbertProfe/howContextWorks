import { useState } from 'react'
import './App.css'
import ContextWork1 from './ContextWork1'
import ContextWork2 from "./ContextWork2"
import ContextWork3 from "./ContextWork3"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>How useContex works</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ContextWork1 />
      <ContextWork2 />
      <ContextWork3 />
    </>
  );
}

export default App
