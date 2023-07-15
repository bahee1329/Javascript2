let cchoise = document.getElementById("computer-choise")
let uchoise = document.getElementById("user-choise")
let disply = document.getElementById("result")
let choise = document.querySelectorAll("button");
let userd
let container = document.getElementById("container")
let comd


choise.forEach(elimenthhhh=>elimenthhhh.addEventListener("click",(e)=>{
        userd = e.target.id ;
        
        uchoise.innerHTML = userd;
        computerselect();
        cchoise.innerHTML = comd;
        results();
        
}));


function computerselect(){

    const rnumber =Math.floor(Math.random()*3)+1;

    if(rnumber== 1){
         comd = "rock"
         console.log(rnumber)
    }

    else if (rnumber==2){
        comd="paper"
        console.log(rnumber)
    }

    else if (rnumber==3){
        comd="scissers"
        console.log(rnumber)
    }
}

function results(){
    if(comd==userd){
        disply.innerHTML = "row";
    }

    else if (comd=="rock"&& userd=="paper")
    {
        disply.innerText = "you win"
    }

    else if (comd=="rock"&& userd=="scissers")
    {
        disply.innerText = "computer win"
    }

    else if (comd=="paper"&& userd=="rock")
    {
        disply.innerText = "computer win"
    }

    else if (comd=="paper"&& userd=="scissers")
    {
        disply.innerText = "you win"
    }

    else if (comd=="scissers"&& userd=="rock")
    {
        disply.innerText = "you win"
    }
    else if (comd=="scissers"&& userd=="paper")
    {
        disply.innerText = "computer win"
    }
}