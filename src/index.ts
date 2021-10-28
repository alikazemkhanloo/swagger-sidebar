import App from "./app";
import ReactDOM from "react-dom";
declare global {
  interface Window {
    initSidebar: any;
  }
}

function initSidebar(container: Element, reactroot: Element) {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  container?.insertBefore(sidebar, reactroot);
  ReactDOM.render(App(), document.getElementById("sidebar"));
}
window.initSidebar = initSidebar;
