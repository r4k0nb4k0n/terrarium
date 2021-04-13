function dragElement(terrariumElement) {
  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }
  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    console.log(pos1, pos2, pos3, pos4);
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
  }
  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
  //set 4 positions for positioning on the screen
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;
}

function dblClickElement(terrariumElement) {
  let zIndex = 2;
  terrariumElement.ondblclick = (e) => {
    e.preventDefault();
    console.log(e);
    terrariumElement.style.zIndex =
      zIndex + parseInt(terrariumElement.style.zIndex);
    terrariumElement.style.zIndex = parseInt(terrariumElement.style.zIndex) + 1;
  };
}

const plants = [];
let i = 1;
while (i <= 14) {
  plants.push(document.getElementById(`plant${i}`));
  dragElement(plants[plants.length - 1]);
  dblClickElement(plants[plants.length - 1]);
  i++;
}
