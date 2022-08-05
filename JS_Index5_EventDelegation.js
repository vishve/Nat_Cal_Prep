// source: https://youtu.be/XF1_MlZ5l6M  same WDS - Kyle  as index_4 eventlistener 
// const divs = document.querySelectorAll('div')

document.addEventListener ("click", e => {
if (e.target.matches ("div")) {
    console.log('hi '+ e.target.getAttribute('class') + ' found');
}
}) // event listener added with MATCH funciton under target function
// the above funciton can be re-writen as below and called with the funciton latter


// function myAddGlobalEventListener (type, selector, callback) {
//     document.addEventListener (type, e => {
//     if (e.target.matches(selector)) callback(e)    
//     })
// }
// // and can be called by custom eventlistener
// myAddGlobalEventListener("click", 'div', e => {
//     console.log ("hi event listener, div found")
//})


// the code below will add a new html DIV element to the page index5 webpage
// but the event will not be fired if naturally used as addeventlistener,
// because the note is created later thatn the event is heard ate the browser. 
// better to use eventlistener and not event. 
// but as the eventlistener is created in any form, the event will be fired. 

const newDev = document.createElement('div')
newDev.style.width= "200px"
newDev.style.height= "200px"
newDev.style.backgroundColor="purple"
newDev.append("new from JS") 
//newDev.innerText("new from JS") 

//document.querySelector('body').append (newDev)
document.body.append (newDev)

