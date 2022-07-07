const list = document.querySelector('ul');
const totalBox = document.querySelector('p');
//works equally good : document model DOM methos:
//const list = document.getElementById('output');
//const totalBox = document.getElementById('output_p');
//const list = document.querySelector('.mycssclass'); //Example for Class selection : queryselectors are usedfor selectors beitTML nodes or CSS Classes
let total = 0;
list.innerHTML=' ';
totalBox.textContent = ' ';

const products = [
  'Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99',
];

for (const product of products) {
  const subArray = product.split(':');
  const name = subArray[0];
  const price = Number(subArray[1]);
  total += price;
  const itemText = `${name} — $${price}`;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = `Total: $${total.toFixed(2)}`;