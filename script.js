document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
}

function changeFontColor() {

  let button = document.getElementById("changeColor");
  let color = button.style.color;
  if (color == "red") { 
     button.style.color = 'aqua';
  } else if (color == 'aqua') {
    button.style.color ='orange'; 
  } else {
     button.style.color = 'red';
  }
}

document.addEventListener('contextmenu', event => event.preventDefault());