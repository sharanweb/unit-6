
var button = document.getElementById("debounce");

function debounce(func, delay) {
  let debounceTimer;
  return function () {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      func();
    }, delay);
  };
}

button.addEventListener(
  "click",
  debounce(function () {
    console.log("hello Masai");
    alert("Debouncing in three seconds");
  }, 3000)
);