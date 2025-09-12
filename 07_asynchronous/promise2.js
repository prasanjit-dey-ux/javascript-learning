
Promise.all([
    fetchPosts(),
    fetchFriendsList(),
    fetchAdvertisements()
])
.then(([posts, friends, ads]) => {

    renderPage(posts, friends, ads);
})
.catch(error => {

    showPageLoadError(error);
});