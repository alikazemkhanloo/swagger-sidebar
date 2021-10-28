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
  reactroot.setAttribute("style", "margin-left:280px;");
  container?.insertBefore(sidebar, reactroot);
  ReactDOM.render(App(), document.getElementById("sidebar"));
}
window.initSidebar = initSidebar;
