var width = 32;
var height = 32;
var pixelSize = 12;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var backgroundCanvas = document.getElementById('background');
var btx = backgroundCanvas.getContext('2d');

var display = document.getElementById('display')
var brushColor = document.getElementById('brushcolor')
var brushSize = document.getElementById('brushSize')

function setCanvas (){
    ctx.canvas.width = pixelSize * width;
    ctx.canvas.height = pixelSize * height;
    ctx.scale(pixelSize, pixelSize);

    btx.canvas.width = pixelSize * width;
    btx.canvas.height = pixelSize * height;
    btx.scale(pixelSize, pixelSize);

    display.style.width = pixelSize * width + 'px';
    display.style.height = pixelSize * height + 'px';
}

function setBackground(){
    btx.clearRect(0,0, width, height);

    btx.fillStyle = "white";
    btx.fillRect(0, 0, width, height);

    btx.fillStyle = "rgb(220, 220, 220)";
    for(var x = 0; x < width; x++){
        for(var y = 0; y < height; y++){
            if((x+y) % 2==0){
                btx.fillRect(x,y,1,1)
            }
        }
    }
}


function drawit(x,y){
    ctx.fillStyle = brushColor.value;
    x = Math.floor(x);
    y = Math.floor(y);
    var size= brushSize.value * 1;
    ctx.fillRect(x,y,size,size);
}
    
setCanvas();
setBackground();

var isDragging = false;

canvas.addEventListener('mousedown', (event) =>{
   
    isDragging = true;
    var mouseX = event.offsetX / pixelSize;
    var mouseY = event.offsetY / pixelSize;
    drawit(mouseX, mouseY);
}); 

canvas.addEventListener('mousemove', (event) =>{
    if (isDragging == false)return
    var mouseX = event.offsetX / pixelSize;
    var mouseY = event.offsetY / pixelSize;
    drawit(mouseX, mouseY);
}); 

canvas.addEventListener('mouseup', () =>{
    if(isDragging) setLocalStorage();
    isDragging = false;
});

canvas.addEventListener('mouseout', () =>{
    if(isDragging) setLocalStorage();
    isDragging = false;
});

window.addEventListener('keydown', (event) => {
    if(event.keyCode == 90){
        prevCanvas();
    }
})

var myStorage = localStorage;
window.onload = initLocalStorage();


function initLocalStorage(){
    myStorage.setItem("drawinglog", JSON.stringify([]));
    setLocalStorage();
}
function setLocalStorage(){
    var png = canvas.toDataURL();
    var logs = JSON.parse(myStorage.getItem('drawinglog'));

    setTimeout(() => {
        logs.unshift({png: png});
        myStorage.setItem("drawinglog", JSON.stringify(logs));

    }, 0);
}


function prevCanvas(){
    var logs = JSON.parse(myStorage.getItem('drawinglog'));
    if(logs.length <= 0) return;

    setTimeout(() => {
      
        if(logs.length > 0){
            logs.shift();
        }
        myStorage.setItem("drawinglog", JSON.stringify(logs));
        drawPng(logs[0]['png']);
    }, 0);
}



function drawPng(src){
    ctx.clearRect(0,0, width, height);
    var img = new Image();
    img.src = src;
    img.onload = function(){
        ctx.setTransform(1, 0 , 0, 1, 0, 0)
        ctx.drawImage(img,0,0);
        ctx.scale(pixelSize, pixelSize)
      
    }
}


var colors = [ '#fabaf2','#c58ce7', '#a6e1ff','#8ff3d3', '#fdfdd2']
function palletteSet(num){
    brushColor.value = colors[num-1];
}
