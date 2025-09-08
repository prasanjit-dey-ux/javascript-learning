// A promise chain is perfect for this sequence
loginUser("user@example.com", "password")
    .then(loginResponse => {
        // Step 1: Login successful, now fetch the profile
        return getUserProfile(loginResponse.userId); 
    })
    .then(profile => {
        // Step 2: Profile fetched, now display it
        displayUserProfile(profile);
    })
    .catch(error => {
        // Handles failure from either login OR profile fetching
        showLoginError(error);
    });