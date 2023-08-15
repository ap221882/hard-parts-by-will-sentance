let name = "";
let vDOM;
let elems;

function createVDOM() {
  return [
    ["input", name, handle],
    ["div", "Hello", `${name}!`],
    ["div", "Now I am become death, the destroyer of worlds."],
    ["div", "- Bhagavada Gita"],
  ];
}

function handle(e) {
  name = e.target.value;
}

function updateDOM() {
  vDOM = createVDOM();
  elems = vDOM.map(convert);
  document.body.replaceChildren(...elems);
}

function convert(node) {
  const elem = document.createElement(node[0]);
  elem.textContent = node[1];
  elem.value = node[1];
  elem.oninput = node[2];
  return elem;
}

setInterval(updateDOM, 15);
