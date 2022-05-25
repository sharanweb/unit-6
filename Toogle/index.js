
let btn = document.getElementById("btn");

function toggle(a, b, c) {
    let div = document.getElementById("togglebox");
    div.innerHTML = ` ${a} ${b} ${c} Toggled`;
};

btn.addEventListener("click", () => {
   const toggle = toggle(1, 2, 3)
});
