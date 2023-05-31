function preload(){

}

function setup(){
    canvas = createCanvas(650, 480);
    canvas.position(110, 170);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,150,100,350,280);
    fill(100,20,40);
    stroke(100,20,40);
    circle(60,60,90);
    circle(60,420,90);
    circle(590,420,90);
    circle(590,60,90);

    fill(40,20,100);
    stroke(40,20,100);
    rect(103,50,442,20);
    rect(103,412,442,20);
    rect(50,105,20,273);
    rect(580,105,20,273);
}

function take_snapshot(){
    save('photo.png');
}