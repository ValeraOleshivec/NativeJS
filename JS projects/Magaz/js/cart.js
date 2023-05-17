const cartWrapper = document.querySelector('.cart-wrapper');
window.addEventListener('click', function (event){
    if (event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.card');
        const productinfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerHTML,
            itemInBox: card.querySelector('[data-items-in-box]').innerHTML,
            weight:card.querySelector('.price__weight').innerHTML,
            price:card.querySelector('.price__currency').innerHTML,
            counter:card.querySelector('[data-counter]').innerHTML
        };
        const itemInCart = cartWrapper.querySelector(`[data-id="${productinfo.id}"]`);
        if (itemInCart){
            counterEl = itemInCart.querySelector('[data-counter]');
            counterEl.innerHTML = parseInt(counterEl.innerHTML) + parseInt(productinfo.counter);
        } else {
            const cartItemHTML = `<div class="cart-item" data-id="${productinfo.id}"> 
                                <div class="cart-item__top">
                                    <div class="cart-item__img">
                                        <img src="${productinfo.imgSrc}" alt="">
                                </div>
                                <div class="cart-item__desc">
                                    <div class="cart-item__title">${productinfo.title}</div>
                                    <div class="cart-item__weight">${productinfo.itemInBox} / ${productinfo.weight}</div>

                                    <!-- cart-item__details -->
                                    <div class="cart-item__details">
                                        <div class="items items--small counter-wrapper">
                                            <div class="items__control" data-action="minus">-</div>
                                            <div class="items__current" data-counter="">${productinfo.counter}</div>
                                            <div class="items__control" data-action="plus">+</div>
                                    </div>
                                
                                    <div class="price">
                                        <div class="price__currency">${productinfo.price}</div>
                                    </div>
                                
                                    </div>
<!-- // cart-item__details -->    
                                </div>
                                </div>
                                </div>`;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }
        card.querySelector('[data-counter]').innerHTML = '1';
        cartStatus();

        cartPrice();
    }
})