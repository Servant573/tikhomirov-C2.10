let btnCat = document.querySelector("#cats");
let btnDog = document.querySelector("#dogs");
let btnParrot = document.querySelector("#parrots");

let hiddenStr = document.querySelector('.some_text')


let btnClickPost = function(btnPet){
    fetch(`https://sf-pyw.mosyag.in/sse/vote/${btnPet.id}`, {
    method: 'POST'
    });
    hiddenStr.textContent = "Спасибо. Ваш голос был учтен.\n";

    disabledButt();
    giveLink();

}

let giveLink = function(){

    let link = document.createElement('a');
    link.getAttribute = "href";
    link.href = "#";
    link.innerHTML = "Узнать результаты голосования";
    document.querySelector("main").append(link);  
}
let disabledButt = function(){
    
    btnCat.disabled = true|false;
    btnDog.disabled = true|false;
    btnParrot.disabled = true|false;
}


btnCat.addEventListener("click", () => btnClickPost(btnCat));
btnDog.addEventListener("click", () => btnClickPost(btnDog));
btnParrot.addEventListener("click", () => btnClickPost(btnParrot));


