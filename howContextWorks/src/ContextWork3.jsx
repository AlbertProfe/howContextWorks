import React, { createContext, useContext, useState } from "react";

// Create Context
const DataProvider = createContext();

// App Parent Context Root Component 3
function ParentRootContext3() {
  const [data, setData] = useState("Initial Shared Data");

  return (
    <DataProvider.Provider value={data}>
      <div className="parent-root">
        <h3>React useContext Example#3</h3>
        {/* Input to update shared data */}
        <input
          type="text"
          placeholder="Update shared data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="data-input"
        />
        <div className="branches-container">
          {/* First branch */}
          <div className="branch">
            <Child1 />
          </div>
          {/* Second branch */}
          <div className="branch">
            <Child11 />
          </div>
        </div>
      </div>
    </DataProvider.Provider>
  );
}

export default ParentRootContext3;

// Child3 Component
function Child3() {
  const data = useContext(DataProvider);
  return (
    <div className="child-component">
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
    <div className="child-component">
      <h3>Child2 Component</h3>
      <Child3 />
    </div>
  );
}

// Child1 Component
function Child1() {
  return (
    <div className="child-component">
      <h3>Child1 Component</h3>
      <Child2 />
    </div>
  );
}

// Child13 Component (Second Branch)
function Child13() {
  const data = useContext(DataProvider);
  return (
    <div className="child-component">
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
    <div className="child-component">
      <h3>Child12 Component</h3>
      <Child13 />
    </div>
  );
}

// Child11 Component (Second Branch)
function Child11() {
  return (
    <div className="child-component">
      <h3>Child11 Component</h3>
      <Child12 />
    </div>
  );
}
