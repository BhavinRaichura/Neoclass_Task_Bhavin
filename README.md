# Neoclass_Task_Bhavin

## Features
1. **Home Page:**

    - Feature: Landing Page with User Input Form
    - Purpose: The home page serves as the initial point of entry for users. It presents a user input form where users can submit their input or data, likely related to starting a test.

2. **Process Page:**

    - Feature: Fetching Questions from API and Updating Redux Store
    - Purpose: The process page is activated when a user clicks "Start Test." Its main purpose is to fetch questions from an external API if they don't already exist in the Redux store. It then updates the application's state to indicate that a test has started.

3. **Test Page:**

    - Feature: Rendering Test Questions with Navigation (Next and Previous Buttons)
    - Purpose: The test page is where the actual test questions are displayed. Users can navigate through the questions using Next and Previous buttons. This feature allows users to answer each question sequentially.

4. **End Page:**

    - Feature: Displaying Test Results
    - Purpose: The end page is designed to show users the results of the test they have taken. This includes information such as question IDs and the time taken on each question. It provides users with a summary of their performance.

5. **Test Ending Options:**

    - Feature: Multiple Ways to End the Test
    - Purpose: Users have several options to end the test:
        Clicking the "End" button in the navigation bar (associated with the testEndHandler Higher Order Component).
        Returning to the home page or refreshing the page.
        Automatically ending when the timer in the navigation bar reaches 00:00. The timer's duration is set to 5 minutes multiplied by the number of questions. These options give users flexibility in how they conclude the test.


## Dependencies

The project relies on the following dependencies:

* React
* Redux
* React Router
* Axios for fetching data from the API
* better-react-mathjax for rendering math equations.
* Tailwind CSS for styling.