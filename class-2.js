console.log("==========hello ==============")

let para = document.querySelector("p");
let paraText = para.innerHTML;
console.log(paraText)

let paraTextContent = para.textContent;
console.log(paraTextContent)

// insertaadjacenthtml

para.insertAdjacentHTML("beforebegin","this is before begin text")
para.insertAdjacentHTML("afterbegin"," this is after begin text")
para.insertAdjacentHTML("beforeend"," this is before end text")
para.insertAdjacentHTML("afterend"," this is after end text")

let newTag = document.createElement("u");
newTag.innerHTML = "this is new underline tag";
document.body.append(newTag);
