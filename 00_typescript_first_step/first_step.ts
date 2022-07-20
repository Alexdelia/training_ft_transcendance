const button = document.querySelector("button");
const input1 = document.getElementById("n1")! as HTMLInputElement;
const input2 = document.getElementById("n2")! as HTMLInputElement;

function add(x: number, y: number)
{
	return (x + y);
}

button?.addEventListener("click", function ()
{
	console.log(add(+input1.value, +input2.value));
});