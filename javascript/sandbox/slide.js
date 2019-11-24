
let n = 0;


function slides(){
    var srcs = ["./img1.jpg", "./img2.jpg", "./img3.jpg"];

    if(n == 3){
        n = 0;
    }

    document.getElementById("pict").src = srcs[n];

    n += 1;
}

setInterval(slides, 4000);

