const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var date = new Date()
let hr = date.getHours()
let min = date.getMinutes()
let seg = date.getSeconds()

let posicaoHr = (hr*360/12 ) + (min*(360/60)/12) 
let posicaoMin = ((min*360/60) + (seg*360/60)/60) ;
let posicaoSeg = seg*360/60;


setInterval(() => {

    posicaoHr = posicaoHr+(3/360);
    posicaoMin = posicaoMin+(6/360);
    posicaoSeg = posicaoSeg+6

    console.log(`${hr}:${min}:${seg}`);

    PONTEIROHORA.style.transform = `rotate(${posicaoHr}deg)`;
    PONTEIROMINUTO.style.transform = `rotate(${posicaoMin}deg)`;
    PONTEIROSEGUNDO.style.transform = `rotate(${posicaoSeg}deg)`;
}, 1000);


