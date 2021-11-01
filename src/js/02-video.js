import '../css/common.css'
import BSN from "bootstrap.native";

//  SetTimeout
// ============================================//
// function logMassage() {
//     console.log("hello for message");
// }

// const timeout = setTimeout(() =>{
//     console.log("hello work")
// }, 3000);



// console.log("Hello");

// console.log("Good night");

// const shouldCancelTimer = Math.random()> 0.3;

// if(shouldCancelTimer){
//     console.log(shouldCancelTimer);

//     clearTimeout(timeout);
// }
// ============================================== //

// SetInterval

// console.log("hi");

// console.log("goodbye");

// const intervalId =  setInterval(() => {
//     console.log("Nice");
// }, 1000);

// let number = 0;
// const intervalId2 =  setInterval(() => {
//     if(number === 3){
//         clearInterval(intervalId2);
//     }
//     console.log("wow");
//     number +=1;
// }, 1000);
// ==================================== //
// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if(promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed){
//         console.log("останавливаем интервал");
//         clearInterval(intervalId);
//         return;
//     }
//     console.log("подпишись на ссылку!!!", Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);


const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

const refs = {
    modal: document.querySelector('#subscription-modal'),
    subscribeBtn: document.querySelector('button[data-subscribe]'),
}

openModal()

refs.modal.addEventListener('hide.bs.modal', openModal)

refs.subscribeBtn.addEventListener('click', () => {
    hasSubscribed = true;
    modal.hide()
})

const modal = new BSN.Modal('#subscription-modal');


function openModal () {
    if(promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed){
        return;
    }
    setTimeout(() => {
        modal.show()
        
    }, PROMPT_DELAY);
    promptCounter += 1
    
}



