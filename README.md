# Local and Session Storage

This project demonstrates the use of Local Storage and Session Storage in React.js through two interactive components, showcasing the differences in data persistence between these storage options.

![Screenshot (516)](https://github.com/user-attachments/assets/583d9c16-912d-4b9a-a1f9-40c5e38b39e6)



## Key Features

### 1. Persistent Counter with Local Storage

A simple counter is stored in Local Storage, ensuring its value is retained even after the browser tab is closed and reopened.
Users can increment the counter, and the last saved value is retrieved when the page reloads.

### 2. Temporary Form with Session Storage
A form with Email and Password fields allows users to input and save their credentials temporarily in Session Storage.
Values are cleared automatically when the tab is closed, ensuring sensitive data is not persisted.

## Technology Stack

React.js: Core framework for building the UI.

Local Storage: For storing the counter value persistently.

Session Storage: For temporarily storing form input values.

CSS: For styling and enhancing user experience.

JavaScript (ES6+): For implementing storage and UI logic.

### Usage

Counter: Increment the counter and refresh the page or close and reopen the tab to see the saved value.

Form: Enter an email and password, save the values, and verify that they are cleared when the tab is closed.

## Future Enhancements

Add validation for email and password inputs.

Implement clear/reset buttons for both components.

Expand the counter with additional functionality like decrement or reset options.

