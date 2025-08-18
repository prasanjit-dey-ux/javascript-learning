/*
Conditionals: "Notification Toggles" (Medium)
This is the logic behind any settings page where a user can turn different features on or off independently. ⚙️

The Problem
Imagine a user's settings page. Write a script that checks the status of two notification settings and logs a summary.
You'll have two boolean variables: emailNotificationsEnabled and pushNotificationsEnabled.
Your script should log a single status line, for example: "Email: On, Push: Off".

The Logic Breakdown:

The Data: We have two separate boolean variables. Each represents an independent choice the user has made.
The Decision: Since the email setting does not affect the push setting, we don't need to chain them with else if. Instead, we will use two separate if/else statements. This is a key concept: one if/else for each independent decision.
The Output: We will determine the status of each setting ("On" or "Off") and store it in a variable. Then, at the end, we'll combine them for a clean output. This continues the good practice of separating logic from display.
*/