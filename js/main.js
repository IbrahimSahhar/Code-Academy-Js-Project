

const LANGUAGES = {
  eng: {
    hello: "HELLO",
    mynameis: "MY NAME IS",
  },
  ar: {
    hello: "مرحباً",
    mynameis: "اسمي هو",
  },
  esp: {
    hello: "HOLA",
    mynameis: "ME LLAMO",
  },
  fra: {
    hello: "BONJOUR",
    mynameis: "JE M'APPELLE",
  },
};

/*---------------------------------------------------------------- */
const outputText = document.querySelector(".generate");
const name = document.getElementById("name");
const language = document.getElementById("language");
const tagColor = document.getElementById("tag-color");
const nameColor = document.getElementById("name-color");
const generateButton = document.querySelector(".generate-button");
let count = 0;

/*---------------------------------------------------------------- */
generateButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value != "") {
    const nameValue = name.value;
    const languageValue = language.value;
    const tagColorValue = tagColor.value;
    const nameColorValue = nameColor.value;

/*----------------------------- Start nametag  ----------------------------------- */
    const nametag = document.createElement("div");
    nametag.className = "nametag";
    nametag.id = "nametag";
    nametag.style.cssText = ` 
    height: 17.5rem;
    display: flex;
    flex-direction: column;
    borderRadius: 2.625rem;
    padding: 1rem;
    position: relative;
    `;
    nametag.style.backgroundColor = tagColorValue;

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./assets/icons/icon.png";
    deleteIcon.style.cssText =
      "position: absolute;right:0.625rem;top:0.625rem;width: 1.25rem;cursor:pointer";
    nametag.appendChild(deleteIcon);
/*----------------------------- End nametag ----------------------------------- */

/*----------------------------- Start nametagHeader  ----------------------------------- */
    const nametagHeader = document.createElement("div");
    nametagHeader.className = "nametag-header";
    nametagHeader.style.cssText = `  
    flex: 0.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    `;
    const hello = document.createElement("h1");
    hello.className = "hello";
    hello.id = "hello";
    hello.textContent = LANGUAGES[languageValue].hello;
    hello.style.cssText = `  
    margin: 0;
    padding: 0;
    line-height: 1em;
    font-size: 4em;
    `;
    const mynameis = document.createElement("h3");
    mynameis.className = "mynameis";
    mynameis.id = "mynameis";
    mynameis.textContent = LANGUAGES[languageValue].mynameis;
    nametagHeader.appendChild(hello);
    nametagHeader.appendChild(mynameis);
    nametag.appendChild(nametagHeader);
 /*----------------------------- End nametagHeader  ----------------------------------- */


 /*----------------------------- Start nametagBody  ----------------------------------- */
    const nametagBody = document.createElement("div");
    nametagBody.className = "nametag-body";
    nametagBody.style.cssText = `  
    background-color: rgb(250, 250, 250);
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.6;
    overflow: hidden;
    `;
 /*----------------------------- End nametagBody  ----------------------------------- */

 /*----------------------------- Start nametagName  ----------------------------------- */
    const nametagName = document.createElement("div");
    nametagName.className = "nametag-name";
    nametagName.id = "nametag-name";
    nametagName.textContent = nameValue;
    nametagName.style.cssText = `  
    font-family: Sriracha;
    text-align: center;
    font-size: 3em;
    margin: 0;
    padding: 0;
    overflow: auto;
    color: ${nameColorValue}
    `;
    nametagBody.appendChild(nametagName);
    nametag.appendChild(nametagBody);
 /*----------------------------- End nametagName  ----------------------------------- */

 /*----------------------------- Start nametagFooter  ----------------------------------- */
    const nametagFooter = document.createElement("div");
    nametagFooter.className = "nametag-footer";
    nametagFooter.style.cssText = `  
    flex: none;
    height: 0.9375rem;
    backgroundColor: ${tagColorValue}
    `;
    nametag.appendChild(nametagFooter);
 /*----------------------------- End nametagFooter  ----------------------------------- */

    outputText.appendChild(nametag);
    count++;
    name.value = "";

 /*----------------------------- Start deleteAll Button  ----------------------------------- */
 var x = window.matchMedia("(max-width: 48rem)")
    const deleteAll = document.createElement("button");
    deleteAll.className = "deleteAll";
    outputText.style.position = "relative";
    deleteAll.style =
      "color: rgb(255 255 255);background-color: black;right:1.25rem;top:-3.125rem;border-radius: 0.125rem;border: 0.0125rem solid white;position:absolute;padding:0.425rem 0.7375rem;cursor:pointer; font-size: 1.3rem";
    if(x.matches){
      deleteAll.style.fontSize = "0.8rem";
      deleteAll.style.right = "2.5rem";
      deleteAll.style.marginTop = "0.5rem";
    }

      deleteAll.textContent = "Clear All";
    if (count > 0) {
      outputText.appendChild(deleteAll);
    }
 /*----------------------------- End deleteAll Button  ----------------------------------- */

 /*----------------------------- Start countNumber ----------------------------------- */
    const countNumber = document.createElement("span");
    countNumber.textContent = count;
    countNumber.style =
      "color: rgb(255 255 255);background-color: black;left: 1.25rem;top:-3.125rem;border-radius: 0.125rem;border: 0.0125rem solid white;position:absolute;padding:0.425rem 0.7375rem; font-size: 1.25rem";
    outputText.appendChild(countNumber);

    if(x.matches){
      countNumber.style.fontSize = "0.8rem";
      countNumber.style.left = "0.5rem";
      countNumber.style.marginTop = "0.5rem";
    }
 /*----------------------------- End countNumber ----------------------------------- */

    setInterval(() => {
      if (count === 0) {
        deleteAll.style.display = 'none';
        countNumber.style.display = 'none';
      }
      countNumber.textContent = count;

    },0);



 /*----------------------------- for delete the Tag Name ----------------------------------- */
    deleteIcon.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      count--;
    });

 /*----------------------------- for delete the All Tags ----------------------------------- */
    deleteAll.addEventListener("click", () => {
      outputText.textContent = "";
      count = 0;
    });
  } else {
 /*----------------------------- if the name input is empty ----------------------------------- */
    return console.log("You must provide a name");
  }
});
