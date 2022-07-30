
const grandparent=document.querySelector('.grandParent');
const parent = document.querySelector('.parent');
const  child = document.querySelector('.child');

// let myObjectListener11= {
//     handleEvent(myEventObject001) {
//         console.log(myEventObject001);
//         //alert('hello');
//     }
// };
// followinf code will get removed after 200 milli sec ( 2 sec), see corresponding addeventlistener
function myObjectListener11 () {
    console.log ('hi')
}

grandparent.addEventListener(`click`, myObjectListener11)
setTimeout(()=> {
    grandparent.removeEventListener('click', myObjectListener11)
}, 2000) // note for removeeventlistener, you need to essentially assign a variable , 
//an arrow operator will simply create a new method, and it will be removed, leaving original behind, 
// so an objectvariable like nyobjectListener11 will have to be used. 
grandparent.addEventListener('click', e => {
    console.log("traversed Grand Parent 1 bubble")
    //e.stopPropagation() // stops event propopgatiion (bubbling) at this point, 
    //check the effect after enabling it, the document and window bubbling events wont happen.
    //console.log(e)
    //console.log(e.target)
}, 
//{capture :true} // if enabled, the event wont participate in bubbling phase, creating a capture event too.
//{once:true} // event will occur only once, like button value= confirm.
);

// grandparent.addEventListener('click', e => {
//     console.log("traversed 2 GrandParent Bubble ")
// }); // the event will occur again, in the order in which it was defined, you will see traversed 2 this time. 

grandparent.addEventListener('click', e => {
    console.log("traversed Grand Parent 1 Capture")
}, 
{capture :true}
);

parent.addEventListener('click', e => {
    console.log("traversed Parent capture")
},
//true  // this too will work
{capture:true}
);
parent.addEventListener('click', e => {
    console.log("traversed Parent Bubble")
});
child.addEventListener('click', e => {
    console.log("traversed Child capture ")
}, 
{capture:true}
//true
);
child.addEventListener('click', e => {
    console.log("traversed Child Bubble ")
   // e.stopPropagation() // stops event propopgatiion (bubbling) at this point, check the effect after enabling it, the document and window bubbling events wont happen.
});
document.addEventListener('click', e => {
    console.log("traversed document Bubble ")
});
document.addEventListener('click', e => {
    console.log("traversed document capture ")
},
true
);
window.addEventListener('click', e => {
    console.log("traversed window captuure ")
}, 
true
);
window.addEventListener('click', e => {
    console.log("traversed window Bubble ")
});
