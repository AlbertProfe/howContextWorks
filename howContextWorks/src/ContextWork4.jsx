import React, { createContext, useContext } from "react";

// Create Context
const DataProvider = createContext();

// Child Component
function Child() {
  // Consume the context
  const data = useContext(DataProvider);

  return (
    <>
      <p>Data from Context:</p>
      <div className="context-data-container">
        <p>
          <strong>String:</strong> {data.string}
        </p>
        <p>
          <strong>Array:</strong> {data.array.join(", ")}
        </p>
        <p>
          <strong>JSON Object:</strong> {JSON.stringify(data.json)}
        </p>
        <p>
          <strong>JSON Array:</strong> {JSON.stringify(data.jsonArray)}
        </p>
        <p>
          <strong>Hashmap:</strong>
        </p>
        <ul>
          {Array.from(data.hashmap.entries()).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// App Component
function App() {
  // Define multiple data types to store in context
  const contextValue = {
    string: "Hello, World!",
    array: [1, 2, 3, 4],
    json: { name: "John", age: 30 },
    jsonArray: [
      { id: 1, value: "A" },
      { id: 2, value: "B" },
    ],
    hashmap: new Map([
      ["key1", "value1"],
      ["key2", "value2"],
    ]),
  };

  return (
    <DataProvider.Provider value={contextValue}>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h3>React Context with Multiple Data Types Example#4</h3>
        <Child />
      </div>
    </DataProvider.Provider>
  );
}

export default App;
