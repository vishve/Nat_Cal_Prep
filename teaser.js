const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
   document.write(arr[i] + " "); 
   //alert
}
function double(number) {
   return number * 2;
 }
 const numbers = [7, 2, 7, 6];
 const doubled = numbers.map(double);  // array Map funciton.
 console.log(doubled);  // [ 10, 4, 14, 12 ]