window.addEventListener('click', function (event){
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const counterWrapper = event.target.closest('.counter-wrapper');

        const counter = counterWrapper.querySelector('[data-counter]');
        if (event.target.dataset.action === 'minus'){
            if (event.target.closest('.cart-wrapper')){
                if (parseInt(counter.innerHTML) === 1){
                    event.target.closest('.cart-item').remove();
                    cartStatus();
                    cartPrice();
                }else {
                    counter.innerHTML = --counter.innerHTML;
                }
            }else {
                let b = parseInt(counter.innerHTML);
                if (b > 1) {
                    counter.innerHTML = --counter.innerHTML;
                }
            }
        }
        if (event.target.dataset.action === 'plus'){
            counter.innerHTML = ++counter.innerHTML;
        }
    }
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        cartPrice();
    }
})

