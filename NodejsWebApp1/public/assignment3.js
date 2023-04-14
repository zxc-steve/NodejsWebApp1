let b = document.querySelector("body button");
b.addEventListener("click", getNumber) 

function getNumber() {
    let n = document.querySelector("body input").value
    let cmd = `http://localhost:1337/data?number=${n}`
    asyncFetch(cmd)
}
async function asyncFetch(cmd){ //MDN suggest using ftech instead of AJAX
    let f = await fetch(cmd)
    let result = await f.text()
    document.querySelector(".answer").textContent =result;
}