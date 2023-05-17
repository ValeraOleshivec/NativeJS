function cartPrice(){
    const cartItems = document.querySelectorAll('.cart-item');

    let totalPrice = 0;
    const totalPriceEl = document.querySelector('.total-price');
    const delivyCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    cartItems.forEach(function (item){
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountEl.innerHTML) * parseInt(priceEl.innerHTML);
        totalPrice += currentPrice ;
    })
    if (totalPrice > 0){
        cartDelivery.classList.remove('none')
        if (totalPrice >= 600){
            delivyCost.classList.add('free');
            delivyCost.innerHTML = 'Бесплатно';
            totalPriceEl.innerHTML = totalPrice;
        }else {
            delivyCost.classList.remove('free');
            delivyCost.innerHTML = '250 ₽';
            totalPrice = totalPrice + 250;
            totalPriceEl.innerHTML = totalPrice;
        }
    }else {
        totalPriceEl.innerHTML = '0';
        cartDelivery.classList.add('none');}
}