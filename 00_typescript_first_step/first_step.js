var button = document.querySelector("button");
var input1 = document.getElementById("n1");
var input2 = document.getElementById("n2");
function add(x, y) {
    return (x + y);
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
