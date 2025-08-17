/*
Conditionals: "Dashboard Access" (Medium)
This is the core logic that controls what users can see and do in an application like WordPress, Google Docs, or any corporate software.

The Problem
Write a script that determines a user's permissions based on their userRole.
If the userRole is 'admin', log "Full access to all features."
If the userRole is 'editor', log "Can edit content and view analytics."
If the userRole is 'viewer', log "View-only access to content."
For any other role, log "Invalid role. Access denied."

The Logic Breakdown

The Data: We need a userRole variable, which will be a string, to represent the user's status.
The Decision: Like the shipping calculator, we have multiple distinct paths. An if...else if...else chain is the perfect tool for this.
The Importance of the else: In this scenario, the final else is a crucial security feature. It acts as a "default deny" rule, ensuring that if a role is unknown or misspelled, the user doesn't get access they shouldn't have.
*/

let userRole = "editor";

let permissions;


if (userRole === "admin") {
    permissions = "Full access to all features."
} else if (userRole === "editor") {
    permissions = "Can edit content and view analytics."
} else if (userRole === "viewer") {
    permissions = "View-only access to content."
} else {
    console.log("Invalid role. Access denied.");
}


console.log(`Permission: ${permissions}`);