# How Context works

## Intro & Links

- [GitHub - AlbertProfe/howContextWorks](https://github.com/AlbertProfe/howContextWorks)
- [React JS: useContext – albertprofe wiki](https://albertprofe.dev/reactjs/reactjs-hook-context.html)
- [react.dev: context](https://react.dev/learn/passing-data-deeply-with-context)

**Analogy: Container for Shared State**

Think of a Context object like a **global container for shared state**:

1. The `Provider` acts as a "source" that supplies data.
2. Components consuming the context (via `useContext`) act as "listeners" that read from this source.

## Examples

Here are **6 simple examples to demonstrate the use of the `useContext` hook in React**, these examples showcase how `useContext` simplifies state sharing across components <mark>without prop drilling</mark>:

### 1. **Basic Context Example**

```jsx
import React, { createContext, useContext } from "react";

const MyContext = createContext("Default Value");

function Child() {
  const value = useContext(MyContext);
  return <h1>{value}</h1>;
}

function App() {
  return (
    <MyContext.Provider value="Hello from Context!">
      <Child />
    </MyContext.Provider>
  );
}

export default App;
```

### 2. **Theme Toggle Example**

```jsx
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeToggle() {
  const theme = useContext(ThemeContext);
  return <button onClick={theme.toggleTheme}>Toggle to {theme.dark ? "Light" : "Dark"} Mode</button>;
}

function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div style={{ background: dark ? "#333" : "#fff", color: dark ? "#fff" : "#000" }}>
        <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

### 3. **User Authentication Example**

```jsx
import React, { createContext, useContext } from "react";

const UserContext = createContext();

function Profile() {
  const user = useContext(UserContext);
  return <h1>Welcome, {user.name}!</h1>;
}

function App() {
  const user = { name: "John Doe", loggedIn: true };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
```

### 4. **Language Selector Example**

```jsx
import React, { createContext, useContext } from "react";

const LanguageContext = createContext();

function Greeting() {
  const lang = useContext(LanguageContext);
  return <h1>{lang === "en" ? "Hello" : "Hola"}!</h1>;
}

function App() {
  return (
    <LanguageContext.Provider value="es">
      <Greeting />
    </LanguageContext.Provider>
  );
}

export default App;
```

### 5. **Nested Components Example**

```jsx
import React, { createContext, useContext } from "react";

const DataProvider = createContext();

function Child3() {
  const data = useContext(DataProvider);
  return <h3>Data: {data}</h3>;
}

function Child2() {
  return <Child3 />;
}

function Child1() {
  return <Child2 />;
}

function App() {
  return (
    <DataProvider.Provider value="Shared Data">
      <Child1 />
    </DataProvider.Provider>
  );
}

export default App;
```

### 6. Storing Multiple Data Types in Context

```jsx
import React, { createContext, useContext } from "react";

// Create Context
const DataProvider = createContext();

// Child Component
function Child() {
  // Consume the context
  const data = useContext(DataProvider);

  return (
    <div>
      <h3>Data from Context:</h3>
      <p><strong>String:</strong> {data.string}</p>
      <p><strong>Array:</strong> {data.array.join(", ")}</p>
      <p><strong>JSON Object:</strong> {JSON.stringify(data.json)}</p>
      <p><strong>JSON Array:</strong> {JSON.stringify(data.jsonArray)}</p>
      <p><strong>Hashmap:</strong></p>
      <ul>
        {Array.from(data.hashmap.entries()).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

// App Component
function App() {
  // Define multiple data types to store in context
  const contextValue = {
    string: "Hello, World!",
    array: [1, 2, 3, 4],
    json: { name: "John", age: 30 },
    jsonArray: [{ id: 1, value: "A" }, { id: 2, value: "B" }],
    hashmap: new Map([
      ["key1", "value1"],
      ["key2", "value2"],
    ]),
  };

  return (
    <DataProvider.Provider value={contextValue}>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>React Context with Multiple Data Types</h1>
        <Child />
      </div>
    </DataProvider.Provider>
  );
}

export default App;
```

## Sharing states in 3 steps

- `context creation`: creates the `context` object container 
- `context provider`: fills `context` with data and provides to childrens
- `context hook`: consumes data via `useContext` `hook`

Let's discuss the <mark>Example#5</mark>

#### Explanation of `const DataProvider = createContext();`

The `createContext()` function in React is used to create a **Context object**. This object allows you to share data across components without having to pass props manually through every level of the component tree. Let’s break it down:

#### What Kind of Object Is It?

- `createContext()` returns a **Context object** with two main properties:
  
  1. **`Provider`**: A React component that allows you to supply (or "provide") data to the context.
  
  2. **`Consumer`** (optional): A React component that allows other components to consume the context data (though this is rarely used now because the `useContext` hook is simpler).

> So, `DataProvider` is not a JSON object, array, or container like you'd use in plain JavaScript. Instead, it’s a special React object designed specifically for managing shared state.

#### Where Is the Data Stored?

- The data provided by the context (`DataProvider.Provider`) is stored in **React's internal memory** (not in a specific external container like an array or object).

- React manages this data as part of its component tree and reconciliation process. When the `value` prop of the `Provider` changes, React ensures that all components consuming this context are updated.

In our example:

```jsx
<DataProvider.Provider value={data}>
```

The `value={data}` prop stores the shared data (`data`) inside the context.

#### How Does `useContext` Work?

- The `useContext(DataProvider)` hook retrieves the current value from the nearest `<DataProvider.Provider>` higher up in the component tree.

- We don’t need to worry about how or where React stores this data internally—React handles it efficiently as part of its virtual DOM and state management system.

#### Why Use Context Instead of Props?

> Normally, if we want to share data across deeply nested components, we would pass props down through every level of the hierarchy. 
> 
> This is called **"prop drilling**" and can become cumbersome when dealing with large trees.

Using context:

- We avoid prop drilling.

- Any component within the `<DataProvider.Provider>` subtree can directly access the shared data using `useContext`.

## Example Flow Code

1. **Create Context**:
   
   `const DataProvider = createContext();`
   
   This creates a Context object (`DataProvider`) with a `Provider`.

2. **Provide Data**:
   
   `<DataProvider.Provider value={data}>`
   
   Here, we supply (`provide`) the value (`data`) to all child components inside this provider.

3. **Consume Data**:
   
   `const data = useContext(DataProvider);`
   
   Any child component can call `useContext(DataProvider)` to access the current value stored in the context.

## Recap

- The context created by `createContext()` is not a JSON object, array, or literal—it’s a special React object for managing shared state.
- The actual data is stored internally by React within its memory and passed down through the component tree using the `<Provider>` and consumed via `useContext`.
- This approach simplifies state management across deeply nested components by eliminating prop drilling.
