function makeBall(xCoord, yCoord, color, velx, vely, fixed = 0){
    ball = document.createElement("div");
    ball.className = "ball";
    ball.style.backgroundColor = color;
    ball.style.height = ball.style.width = size;
    ball.style.top = yCoord;
    ball.style.left = xCoord;
    document.body.appendChild(ball);

}