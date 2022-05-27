const throttle = (func, delay) => {
    let last_time = 0;
    return (...arguments) => {
        const now_time = new Date().getTime();
        if(now_time - last_time < delay){
            return
        }
        last_time = now;
        return func(...arguments);
    }

}
let butt = document.getElementById("btn");
butt.addEventListener("click", throttle((e) => {
    console.log(" You Have Clicked Me")
}, 3000))

////////////////////////////

