/*
1. Select the Elements: Select the `<link>` tag with the ID `theme-link` and the `<button>` with the ID `theme-btn`.

2. Add a Click Listener: Add an event listener to the button that runs a function when it's clicked.

3. Implement the Logic: Inside the click event listener function:

    - Use `getAttribute()` to read the current `href` value of the `<link>` tag.
    - Use an `if/else` statement to check if the current theme is `light-theme.css`.
    - If it is, use `setAttribute()` to change the `href` attribute to `dark-theme.css`.
    - If it's not (meaning it's the dark theme), use `setAttribute()` to change it back to `light-theme.css`.
 */

const link = document.querySelector("#theme-link");
const btn = document.querySelector("#theme-btn");

// Add a click listener
btn.addEventListener("click", function() {
    // Get the current theme FROM THE LINK ELEMENT
    const currentTheme = link.getAttribute("href");

    if (currentTheme === "light-theme.css") {
        // Switch to dark mode
        link.setAttribute("href", "dark-theme.css");
    } else {
        // Switch back to light theme (using the correct 'link' variable)
        link.setAttribute('href', 'light-theme.css');
    }
});
    





