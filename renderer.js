// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.getElementById("si").addEventListener("click", (e) => {
    document.getElementById("text").innerText = ":)"
})

document.getElementById("no").addEventListener("mouseover", (e) => {
    e.target.style.opacity = "0";
    document.getElementById("movil").style.display = "block";
    e.target.removeEventListener("mouseover")
})

document.getElementById("movil").addEventListener("mouseover", (e) => {
    const maxW =  window.innerWidth;
    const maxH = window.innerHeight;
    let i = Math.floor(Math.random()*maxH);
    let j = Math.floor(Math.random()*maxW);
    i = Math.max(10,Math.min(maxW-90,i))
    j = Math.max(10,Math.min(maxH-30,j))
    e.target.style.left = i+"px";
    e.target.style.top = j+"px";
})

document.getElementById("movil").addEventListener("click", (e) => {
    const maxW =  window.innerWidth;
    const maxH = window.innerHeight;
    let i = Math.floor(Math.random()*maxH);
    let j = Math.floor(Math.random()*maxW);
    i = Math.max(10,Math.min(maxW-90,i))
    j = Math.max(10,Math.min(maxH-30,j))
    e.target.style.left = i+"px";
    e.target.style.top = j+"px";
})