// old code below, its lengthy, hence unotimised,
// and consumes too much of memory
// beeter way is ti do 

//event delegation : meaning adding event lisener to a parent node
//such that subsequent child nodes and futur child nodes gets the event listner
// applied automatically without repeating addeventlistener and repeatitive function.

//use ctrl+KU key combination to remove comments and
// Ctrl+KC to re-comment simultaneously


document.querySelector('#sports').addEventListener
('click', function (e){

    console.log(e.target.getAttribute('id') + ' is clicked');
    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = "purple";
    } // end if
}// end function
)// end addeventlistener
// only once mentioned code -- saves memory event DELEGATION applied.

// lets prove for future nodes if appear, so lets add one more node.

document.querySelector('#butt').addEventListener
('click', function(e){

    // adding more nodes to ul list element in html
    const sport= document.querySelector('#sports');
    const newsport=document.createElement('li');
    newsport.innerText= 'Rugby';
    newsport.setAttribute('id', 'rugby');
    sport.appendChild(newsport);
}
)












// document.querySelector('#football').addEventListener
// ('click', function(e){
//     console.log('football is clicked');

//     const target= e.target;
    
//     if (target.matches(`li`)){
//         target.style.backgroundColor= "red";

//     }
// })

// document.querySelector('#basketball').addEventListener
// ('click', function(e){
//     console.log('basketball is clicked');

//     const target= e.target;
    
//     if (target.matches(`li`)){
//         target.style.backgroundColor= "red";

//     }
// })

// document.querySelector('#boxing').addEventListener
// ('click', function(e){
//     console.log('boxing is clicked');

//     const target= e.target;
    
//     if (target.matches(`li`)){
//         target.style.backgroundColor= "red";

//     }

// })
// document.querySelector('#tennis').addEventListener
// ('click', function(e){
//     console.log('tennis is clicked');

//     const target= e.target;
    
//     if (target.matches(`li`)){
//         target.style.backgroundColor= "red";

//     }

// })
