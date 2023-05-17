function cartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const zakaz = document.querySelector('#order-form');
    if (cartWrapper.children.length > 0){
        cartEmpty.classList.add('none')
        zakaz.classList.remove ('none')

    }else {
        cartEmpty.classList.remove('none');
        zakaz.classList.add ('none')
    }
}