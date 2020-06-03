/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
var btnTd;
table.addEventListener('click', removeItemFromCart);
var trEl;
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  // console.log('....11..'+JSON.parse(localStorage.getItem('cart')) );
  
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
 
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // console.log(table.firstChild)
  // table.clear();
  if (trEl){
    trEl.parentNode.removeChild(table);
  }


}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  // console.log(cart.items[0].product)

for (let index = 0; index < cart.items.length; index++) {
  // console.log(cart[index].product);
  // var newCartItem=new CartItem(cart.items[index].product,cart.items[index].quantity);
  var td = document.createElement('td')
  btnTd = document.createElement('button')
  btnTd.setAttribute('class','btnTd')
   trEl=document.createElement('tr');
  // var td1=document.createElement('td');
  var td2=document.createElement('td');
  var td3=document.createElement('td');
  table.appendChild(trEl);
  trEl.appendChild(td);
  // trEl.appendChild(td1);
  trEl.appendChild(td2);
  trEl.appendChild(td3);
  td.appendChild(btnTd);

  // td1.textContent=`${index}`
  td3.textContent=`${cart.items[index].product}`
  td2.textContent=`${cart.items[index].quantity}`
 }

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
function deleteFromLocalStorage(itemName){

  var arr = JSON.parse(localStorage.getItem('cart'));
  var newArray =[];
  // console.log(JSON.parse(JSON.stringify(item)));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].product != itemName){
      newArray.push(arr[i]);
    }
}
localStorage.clear();
// localStorage.setItem(JSON.stringify(newArray));
localStorage.setItem('cart',JSON.stringify(newArray));
}


function removeItemFromCart(event) {
  // console.log(event.target.parentNode)
  // console.log('my button : ',btnTd);
  // console.log(event.target);

  if (String(event.target) == String(btnTd)){
    var childParent = event.target.parentNode.parentNode
    console.log(childParent);
    childParent.parentNode.removeChild(childParent);
    console.log(childParent.childNodes[2].textContent);
    console.log(childParent.childNodes[1].textContent);
    //  var item = new CartItem(childParent.childNodes[2].textContent,childParent.childNodes[1].textContent);
     deleteFromLocalStorage(childParent.childNodes[2].textContent);
  }
  
  // if (event.target.btnTd){
  //   alert('hi');
  // }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
