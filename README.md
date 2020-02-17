# 6 Degree's of Bacon

## Background

6 Degree's of Bacon is a data visualization app based off of the features created at Oracle of Bacon. This is a fun way to search for actors/actresses and how they connect back to Kevin Bacon! My focus for this project will be on the visualization aspect of these searches and making an interactive project so users can gather information about each connecting movie when a search is made. Another fun game to play is to try and get the highest possible Bacon number. 

## Features

#### Search Functionality
A user is able to enter any actor/acresses name into the search input and hit submit to start the search. The application proceeds to call the Oracle of Bacon API to search for connections and beings to build out the node tree using D3 forced graph layout. 

![](https://github.com/mkochalko/6degreesofbacon/blob/master/public/javascripts/images/BaconSearchGif.gif)

#### Movie Info
Once a search is complete, the user has the ability to click on any of the movie nodes to find out more information about the selected movie. 

![](https://github.com/mkochalko/6degreesofbacon/blob/master/public/javascripts/images/MoviePopoutGif.gif) 

## Architecture and Technologies

This project will implement the following technologies:
* `JavaScript` for clean user interaction and website transitions
* Oracle of Bacon API for connection/link requests and information
* `D3.js` for data visualization
* OMDB API for all movie information


## Challanges

One of the major challanges working with this project was implementing D3 force graph layout. This took quite a bit of time to research and incorprate into the code to get the application working as intended. However, even though this was a challenge it was great to be able to learn all about D3 and the many things one can do with a forced layout. 


