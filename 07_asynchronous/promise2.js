// All three network requests start at the same time
Promise.all([
    fetchPosts(),
    fetchFriendsList(),
    fetchAdvertisements()
])
.then(([posts, friends, ads]) => {
    // This code runs only after ALL three promises have fulfilled
    renderPage(posts, friends, ads);
})
.catch(error => {
    // If any one of the requests fails, this will catch it
    showPageLoadError(error);
});