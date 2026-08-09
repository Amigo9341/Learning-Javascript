// function handleClick() {
//     const element = document.getElementById("first");
//     element.textContent = "Strike is coming!";
// }

const element = document.getElementById("first");  //Its better to call the function in JS rather than in HTML
element.onclick = function handleClick(){
    element.textContent = "Strike is coming!";
}
element.onclick = function handleClick(){    //This will overwrite the above lines of code
    element.textContent = "I am the best!!";
}
element.addEventListener('click', function(){
    element.style.backgroundColor = "brown";
})
element.addEventListener('dblclick', () => element.textContent = "MONEY FOLLOWS MY BROTHAA..")

element.addEventListener('mouseenter', ()=> element.textContent = "Jaldi : THE LATE")
element.addEventListener('mouseleave', () => element.textContent = "KOTESHWARAYA!")

let a= {
    Aman: function(value){
        console.log("My age is",value)
    }
}
a.Aman(21);

// const child1 = document.getElementById("child1");
// child1.addEventListener('click', () => child1.textContent = "I AM CLICKED")

const parent = document.getElementById("parent");
parent.addEventListener('click', (e) => {               //e.target gives you the id which is clicked.
    e.target.textContent = "I AM CLICKED.."
})
// console.log(parent.children);
// for(let Amigo of parent.children){
//     console.log(Amigo);
//     Amigo.addEventListener('click', () => Amigo.textContent = "I AM CLICKED!!");
// }

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click', (e) => {
//     console.log(e.target);
//     console.log("Grandparent is clicked."),false
// });

// const parent = document.getElementById("parent");
// parent.addEventListener('click', (e) => {
//     console.log(e);
//     e.stopPropagation();
//     console.log("Parent is clicked."),false});                //false is a captcha which is by default there

//    //If we make it true, Capture phase ON ho jayega

// const child = document.getElementById("child");
// child.addEventListener('click', (e) => {
//     console.log(e);
//     e.stopPropagation();
//     console.log("Child is clicked."),false
// });
//capture phase ON hai: Top se down aooge: Us time pe event ko trigger kar diya jayega 
//capture phase OFF hai: Event hai usko down to up(Bubbling phase bolte hai usko trigger kiya jayega)




