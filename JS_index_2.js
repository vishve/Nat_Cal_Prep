//Source: https://youtu.be/5fb2aPlgoys

//DOM Manupulation(5): 

//getElementByID, getElementByTagName , getElementByClassName, 
//querySelector, queryselectorAll 

// //getElementById 
// const title = document.getElementById('main-heading');
// console.log(title)

// //getElementsByTagName
// const Lists = document.getElementsByTagName('li');
// console.log(lists);
// //getElementsByClassName
// const list_items = document.getElementsByClassName('list-items');
// console.log(list_items);

// //querySelector
// const containerr = document.querySelector ('div');
// console.log (containerr);

// //querySelectorAll
// const containers = document.querySelectorAll('div');
// const headinger = document.querySelectorAll(" #main-heading");

// console.log (containers);

// approximately all intro  html DOM is over.

// going back to the file.and commenting out the second sports container div block 
//and commenting out all the above examples for document model.
// now lets do the HTML Styling (CSS)


//getElementById 
const title = document.getElementById('main-heading');
console.log(title)
// inline styling
title.style.color = 'red';

//getElementsByTagName
const Lists = document.getElementsByTagName('li');
console.log(lists);
//getElementsByClassName
const list_items = document.getElementsByClassName('list-items');
console.log(list_items);

//querySelector
const containerr = document.querySelector ('div');
console.log (containerr);

//querySelectorAll
const containers = document.querySelectorAll('list-items');

console.log (containers);


