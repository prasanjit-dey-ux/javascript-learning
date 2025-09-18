function fetchUserProfile(userId) {
    return new Promise((resolve) => {
        console.log(`Fetching profile for user ${userId}`);
        setTimeout(() => {
            resolve({ id: userId, name: "Alex", theme: "dark"});
        },500); // takes 0.5 sec
    });
}

function fetchUserNotification(userId) {
    return new Promise ((resolve) => {
        console.log(`Fetching notification for user ${userId}`);
        setTimeout(() => {
            resolve(['New message from Bob', 'your post was liked']);
        }, 1500); // takes 1.5 seconds (the slowest one)
    });
}

function fetchUserFriends(userId) {
    return new Promise ((resolve) => {
        console.log(`Fetching friends for user ${userId}...`);
        setTimeout(() => {
            resolve(["Bob", "Nina", "Charlie"]);
        }, 1000);
    });
}

// ::: Using Promise.all to load the dashboard

async function loadDashboard(userId) {
    console.log("Starting loading Dashboard...");
    const startTime = Date.now();

    try {
        // Create an array of promises by calling all the functions.
        // They all start running at roughly the same time.

        const promises = [
            fetchUserProfile(userId),
            fetchUserNotification(userId),
            fetchUserFriends(userId)
        ];

        // Promise.all waits for every promise in the array to be fulfilled.
        const [profile, notification, friends] = await Promise.all(promises);

        // This code only runs after ALL three are complete.
        console.log('\n--- Dashboard Loaded ---');
        console.log('User Profile:', profile);
        console.log('Notification:', notification);
        console.log('Friends:', friends);
        
        const duration = Date.now() - startTime;
        console.log(`\nDashboard loaded in ${duration}ms.`);
        
    } catch (error) {
        console.error('Failed to load dashboard:', error);
    }
}

// Run the function for "user123"
loadDashboard('user123');