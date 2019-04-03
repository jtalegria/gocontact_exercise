# GoContact | Application Exercise

João Alegria | jt_alegria@hotmail.com | 913881828


### Project Description
The main aim of the proposed challenge was to implement the following steps:
1. Build a backend system, in NodeJS, that communicates with a public Weather API to collect information about the temperature, sunrise and sunset hours of 3 cities.
2. Build a frontend solution, in ReactJS, that allows the input of 3 cities, communicating with the backend, in order to collect the information expressed above.
3. The backend, after recieving the data from the Weather API, sends it to the frontend, to be displayed in a bar chart the temperature of each city. In addition, the temperature, sunrise and the sunset hours of each city, will be shown in a table, allowing the user to sort each entry by clicking on the correspondent table header.
5. For each request that has been made, the backend must register each request into a log file.

### Project Structure and Dependencies
The structure of this project is organized into two main directories:

 - backend
 - frontend
 
In order to execute the project, as well as the installation of the dependencies, it is necessary to install [*npm*](https://www.npmjs.com/get-npm) first.
After doing so, if you had downloaded the folder node_modules, proceed to the next topic. If you haven't, to install the dependencies of each project, access each directory and run the following command *npm install*.
 
### Project Execution
After the previous topic is completed, simply navigate first to the backend directory, and run:

> (Backend)
>$ nodemon ./bin/server.js

Then, to be able to run the Frontend project, navigate to the directory, run the command below and a new browser window will pop up.

> (Frontend)
>$ npm start

### Limitations
Since the resolution of this challenge depends on a [third party service](https://openweathermap.org/api), it may not return the desired information, since this is a free service with limitations of requests per minute.

### Extra Features

 1. Since one of the final results is a web-page, I managed to make it responsive to be able to be used in a different devices, so it can be more user-friendly.
 2. The second feature added is the possibility to the user select one bar of the chart, and will be hightlighted the correspondent table row of the city chosen.

