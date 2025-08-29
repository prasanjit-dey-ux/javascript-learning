const user = {
    name: "Jiiit",
    username: "@jiit_ui",
    bio: "Software developer and coffee enthusiast. Building cool things for the web."
};

const nameElement = document.querySelector("#user-name");
const usernameElement = document.querySelector('#user-username');
const bio = document.querySelector('#user-bio');

nameElement.textContent = user.name;
usernameElement.textContent = user.username;
bio.textContent = user.bio;