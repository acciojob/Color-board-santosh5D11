const container = document.querySelector(".container");
const colors = [
  "#e74c3c",
  "#3498db",
  "#2ecc71",
  "#f1c40f",
  "#9b59b6",
  "#e67e22",
  "#1abc9c",
  "#ff69b4"
];

for(let i=0;i<800;i++){
	const square = document.createElement('div');
	square.classList.add("square");
	square.addEventListener("mouseover",()=>{
		const randomColor= colors[Math.floor(Math.random() * colors.length)];

		square.style.backgroundColor = randomColor;
		setTimeout(()=>{
			square.style.backgroundColor = "#333";
		},1000);
	});
	container.appendChild(square);
}