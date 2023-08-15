let post="";
let jsInput;
let jsDiv;


function dataToView(){
  jsInput = document.createElement("input");
  jsDiv = post==="Ajay" ? "":document.createElement("div");

  jsInput.value = post;
  jsDiv.textContent = post;
  jsInput.oninput = handleInput;

  document.body.replaceChildren(jsInput, jsDiv)
}

function handleInput (){
  post = jsInput.value;
}

setInterval(dataToView,1500)