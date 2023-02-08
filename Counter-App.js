const count = document.querySelector(".count");
const sub = document.querySelector(".sub-btn");
const reset = document.querySelector(".reset-btn");
const add = document.querySelector(".add-btn");

add.addEventListener('click', () => {
    count.innerHTML++;
    addColor();
});

sub.addEventListener('click', () => {
    count.innerHTML--;
    addColor();
});

reset.addEventListener('click', () => {
    count.innerHTML = 0;
    addColor();
});

function addColor(){
    if(count.innerHTML > 0){
        count.style.color = "yellow";
    }else if (count.innerHTML < 0){
        count.style.color = "orangered";
    }else{
        count.style.color = "white";
    }
}