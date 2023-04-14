
let d = document.querySelector("body div");
let p = document.querySelector("body div p");
let b = document.querySelector("#forgetMe");
let f = document.querySelector("body form")

if (localStorage.getItem('name')) {
    p.textContent = `Welcome back: ${localStorage.name}`
    d.style.display = 'block';
    f.style.display = 'none';
}
else {
    p.textContent = ''
    d.style.display = 'none';
    f.style.display = 'block';
}

f.addEventListener('click', form_click)
function form_click() {
    console.log('form click');
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    localStorage.name = name
    localStorage.email = email
}

b.addEventListener('click', () => localStorage.clear())