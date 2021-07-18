canvas = document.getElementById("myCanvas");
color = "red";

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 2;
ctx.rect(150, 143, 430, 200)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue"; 
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black"; 
ctx.lineWidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red"; 
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange"; 
ctx.lineWidth = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green"; 
ctx.lineWidth = 5;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
//mouse_x = e.clientX;
//mouse_y = e.clientY;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking colour from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    //addition activity ends

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + ",Y= " + mouse_y);
    circle(mouse_x , mouse_y);
}

    function circle(mouse_x, mouse_y)
    {
        ctx.beginPath();
        ctx.strokeStyle = "blue"; 
        ctx.lineWidth = 5;
        ctx.arc(250, 210, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }