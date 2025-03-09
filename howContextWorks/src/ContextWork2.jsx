import React, { createContext, useContext, useState } from "react";

// Create Context
const DataProvider = createContext();

// App Parent Context Root Component 2
function ParentRootContext2() {
  const [data, setData] = useState("Initial Shared Data");

  return (
    <DataProvider.Provider value={data}>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h3>React useContext Example#2</h3>
        {/* Input to update shared data */}
        <input
          type="text"
          placeholder="Update shared data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          style={{
            padding: "8px",
            marginBottom: "20px",
            width: "100%",
            maxWidth: "400px",
            fontSize: "16px",
          }}
        />
        {/* First branch */}
        <Child1 />
        {/* Second branch */}
        <Child11 />
      </div>
    </DataProvider.Provider>
  );
}

export default ParentRootContext2;

// Child3 Component
function Child3() {
  const data = useContext(DataProvider);
  return (
    <div
      style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <h3>Child3 Component</h3>
      <p>
        Shared Data: <strong>{data}</strong>
      </p>
    </div>
  );
}

// Child2 Component
function Child2() {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <h3>Child2 Component</h3>
      <Child3 />
    </div>
  );
}

// Child1 Component
function Child1() {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <h3>Child1 Component</h3>
      <Child2 />
    </div>
  );
}

// Child13 Component (Second Branch)
function Child13() {
  const data = useContext(DataProvider);
  return (
    <div
      style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <h3>Child13 Component</h3>
      <p>
        Shared Data: <strong>{data}</strong>
      </p>
    </div>
  );
}

// Child12 Component (Second Branch)
function Child12() {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <h3>Child12 Component</h3>
      <Child13 />
    </div>
  );
}

// Child11 Component (Second Branch)
function Child11() {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <h3>Child11 Component</h3>
      <Child12 />
    </div>
  );
}


