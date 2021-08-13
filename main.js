function preload()
{
}

function setup()
{
canvas=createCanvas(400, 400);

canvas.position(110, 250);

video=createCapture(VIDEO);

video.hide();

tintcolour="";
}

function draw()
{
image(video, 0, 0, 400, 400);

tint(tintcolour);
}

function color_filter()
{
    tintcolour=document.getElementById("color-name").value;
}

function take_snapshot()
{
    save('Filter_image.png');
}