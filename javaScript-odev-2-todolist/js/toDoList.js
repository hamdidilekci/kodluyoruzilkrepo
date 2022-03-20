let inputDOM = document.querySelector("#task");
let listDOM = document.querySelector("#list");
let buttonClose = '<button type="button" class="btn float-end">x</button>'

let element = document.getElementById("newItemToast");
let myToast = new bootstrap.Toast(element);

let emptyEntry = document.querySelector("#errorToast");
let errorToast = new bootstrap.Toast(emptyEntry);

let toDoList = localStorage.getItem('yapilacaklar')
if (toDoList != "" && toDoList != null ) {
    listDOM.innerHTML = toDoList
}
console.log(toDoList)
console.log(listDOM)
console.log(listDOM.children)
console.log(listDOM.childElementCount)
for (let i = 0; i < listDOM.childElementCount; i++) {
    listDOM.children[i].addEventListener("click", liDOMClicked );
}
// when button clicked add new item into list
function newElement() {
    if (inputDOM.value && !(inputDOM.value == " ") && !(inputDOM.value == "  ") && !(inputDOM.value == "   ")) {
        liDOM = document.createElement("li");
        liDOM.innerHTML = inputDOM.value + buttonClose;
        listDOM.append(liDOM);

        liDOM.addEventListener("click", liDOMClicked );

        myToast.show();

        localStorage.setItem('yapilacaklar', listDOM.innerHTML);
    } else {
        errorToast.show();
    }
}

function liDOMClicked(event) {
    // when list item clicked overline text
    if (!event.target.classList.contains("btn")) {
        event.target.classList.toggle("text-overline");
    } 
    // when button clicked remove element
    else {
        event.target.parentElement.remove();
    }
    localStorage.setItem('yapilacaklar', listDOM.innerHTML);
}













