//your JS code here. If required.
let timer = document.getElementById("timer");

setInterval(() => {
	let x = new Date();
	timer.textContent = x.toLocaleString();
})