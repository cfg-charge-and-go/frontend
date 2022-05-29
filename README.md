# <p align="center"><img width="277" alt="logo" src="https://user-images.githubusercontent.com/102037222/170836531-c7a6e416-c6b4-46c9-a044-1e58db6ca287.png"></p>


<h3 align="center">Simplifying the electric vehicle experience</h3>

<h4 align="center">This mobile app identifies suitable charging stations for electric vehicle owners along their planned routes.</h4>

<p align="center">Built with :heart: by cfg-ford</p>

[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

## 

  

### Authors:


[ayankhalif](https://github.com/ayankhalif)<br>
[IoanaCatalina](https://github.com/IoanaCatalina)<br>
[itsrosita](https://github.com/itsrosita)<br>
[NatAmanfo](https://github.com/NatAmanfo)<br>
[ZhaonanZhang](https://github.com/ZhaonanZhang)<br>
[egrfly](https://github.com/orgs/cfg-charge-and-go/people/egrfly)<br>


### How to use this app

This app was built using React, Flask, and MySQL Workbench on a localhost. 
You will need to ask for permissions to acquire personal access tokens to utilize the following APIs:<br> 
Charging station locator - [UK National Charge Point Registry](https://chargepoints.dft.gov.uk/api/help)<br> 
UK car registration information - [DVLA Vehicle Enquiry Service](https://developer-portal.driver-vehicle-licensing.api.gov.uk/availableapis.html#current-available-apis)<br>
Google Map Support API - [@react-google-maps/api](https://react-google-maps-api-docs.netlify.app/).<br>
Location Autocomplete - [Google Search Places Autocomplete](https://github.com/wellyshen/use-places-autocomplete)<br>
Geolocator - [Places Library Google Maps](https://developers.google.com/maps/documentation/javascript/places)<br>


You will also need to use your own MySQL Workbench username and password to create the database that is located in the backend folder called *authentication_management.py*. Use the charge_and_go script to build the database. 

**Note: We welcome contributors to help this project grow.** 

### Quick start

Clone the repository; ensure you have node.js installed on your choosen IDE. On your terminal run `npm install` to retrieve package dependencies and `npm start` to open the charge-and-go react app.

### Backend
Python Packages, pip install + *package_name*:<br>
• Flask - jsonify, request, session<br>
• requests<br>
• my-sql-connector<br>
• cors<br>

## Learn More

As you open the app, you will be greeted with the Welcome Page, click "get moving" to start. Non-registered members can input a UK address and see charging stations nearby. Click on the "info" icon for more information on the app. To get more features, such as a ratings page and route, sign-up.

<img width="160" alt="welcome" src="https://user-images.githubusercontent.com/102037222/170840808-2d10008a-d7d8-4d7b-bc2a-71da7a626049.png"> <img width="160" alt="homepage" src="https://user-images.githubusercontent.com/102037222/170840944-cc086d90-9009-4bbc-85bd-1b2c1db15ce0.png">  <img height="310" width="150" alt="info" src="https://user-images.githubusercontent.com/102037222/170889635-280f48c3-c902-4e9e-9e42-a0a9e94833ae.png">  <img wheight="310" width="150" alt="signup" src="https://user-images.githubusercontent.com/102037222/170889636-b0209873-2bdc-448c-b8ce-a1d5ee6c40b0.png">  <img height="310" width="150" alt="login" src="https://user-images.githubusercontent.com/102037222/170889640-7d841281-c4ea-4be6-8ec1-32db0363b020.png">
<br>
Registered Members can get charging locations near their route suggestion, including an end destination. Users can rate a charging station and save it to their favourites.<br><br>
<img height="310" width="150" alt="Screen_Shot_2022-05-29_at_1 23 38_PM-removebg-preview" src="https://user-images.githubusercontent.com/102037222/170890080-9e741ed4-3647-46b3-949e-13d0cdd82ec8.png">
<img height="310" width="150" alt="Screen_Shot_2022-05-29_at_1 19 32_PM-removebg-preview" src="https://user-images.githubusercontent.com/102037222/170890083-0cf4eeaf-498d-4245-9d02-f31c1c744cdf.png">
<img height="310" width="150" alt="Screen_Shot_2022-05-29_at_1 19 19_PM-removebg-preview" src="https://user-images.githubusercontent.com/102037222/170890085-6d928c63-15cd-4bee-a87b-f6dbb4950ba8.png">

## Modifying the Map
In the *Map.js* file, line 35 uses a hook to set a default center, which can be modified to any location by updating the lattitude and logitude. Line 36 useState's parameter can be increased or decreased to zoom in or out of the map. Line 39 (directions) and 40 (charging stations) are the hooks used to locate the user address and display surrounding charging station locations nearby.<br>  
<img width="645" alt="functions" src="https://user-images.githubusercontent.com/102037222/170887839-dbf5729c-76db-4acd-b9ca-cc24d2869936.png">


### Languages and Programmes
<p align="center"><a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="34" height="34"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="34" height="34"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="34" height="34"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="34" height="34"/> </a> <a href="https://heroku.com" target="_blank"> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="34" height="34"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="34" height="34"/> </a> <a href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="34" height="34"/> </a><a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="34" height="34"/> </a> <a href="https://reactjs.org" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="34" height="34"/></a>

  </p>

