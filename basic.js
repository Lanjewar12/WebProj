let para=document.getElementById('count');
let c=0;


function incr(){
    c++;
    para.textContent=c;
    const r= Math.floor(Math.random()*255);
    const g= Math.floor(Math.random()*255);
    const b= Math.floor(Math.random()*255);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}

function decr(){
    if(c>0){
        c--;
        para.textContent=c;
    }
}
function reset(){
    c=0;
    para.textContent=c;
}