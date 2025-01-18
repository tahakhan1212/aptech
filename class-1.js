let heading = document.getElementsByTagName("h1");
for(let i=0; i<heading.length; i++){
        heading[i].style.color="rebeccapurple"
};

let h4class = document.getElementsByClassName("head4");
for(let i=0; i<h4class.length; i++){
        h4class[i].style.color = "red"
}

let idea = document.getElementById("idea");
idea.style.color="brown";

// let para = document.querySelector(".abc")
// para.style.color = "green"

let para = document.querySelectorAll(".abc");
para.forEach((item) => {
        item.style.color="orange"
})












