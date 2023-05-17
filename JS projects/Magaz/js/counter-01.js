console.log('Counter work');


const znakMinus = document.querySelector('[data-action="minus"]');
const znakPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');

znakMinus.addEventListener('click', function (){
    let b = parseInt(counter.innerHTML);
    if (b > 1){
        counter.innerHTML = --counter.innerHTML;
    }


})
znakPlus.addEventListener('click', function () {
    counter.innerHTML = ++counter.innerHTML;
})


