const start=document.getElementById('start');
const stopit=document.getElementById('stop');
const log=document.getElementById('log');
start.addEventListener("click",()=>{
    document.addEventListener("keydown",KeyPress);
    document.addEventListener("keyup",KeyUp);
    start.disabled=true;
    stopit.disabled=false;
})
stopit.addEventListener("click",()=>{
    document.removeEventListener("keydown",KeyPress);
    document.removeEventListener("keyup",KeyUp);
    log.textContent="";
    stopit.disabled=true;
    start.disabled=false;
})
function KeyPress(e){
    log.textContent=`Key ${e.key} was pressed`;
}
function KeyUp(e){
    log.textContent=`Key ${e.key} was released`;
}
