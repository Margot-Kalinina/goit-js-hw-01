let invoice = 100;
const stock = 100;

let message = 'Заказ оформлен, с вами свяжется менеджер';

console.log(message);
invoice = 150;
if (invoice === 150) {
  message = 'На складе недостаточно товаров!';
}
console.log(message);
