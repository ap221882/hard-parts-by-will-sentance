let name = "";
let jsDiv;
let jsInput;
let vDOM;

function createVDOM() {
  return [
    ["input", name, handle],
    ["div", "Hello", `${name}!`],
  ];
}

function handle() {
  name = jsInput.value;
}

function updateDOM() {
  vDOM = createVDOM();
  jsInput = convert(vDOM[0]);
  jsDiv = convert(vDOM[1]);
  document.body.replaceChildren(jsInput, jsDiv);
}

function convert(node) {
  const elem = document.createElement(node[0]);
  elem.textContent = node[1];
  elem.value = node[1];
  elem.oninput = node[2];
  return elem;
}

setInterval(updateDOM, 15);
