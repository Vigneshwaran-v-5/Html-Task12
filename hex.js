const hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const box = document.getElementById("box");
const color = document.getElementById("color");
const button = document.getElementById("btn");

function random(){
    let colour = Math.floor(Math.random()*16);
    return hexa[colour];
}

function generate(){
    let hexcolor='#';
    for(let i=1;i<=6;i++){
        hexcolor += random();
    }
    box.style.backgroundColor = hexcolor;
    color.innerHTML = hexcolor;
}
