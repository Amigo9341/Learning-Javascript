const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming!!";
newElement.id = "second";
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "DIWALI is coming!";
newElement2.id = "third";
// newElement2.className = "Diwali";           //(.className) is used not class because "class" is already reserved. Ex:- let const is not true as const is already reserved.
// newElement2.className = "Holi";                //It will overwrite the above line.
// newElement2.className += "Holi";            Now it is assigned two class- (.DiwaliHoli)    
// newElement2.className += " Holi";           Here we have given space before Holi. So it will become- (.Diwali.Holi) 
newElement2.classList.add("Diwali");            
newElement2.classList.add("Holi");             //Using (.classList) will add both class like- (.Diwali.Holi)
// newElement2.classList.remove("Holi");        It will remove the Holi class
newElement2.style.backgroundColor = "red";
newElement2.style.fontSize = "40px";
newElement2.style.color = "blue";
newElement2.setAttribute("Hello", "man");       //We have set an attribute with Hello and its value is "man".

element.before(newElement2);

console.log(newElement2.getAttribute("class"));
console.log(newElement2.getAttribute("id"));
console.log(newElement2.getAttribute("Hello"));

// const list = document.createElement("li");
// list.textContent = "Milk";
// const list2 = document.createElement("li");
// list2.textContent = "Cake";
// const list3 = document.createElement("li");
// list3.textContent = "Halwa";
// const list4 = document.createElement("li");
// list4.textContent = "Paneer";

// const unorderElement = document.getElementById("listing");

// // unorderElement.append(list);        //Append is having children that too pushed in the last- from behind
// // unorderElement.append(list2);       
// unorderElement.append(list, list2);       //will append two at once
// unorderElement.prepend(list3);      //Prepend is also having children pushed from the front
// list.after(list4);                  //When we want to print in between 

const arr = ["Milk", "Halwa", "Tofu", "Paneer", "Tea"];

const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for(foods of arr) {
    const newList = document.createElement("li");
    newList.textContent = foods;
    // unorderElement.append(newList);         //Not an optimal approach as- har ek list ek ek karke UI mai append ho rha hai
    fragment.append(newList);                    //Its better to create all elements at once and then showcase at once in the UI
}
unorderElement.append(fragment);

//If you wish to delete one line

const s1 = document.getElementById("first");
s1.remove();

//Some old methods
const lister = document.createElement("li");
// lister.textContent = "YAYY!";
// listing.insertAdjacentElement("afterend", lister);

lister.textContent = "FAAAAH..!!";     //Isme kuch bhi html methods lagado it wont afftect as it is a textContent.
lister.innerhtml = "<h2>FAAAAH..!!</h2>"; //Innerhtml hai so isme html ke methods kaam karenge.
//Very dangerous. Dont use innerhtml.

month.prepend(lister);




