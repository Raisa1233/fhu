noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded );
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of a square will be = " + difference + "px"
    fill('#FE828C');
    stroke('#FE828C');
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('Posenet is initialized!');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = result[0].pose.nose.X;
        noseY = result[0].pose.nose.Y;
        console.log("noseX =" + noseX + "noseY =" + noseY );

        leftWristX=result[0].pose.leftWrist.X;
        rightWristX=result[0].pose.rightWrist.X;
        difference= floor(leftWristX-rightWrist);

        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
    }
}

