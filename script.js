

let moveFunction = function(){
   document.querySelector("#cellFirst").innerText="A"
}

let addBtn = document.querySelector("#buttonA");


addBtn.addEventListener("click", moveFunction);

let moveFunction2 = function(){
    document.querySelector("#cellSecond").innerText="B"
}

let addBtn2 = document.querySelector("#buttonB");

addBtn2.addEventListener("click", moveFunction2);