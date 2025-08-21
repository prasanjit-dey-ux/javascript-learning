/* forin loop

it is used for object.
it can be used for array but only keys come.

for (const key in user) {
    if (Object.prototype.hasOwnProperty.call(user, key)) {
        const element = user[key];
        console.log(`${key} : ${element}`)
    }
} */

let user = {
    username: "Jiiit",
    age: 21
}

 for (const key in user) {
    const element = user[key]
    console.log(`${key} : ${element}`);
}


