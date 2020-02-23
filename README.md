################ Weather Widget ################

# shows how you would structure a front end solution.
{
    "Technical stacks": {
        HTML, CSS, Typescript, ReactJS, jsonp
    },
}

# The structure of the project:
    Technical:
        - HTML+CSS for building up the UI of the project 
        - ReactJS + Typescript for building the logic-side of the project and type checking at compile time (propTypes is used to check type at run time)
        - jsonp for getting weather data from openweathermap API

    UI:
        - APP container is the main division which contains the weather-editor and weather-widget and pass the data from editor to widget
        - editor component is the weather editor which gets the title, unit and trigger of wind from the input and pass to the App container
        - widget component is the weather widget which shows the real-time weather data based on the editor 

# The instruction to run the app
    - git pull the project from the Github
    - cd the project
    - npm install
    - npm run start           

# Resources for soling problems
    - Used 'digital color meter' to capture the color from whevever I want and make the RGB to HEX (For UI consistency)
    - Used 'stackoverflow' to trigger the engine of my brain when I have some technical problems (Do not copy any codes from the site)
    - Used 'openweathermap API documentation' to find out the correct API calls with parameters
    - Used 'Postman' to test the API 

# Manual test
    - Test the data of editor can be saved to state and pass to App container 
    - Test App container get the data from editor and pass to widget component
    - Test the data of widget displays by the settings in the editor

# About the test
    The test is a good example for testing an applicant all the skills for the front-end side. For example, how to divide the project to different sections and how to make it match the design. More importantly, logic for capturing the user current location and then get the weather data should be one of the biggest challenges in this test, which can test asynchronous rendering, setState and so on.
       