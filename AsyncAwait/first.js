//async await
//async function always retrurns a promise 

// async function greet() {
//     // return "Rohit";                                      will wrap it up in promise..if promise is accepted then the value will be returned

//     return new Promise((resolve, reject) => {
//         resolve("Rohit");                                   //will return the value as its already a promise
//     })
// }

// const response = greet();
// // console.log(response);
// response.then((data) => console.log(data))
// .catch((error) => {
//     console.log("Error: ", error)
// })

// fetch("https://api.github.com/users")
// .then((data) => data.json())
// .then((output) => console.log(output));

// const data = await fetch("https://api.github.com/users");             //fetch is an asynchronous function, will take time to execute. JS wont wait, will move to next line
// const output = await data.json();                                     //this is also an asynchronous function, JS will throw error
// console.log(output);                                            //Using await will stop JS to goto next line until the task isnt finished.

// console.log("yooooo");                                          //This await can freeze everything i.e., until the task isnt complete, JS wont move.

async function github() {
    console.log("Hello World")                                  //Synchronous task hai to perform ho jayega
    const data = await fetch("https://api.github.com/users");    //Ab idhar same Web API ko dene wala kaam ho jayega and JS move forward krega. 
    const output = await data.json(); 
    // console.log(output); 


    const parent = document.getElementById("first")

    for(let user of output) {

        const element = document.createElement("div");
        element.classList.add("user");

        const image = document.createElement("img");
        image.src = user.avatar_url;

        const userName = document.createElement("h2");
        userName.textContent = user.login;

        const anchor = document.createElement("a");
        anchor.href = user.html_url;
        anchor.textContent = "Visit Profile";

        element.append(image,userName,anchor);
        parent.append(element);
    }
    
}

github();
// console.log("yooooo");  