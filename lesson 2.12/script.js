let cardArr = [];

let createBtn = document.querySelector(".create")
createBtn.addEventListener("click", addCard)

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

    cardArr.push(card)

    let cardBlock = document.createElement('div')
    cardBlock.classList.add("card")
    cardBlock.insertAdjacentHTML('afterbegin', 
    `<div class="number">1</div>
    <div class="info">
        <div class="title cc">${card.title}</div>
        <div class="text cc">${card.text}</div>
        <div class="date cc">${card.date}</div>
    </div>`)
    wrapper.insertAdjacentElement('afterbegin', cardBlock)

}