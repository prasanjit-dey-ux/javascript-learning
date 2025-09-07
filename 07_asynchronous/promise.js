loginUser("user@example.com", "password")
    .then( loginResponse => {
        return getUserProfile('loginResponse.userId');
    })
    .then(profile => {
        displayUserProfile(profile);
    })