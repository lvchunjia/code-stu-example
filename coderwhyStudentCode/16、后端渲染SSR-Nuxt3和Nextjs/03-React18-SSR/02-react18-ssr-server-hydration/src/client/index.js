import React from "react";
import ReactDOM from "react-dom/client";
import App from "../app.jsx";

// 在需要激活的模式下挂载应用 ( hydrateRoot )
ReactDOM.hydrateRoot(document.getElementById("root"), <App />);
