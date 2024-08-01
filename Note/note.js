const create = document.querySelector(".create");
const notesList = document.querySelector(".notes_list");
const delAll = document.querySelector(".del_all");

getDate = () => {
    let getDate = new Date();
    let day = getDate.getUTCDate();
    let month = getDate.getUTCMonth() + 1;
    let year = getDate.getUTCFullYear();
    // let hour = getDate.getHours();
    // let min = getDate.getMinutes();
    // let sec = getDate.getSeconds();
    let finalDate = day + " / " + month + " / " + year;

    return finalDate;
}

wipeStorage = () => {
    localStorage.clear();
}

updateStorage = () => {
    localStorage.setItem("note", notesList.innerHTML);
}

displayStorage = () => {
    notesList.innerHTML = localStorage.getItem("note");
}
displayStorage();

create.addEventListener("click", ()=>{
    let currentDate = getDate();
    let note = document.createElement("div");
    let input = document.createElement("p");
    let menuUl = document.createElement("ul");
    let menuLiOne = document.createElement("li");
    let menuLiTwo = document.createElement("li");
    let menuLiThree = document.createElement("li");
    let save = document.createElement("button");
    let saveIcon = document.createElement("i");
    let date = document.createElement("p");
    let remove = document.createElement("button");
    let removeIcon = document.createElement("i");
    note.className = "note";
    input.setAttribute("contenteditable", "true");
    input.className = "input";
    save.className = "save";
    saveIcon.className = "bi bi-check-circle-fill";
    date.className = "date";
    date.innerText = currentDate;
    remove.className = "delete";
    removeIcon.className = "bi bi-x-circle-fill";
    notesList.appendChild(note).appendChild(input).after(menuUl);
    menuUl.appendChild(menuLiOne);
    menuUl.appendChild(menuLiTwo);
    menuUl.appendChild(menuLiThree);
    menuLiOne.appendChild(save);
    menuLiTwo.appendChild(date);
    menuLiThree.appendChild(remove);
    save.appendChild(saveIcon);
    remove.appendChild(removeIcon);
    updateStorage();
})

notesList.addEventListener("click", (e)=>{
    if(e.target.parentElement.className == "delete"){
        const delText = "Are you sure?\nThe data will be deleted permanently.";
        if(confirm(delText) == true){
            e.target.parentElement.parentElement.parentElement.parentElement.remove();
            updateStorage();
        }
    } else if(e.target.parentElement.className == "save"){    
        alert("Saved");
        updateStorage();
    }
})

delAll.addEventListener("click", ()=>{
    if(notesList.hasChildNodes()){
        const delAllText = "Are you sure?\nAll data will be deleted permanently."
        if(confirm(delAllText) == true){
            wipeStorage();
            displayStorage();
        }
    }
})