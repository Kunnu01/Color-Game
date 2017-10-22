var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); 
var colorDisplay = document.getElementById('colorDisplay');
var messaegeDisplay = document.querySelector("#message");
var display = document.getElementById("display");
var resetButton = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click", function() {
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
	 	squares[i].style.backgroundColor = colors[i];
	 } 
	 messaegeDisplay.textContent = "";
	 display.style.backgroundColor = "#232323";
});

/*function level() {
	easy.addEventListener("click", function(){
		level = 3;
		return level ;
	});

	hard.addEventListener("click", function(){
		level = 6;
		return level;
	});
}*/

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
	squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
        	messaegeDisplay.textContent = "Correct";
        	display.style.backgroundColor = pickedColor;
        	changeColor(clickedColor);
        }
        
        else{
        	this.style.backgroundColor = "#232323";
        	messaegeDisplay.textContent = "Oops! Try Again";
        	display.style.backgroundColor = "aliceblue";

        }
	});
}

function changeColor(color){
    //loop thorugh all squares
    for (var j = 0; j < squares.length; j++) {
    	squares[j].style.backgroundColor =  color;
    }
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256 + 1);
	var g = Math.floor(Math.random() * 256 + 1);
	var b = Math.floor(Math.random() * 256 + 1);
 	return "rgb(" + r +", " + g +", "+ b +")";
}





