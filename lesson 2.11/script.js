let isBlock = false
let isCircle = false
let blockTop = 0;
let blockRight1 = 0;
let size;
let btnDown = document.querySelector(".down")
btnDown.addEventListener("click", blockDown)
let btnUp = document.querySelector(".up")
btnUp.addEventListener("click", blockUp)
let btnRight = document.querySelector(".right")
btnRight.addEventListener("click", blockRight)
let btnLeft = document.querySelector(".left")
btnLeft.addEventListener("click", blockLeft)
let addbtn = document.querySelector(".add_button")
addbtn.addEventListener("click", addBlock)
let color = document.querySelector(".color_input")
color.addEventListener("change", colorChange)
let circle = document.querySelector(".circle")
circle.addEventListener("change", circleBlock)

function addBlock(){

    if(isBlock == true) return

    let color = document.querySelector(".color_input").value

    size = document.querySelector('.size_input').value
    let wrapper = document.querySelector('.wrapper_block')

    size = +size

    if(size <= 50 || size>=500) return 

    let block = document.createElement('div')
    block.classList.add('block')
    block.style.backgroundColor = color
    block.style.width = size + 'px'
    block.style.height = size + 'px'
    wrapper.insertAdjacentElement('afterbegin', block)
    isBlock = true
    block.addEventListener("click", removeblk)
}

function blockDown(){

    let block = document.querySelector('.block')
    
    if(size + blockTop + 10 > 500) return
    
    blockTop += 10

    block.style.marginTop = blockTop + 'px'
}

function blockUp(){

    let block = document.querySelector('.block')
    
    if(blockTop <= 0) return
    
    blockTop -= 10

    block.style.marginTop = blockTop + 'px'

}
function blockRight(){

    let block = document.querySelector('.block')
    
    if(size + blockRight1 + 10 > 500) return

    blockRight1 += 10

    block.style.marginLeft = blockRight1 + 'px'
}

function blockLeft(){

    let block = document.querySelector('.block')

    blockRight1 -= 10

    block.style.marginLeft = blockRight1 + 'px'
}
function colorChange(){
    
    let block = document.querySelector('.block')
    let color = document.querySelector(".color_input").value
    block.style.backgroundColor = color
}
function removeblk(){
    let block = document.querySelector('.block')
    block.remove()
    isBlock = false
}
function circleBlock(){
    if (isCircle==false){
        let block = document.querySelector('.block')
        block.style.borderRadius = "50%"
        isCircle = true
    }
    else if (isCircle==true){
        console.log(1)
        let block = document.querySelector('.block')
        block.style.borderRadius = "0%"
        isCircle = false
}
}