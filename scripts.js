
const MAX_NUMBER = 10
const MIN_NUMBER = -10


const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subract"]')
const add = document.querySelector('[data-key="add"]')

console.log(number,add,subtract)

const subtractHandler = () =>{
    const newValue = parseInt(number.value) - 1
    number.value = newValue

    if (add.disabled === true) {
        add.disabled = false
    
    }
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
    

}
const addHandler = () =>{
    const newValue = parseInt(number.value) + 1
    number.value = newValue

    if (subtract.disabled === true){
        subtract.disabled = false
    }
    

}


subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler)
