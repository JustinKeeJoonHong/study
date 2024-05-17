import ReactDOM from "react-dom";

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
    <div>
      <h1>Grandchild</h1>
      <h3>Name : {name}</h3>
    </div>
  );
};

const App = () => {
  const name = "Andrew";

  return <Parent />;
};

ReactDOM.render(<App />, document.getElementById("root"));
