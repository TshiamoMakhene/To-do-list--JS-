let add = document.querySelector("#add");
let list = document.querySelector("#list");
add.onclick = (e) => {
    e.prevemtDefault();
    let listitem = document.querySelector("#lsititem");
    if (listitem.value !== '') {
        let el = document.createElement("li");
        el.innerHTML = listitem.value;
        let removebtn = document.createElement("button");
        let removebtn.className = "close";
        removebtn.innerHTML = "\u00D7";
        el.appendChild(el);
        list.appendChild(el);
        listitem.value = "";
        el.addEventListener("click", (e) => {
            e.targer.style.textDecoration = "line-through";
        })
        removebtn.addEventListener("click", (e) => {
            e.target.parentElement.style.display = "none";
        });

    } else {
        alert("No input\nWrite something!!");
    }
}