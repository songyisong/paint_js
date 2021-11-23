const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

ctx.strokeStyle = "#2c2c2c"; //컬러나 스타일을 넣을 수 있음.
ctx.lineWidth = 3.5; //픽셀을 다룰 수 있음.

//캔버스 사이즈 정해주기
canvas.width = 800;
canvas.height = 800;

let painting = false;

function stopPainting(){
	painting = false;
};

function startPainting(){
	painting = true;
};

function onMouseMove(event){
	const x = event.offsetX;
	const y = event.offsetY;
	//console.log(x, y);
	if(!painting){
		//클릭하고 움직이면 실행이 안됨 
		//시작점은 항상 이곳!
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		console.log("creating line in ", x, y)
		ctx.lineTo(x, y); //호출하기
		ctx.stroke();
		//ctx.closePath();
	};
};

// function onMouseDown(event){
// 	//console.log(event);
// 	painting = true;
// };

// function onMouseUp(evnet){
// 	//painting = false;
// 	stopPainting();
// };

// function onMouseLeave(event){
// 	painting = false;
// };

function handleColorClick(event){
	// console.log(event.target.style);
	const color = event.target.style.backgroundColor;
	ctx.strokeStyle = color;
	//console.log(color);
};


if(canvas){
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
};

//console.log(Array.from(colors));
// 컬러 배열 호출
Array.from(colors).forEach(color =>
	color.addEventListener("click", handleColorClick)
);