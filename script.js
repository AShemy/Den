let x = 0;

function goGame(){
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function click11(){
    img = document.getElementById("img");
    back = document.getElementById("game");
    speed = document.getElementById("img").style.transition;
    x++;
    document.getElementById("text").innerHTML = x + " очков";
    if (x<10){
        document.getElementById("m1").play()
        if(x%2==0){
            img.style.transform = "rotateY(180deg)";
        }else{
            img.style.transform = "rotateY(0deg)";
        }
    }else if(x>=10 && x<30){
        document.getElementById("m1").pause()
        document.getElementById("m2").play()
        img.src = "2.png";
        if(x%2==0){
            img.style.transform = "rotate(5deg)";
            back.style.backgroundSize = "cover";
        }else{
            img.style.transform = "rotate(-5deg)";
            back.style.backgroundSize = "cover";
        }
    }else if(x>=30 && x<50){
        document.getElementById("m2").pause()
        document.getElementById("m3").play()
        img.src = "3.png";
        if(x%2==0){
            img.style.transform = "scale(1.1)";
            back.style.backgroundSize = "cover";
        }else{
            img.style.transform = "scale(1)";
            back.style.backgroundSize = "cover";
        }
    }else if(x>=50 && x<75){
        document.getElementById("m3").pause()
        document.getElementById("m4").play()
        img.src = "4.png";
        if(x%2==0){
            img.style.transform = "skew(5deg, 0deg)";
            back.style.backgroundSize = "cover";
        }else{
            img.style.transform = "skew(-5deg, 0deg)";
            back.style.backgroundSize = "cover";
        }
    }else if(x>=75 && x<100){
        document.getElementById("m4").pause()
        document.getElementById("m5").play()
        img.src = "5.png";
        if(x%2==0){
            img.style.transform = "rotate(5deg)";
            back.style.backgroundSize = "cover";
        }else{
            img.style.transform = "rotate(-5deg)";
            back.style.backgroundSize = "cover";
        }
    }else if(x>=100 && x<125){
        document.getElementById("m5").pause()
        document.getElementById("m6").play()
        img.src = "6.png";
        if(x%2==0){
            img.style.transform = "rotateY(180deg)";
            back.style.backgroundSize = "cover";
        }else{
            img.style.transform = "rotateY(0deg)";
            back.style.backgroundSize = "cover";
        }
    }else if(x>=125 && x<150){
        document.getElementById("m6").pause()
        document.getElementById("m7").play()
        img.src = "7.png";
        if(x%2==0){
            img.style.transform = "scale(1.1) rotate(5deg)";
            back.style.backgroundSize = "cover";
        }else{
            img.style.transform = "scale(1) rotate(-5deg)";
            back.style.backgroundSize = "cover";
        }
    }else if(x>=150){
        document.getElementById("game").style.display = "none";
        document.getElementById("end").style.display = "block";
    }

}
