function createStore() {
  let state;
  let listeners = [];

  const getState = () => state;

  const subsribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  return {
    getState,
    subsribe,
  };
}
