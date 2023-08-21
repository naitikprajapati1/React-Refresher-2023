function customRender(reactElement, container) {
  const domElem = document.createElement(reactElement.type);
  domElem.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") {
      continue;
    } else {
      domElem.setAttribute(prop, reactElement.props[prop]);
    }
  }
  container.appendChild(domElem);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me visit to the google",
};

const container = document.querySelector("#root");

customRender(reactElement, container);
