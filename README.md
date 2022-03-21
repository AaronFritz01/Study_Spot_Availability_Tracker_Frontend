# The Study Spot Availability Tracker Website Frontend

The site uses the Vue suite under the hood. 
* Vue is the main javascript framework for the functionality of the sites interactions, abstracting away some functionality for quicker development and more organized code
* Vuex is the state management system to dynamically update data based on other interactions on the site
* Vuetify is the styling library that abstracts away some html and css and makes it easier to manage cross page themes
* Vite is a development server and bundler that optimizes site performance and improves development experience (including seeing changes live)


## Using the Project Locally
For your convenience I have made a make file that includes all needed commands. If you do not have make installed, open the Makefile and run the command under each target.
### Installation
```sh
make initialize
```
### Development (auto reload)
```sh
make dev
```
### Compile and Minify for Final Deployment
Make note of the port its broadcasting to and configure that with the webserver.
```sh
make deploy
```

## Other Repos in Project
Arduino Code: https://github.com/kjh44444444/pitch-project

Backend: 

## Project Abstract
<hr>

Purdue University has now seen the largest incoming class for Fall 2021 with more than 10,000 freshmen enrolling. Due to the added volume of people, it is becoming increasingly time-consuming for students to find places to study, even though there are plenty of vacant spaces around the West Lafayette campus.
We propose the 'Study Spot Availability Tracker', a system that monitors seat occupancy in buildings that have a place to study. The tracker will detect the availability of each seat and display its occupancy through a web environment and mobile friendly site. Developments that our team has made over the Spring 2022 semester were to utilize detection with the combination of multiple sensors, such 1) Ultrasonic with passive infrared (PIR) sensor and 2) infrared thermal sensor with PIR sensor. By modifying the conditions from the previous design, we expect to have improvements in accuracy. Furthermore, to make this possible, we will implement our solution by producing hardware, including custom PCB design for sensor circuits and 3D printed casing that will fit the sensors and electrical components. Our website will be hosted by Purdue and developed using the Vue framework, with a python based back-end, and a MySQL or real-time database. It will interact with the constellation of detectors to gather and display occupancy data in a user-friendly and visually appealing website.
