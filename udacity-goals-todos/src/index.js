import React from "react";
import { createRoot } from "react-dom/client"; // createRoot를 임포트합니다.
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer, middleware);

// React 18 이상에서의 새로운 렌더링 방식
const container = document.getElementById("root"); // 루트 컨테이너를 가져옵니다.
const root = createRoot(container); // createRoot로 루트를 생성합니다.

root.render(
  // root.render로 컴포넌트를 렌더링합니다.
  <Provider store={store}>
    <App />
  </Provider>
);
