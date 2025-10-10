/**
 * What is async?
 - Basically its a keyword to create async functions and this always return a promise
 - Example:  
 async function getData(){
    // return promise
 }
 - The difference between this and normal fnc is it will always return promise
 - we can either return a promise from this function or if we return a value for eg,
   return "WELCOME", what it will do it will wrap this value in promise and return us a promise.



 * What is await?
  - await is a keyword which can only be used inside a async function.

   - async and await are use to handle promise, 
   but before that how we did that? and do we event need it?
  - Before
    we used to use .then and new Promise
  - After
  ```
  const userId = new Promise((resolve, reject) => {
    resolve("0xJiit07")
  })

  async function userData2 () {
  const val = await userId;
  console.log(val);
  }

  userData2()
  ```

  // when we use async await the js engine wait for the promise to resolved
  

 * How async function work behind the scene?
  - So in async await when a function get called and for eg it need to wait it terminate the func from the callstack so that it dont wait but its not 
    means it remove the programme it comes back the one the thing is done and start from where it left that why its good.


 * Example of using async/await?
 * Error Handling
   - We use trycatch to handel errors.
   - we also use .catch but trycatch is preferable
 
* Interviews
  How can you run multiple async tasks in parallel with async/await?

  Use Promise.all():

  ```
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
  ```

  All promises start at the same time; resolved together.
   
   
 * Async await vs Promise.then/.catch
  See both are the same async await is just a syntactical sugar of .then/.catch as behind the scene it run this only, but async await is a new way and
  its litle better because we dont have to deal with callback and so we need to do the promise chaining.
 * 
  
 */



// async fnc.


const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("I am Prasanjit");
    },5000);
});

const p2 = new Promise((resolve, reject ) => {
  setTimeout(() => {
      resolve("I am a Software Engineer")
  },10000);
});

async function getData() {
  console.log("Hello everyone");

  const val1 = await p1
  console.log("What is your name?");
  console.log(val1);

  const val2 = await p2
  console.log("What is feild are you in?");
  console.log(val2);
}

getData();


