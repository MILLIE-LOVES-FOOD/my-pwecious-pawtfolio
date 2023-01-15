function gotome(){
    var place = document.getElementById('me');
    window.scrollTo({left:0, top :place.offsetTop});
}

function gotoheh(){
    var place = document.getElementById('folderPackage');
    window.scrollTo({left:0, top :place.offsetTop - 200});
}

function gotoheho(){
    var place = document.getElementById('heho');
    window.scrollTo({left:0, top :place.offsetTop});
}

function gotopix(){
    location.href = "./works/pixel brush.html";
}

function gotomoo(){
    location.href = "./works/moon.html";
}

function gotocan(){
    location.href = "./works/super super tired.html";
}

function gotofle(){
    location.href = "./works/cat day.html";
}

function gotofle(){
    location.href = "./works/cat day.html";
}

function gotofir(){
    location.href = "./works/strange.html";
}

const location1 = [
    [26, 45],
    [3, 100],
    [70, 65],
    [50, 125],
    [10, 240],
    [85, 230],
    [40, 185],
    [80, 10]
];
for(var i=0; i<8; i++){
    const topv = location1[i][1];
    const leftv = location1[i][0];
    const cactu = document.createElement("div");
    cactu.classList = "cactu";
    document.body.appendChild(cactu);
    cactu.style.top = topv + "%";
    cactu.style.left = leftv + "vw";
}
/*
const location2 = [
    [216, 45],
    [3, 100],
    [70, 65],
    [50, 125],
    
];
for(var i=0; i<4; i++){
    const topv = location2[i][1];
    const leftv = location2[i][0];
    const tape = document.createElement("div");
    tape.classList = "tape";
    document.body.appendChild(tape);
    tape.style.top = topv + "%";
    tape.style.left = leftv + "vw";
}
*/