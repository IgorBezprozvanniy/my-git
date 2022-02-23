let cardArr = [];

let createBtn = document.querySelector(".create")
createBtn.addEventListener("click", addCard)
let numbr = 1
function addCard(){
    let wrapper = document.querySelector(".wrapper")
    let title = document.querySelector(".cardtitle").value
    let text = document.querySelector(".cardtext").value
    let carddate = new Date ()
    let date = carddate.getFullYear() + '.' + (Number(carddate.getMonth()) + 1) + '.' + carddate.getDate()
    let card = {
        'title' : title,
        'text' : text,
        'date' : date,

    }

    if (title.length == 0 || text.length == 0) return
    if (title.length > 10 || text.length >10) return

    cardArr.push(card)

    let cardBlock = document.createElement('div')
    cardBlock.classList.add("card")
    cardBlock.draggable = true
    cardBlock.insertAdjacentHTML('afterbegin', 
    `<div class="number">${numbr}</div>
    <div class="info">
        <div class="title cc">${card.title}</div>
        <div class="text cc">${card.text}</div>
        <div class="date cc">${card.date}</div>
    </div>`)
    numbr = numbr + 1
    wrapper.insertAdjacentElement('afterbegin', cardBlock)
    document.querySelector(".cardtitle").value = ""
    document.querySelector(".cardtext").value = ""
    cardBlock.addEventListener("dragstart", dragstart)
    cardBlock.addEventListener("dragend", dragend)
  
}
let plusBtn = document.querySelector(".plus")
plusBtn.addEventListener("click", addWrapper)
let box = document.querySelector('.box')
function addWrapper(){
    console.log(1)
    let wrap =  document.createElement('div')
    wrap.classList.add("wrapper")
    wrap.insertAdjacentHTML('afterbegin', 
    `<input type="text" class="cardtext">
    <input type="text" class="cardtitle">
    <button class="create">Create</button>
    <button class="plus">+</button>`)
    box.insertAdjacentElement('beforeend', wrap )
}

function dragstart(){
    cardBlock=this
}

function dragend(){
    cardBlock = null
}

function dragover(){
    this.insertAdjacentElement("beforeend", cardBlock)
}

let wrappers = document.querySelectorAll(".wrapper")
wrappers.forEach(wrapper => {
    wrapper.addEventListener("dragover", dragover)
});


