const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let posX;
let posY;
let angle;
let number = 10;
let scale = 10;
let cirRad = 5;
let pathRad;
let hue = 0;
ctx.globalCompositeOperation = 'destination-over';
const drawFlower = () => {
	angle = number * 1;
	pathRad = scale * Math.sqrt(number);
	posX = pathRad * Math.sin(angle) + canvas.width / 2;
	posY = pathRad * Math.cos(angle) + canvas.height / 2;

	ctx.fillStyle = `hsl(${number}, 100%, 40%)`;
	ctx.strokeStyle = `hsl(${number}, 100%, 50%)`;
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(posX, posY, cirRad, 0, Math.PI * 2);
	ctx.closePath();
	ctx.fill();
	// ctx.stroke();

	number++;
	hue++;
};

const Animate = () => {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (number > 600) return;
	drawFlower();
	requestAnimationFrame(Animate);
};

Animate();
