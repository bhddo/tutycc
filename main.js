const { fabric } = require("./fabric");

// Crie uma variável canvas
var canvas = new fabric.canvas(myCanvas);


ball_y=0
ball_X=0
hole_y=400
hole_x=800


block_image_width = 5;
block_image_height = 5;

if((ball_X==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball.opj);
}
document.getElementById("hd3").innerHTML= voce adingiu o objetijo;
document.getElementById(myCanvas).style.borderColor="red"

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(img){
        hole.opj = img;
        hole.opj.scaleToWidth(50)
        hole.opj.scaleToHeight(50)
        hole.opj.set({
			tope:hole_y
			left:hole_x
		})
		canvas.add(hole.opj)
    })
	newImage();
}

function newImage()
{
	function loadImg(){
		fabric.Image.fromURL("ball.png", function(img){
			ball.opj = img;
			ball.opj.scaleToWidth(50)
			ball.opj.scaleToHeight(50)
			ball.opj.set({
				tope:ball_y
				left:ball_x
			})
			canvas.add(ball.opj)
		})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
	}

	function down()
	{
	   if(ball_y <=450)
	   {
		ball_y = ball_y + block_image_height;
		console.log("altura da imagen do bloco t =" + block_image_height);
		console.log("quanto a tecla direcional baixo è precionado, x = " + ball_X + ", y =" +ball_y);
		canvas.remove(ball.opj);
		newImage()
	   }
	}

	function left()
	{
		if(ball_X >5)
		{
			// Escreva o código para mover a bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			// Escreva o código para mover a bola para a direita.
		}
	}
	
}