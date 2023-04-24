const mobileMenuElement = document.getElementById("mobilemenu")
const closedburger = document.getElementById("hamburgermenu-closed")
const openedburger = document.getElementById("hamburgermenu-open")
let imgBtn = document.getElementsByClassName("product-box")
let produkt1 = imgBtn[0];
let produkt2 = imgBtn[1];
let produkt3 = imgBtn[2];
let soken = document.getElementById("sokefelt")
document.getElementsByClassName("hamburgermenu-closed").onclick = function() {hamburgeropen()};

function openburger() { 
    closedburger.classList.add('hidden')
    openedburger.classList.remove('hidden')
    mobileMenuElement.classList.remove('hidden')
}
function closeburger() {
    openedburger.classList.add('hidden')
    closedburger.classList.remove('hidden')
    mobileMenuElement.classList.add('hidden')
}
closedburger.addEventListener('click', openburger)
openedburger.addEventListener('click', closeburger)

function sok() {
    alert("Du kan ikke søke!")
}

const vareArray = [
    {
      pris: 5000, 
      beskrivelse: "Den nyeste mobiltelefonen", 
      specHead:"Spesifikasjoner",
      specs: "Størrelse: 13cm <br>Oppløsning: 1080p <br> ",
    },
  ]
  
  function clickOnImage() {
    produkt1.style.height = "120vh"
    produkt2.style.display = "none"
    produkt3.style.display = "none"
    soken.style.display = "none"
    for (let i = 0; i < vareArray.length; i++) {
      const wrapperDiv = document.createElement("div");
  
      const pTag = document.createElement("p");
      const pText = document.createTextNode(vareArray[i].pris);
      pTag.appendChild(pText);
  
      const pTag2 = document.createElement("p");
      const pText2 = document.createTextNode(vareArray[i].beskrivelse);
      pTag2.appendChild(pText2);
      
      const hTag = document.createElement("h2");
      const hText = document.createTextNode(vareArray[i].specHead)
      hTag.appendChild(hText);

      const pTag3 = document.createElement("p");
      pTag3.innerHTML = vareArray[i].specs;
  
      wrapperDiv.appendChild(pTag);
      wrapperDiv.appendChild(pTag2);
      wrapperDiv.appendChild(hTag);
      wrapperDiv.appendChild(pTag3);
  
      const gridElementfromhtml = document.getElementById("gridElement");
      gridElementfromhtml.appendChild(wrapperDiv);
    }
    pTag.style.marginTop = "-10vh";
  }
  
  produkt1.addEventListener("click", clickOnImage);
  produkt2.addEventListener("click", clickOnImage);
  produkt3.addEventListener("click", clickOnImage);
  

produkt1.addEventListener("click", clickOnImage)
produkt2.addEventListener("click", clickOnImage)
produkt3.addEventListener("click", clickOnImage)





// function toRed() {
//     item.style.color = "green";
// }

// function toBlue() {
// item.classList.add("blue")
// item.classList.remove("red")
// item.attributes
// }
