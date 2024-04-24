function createStore() {
  let state;
  let listeners = [];

  const getState = () => state;

  const subsribe = (listener) => listeners.push(listener);

  return {
    getState,
    subsribe,
  };
}
