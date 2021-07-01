class ProdactCart {
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="cart">
        <div class="photo">
            <img src="/img/foto.jpg" class="photo-cart" >
            <h3 class="title">${this.title}</h3>
            <p class="price">${this.price}</p>
            <button class="btn">Добавить</button>
        </div>
    </div>`;
}

}
        

class RenderCatalog {
    constructor(){
        this.cart = [];
    }
    fetchCarts(){
        this.cart= [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
            {id: 5, title: 'Notebook big', price: 20000},
            {id: 6, title: 'Mouse red', price: 1500},
            {id: 7, title: 'Keyboard red', price: 5000},
            {id: 8, title: 'Gamepad red', price: 4500},
        ];
    }

    render(){
        let listHtml = '';
        this.cart.forEach(cart => {
            const cartItem = new ProdactCart(cart.title, cart.price);
            listHtml +=cartItem.render()

        });
        document.querySelector('.good-list').innerHTML = listHtml;
    }
}

const list = new  RenderCatalog();
list.fetchCarts();
list.render();


//Класс для Корзины товаров, и элементов товаров 

class CartButton {
    

}






// const  prodactCart = [
//     {id: 1, title: 'Notebook', price: 20000},
//     {id: 2, title: 'Mouse', price: 1500},
//     {id: 3, title: 'Keyboard', price: 5000},
//     {id: 4, title: 'Gamepad', price: 4500},
//     {id: 5, title: 'Notebook big', price: 20000},
//     {id: 6, title: 'Mouse red', price: 1500},
//     {id: 7, title: 'Keyboard red', price: 5000},
//     {id: 8, title: 'Gamepad red', price: 4500},
// ];

// const renderCart = (cart) => {
//     return `<div class="cart">
//                 <div class="photo">
//                     <img src="/img/foto.jpg" class="photo-cart" >
//                     <h3 class="title">${cart.title}</h3>
//                     <p class="price">${cart.price}</p>
//                     <button class="btn">Добавить</button>
//                 </div>
//             </div>`;
// };

// const renderCatalog = (list) => {
//     document.querySelector('.good-list').innerHTML = 
//     list.map((cart) => renderCart(cart)).join('');
//     console.log(prodactCart);
// }

// renderCatalog(prodactCart);

