
let btn = document.getElementById("btn");
let timerId;
let eventCount = 0;
let counter=0;
btn.addEventListener("click",()=>{
    let event = document.getElementById("event");
    event.innerText = `No of times event triggered...  ${++eventCount}`
    debounce(main,1000);
})

const makeCall = () =>{
    let parent = document.getElementById("container");
    parent.innerText = `No of times Debounce triggered... ${++counter}`
}

const main = () =>{
    makeCall();
}

const debounce= (func,delay) =>{
    if(timerId){
        clearTimeout(timerId);
    }
   timerId = setTimeout(()=>{
        func()
    },delay)
}