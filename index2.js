import React from "react";
import ReactDOM from "react-dom";

const Context = React.createContext();

const Parent = () => {
  return (
    <div>
      <h1>Parent</h1>
      <Child />
    </div>
  );
};

const Child = () => {
  return (
    <div>
      <h1>Child</h1>
      <Grandchild />
    </div>
  );
};

const Grandchild = ({ name }) => {
  return (
    <Context.Consumer>
      {(name) => (
        <div>
          <h1>Grandchild</h1>
          <h3>Name : {name}</h3>
        </div>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  const name = "Andrew";

  return (
    <Context.Provider value={name}>
      <Parent />
    </Context.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
