# 6 Degrees of Bacon

## Background

It’s Kevin Bacon is a data visualization app based off of the features created at Oracle of Bacon. This is a fun way to search for actors/actresses and how they connect back to Kevin Bacon! My focus for this project will be on the visualization aspect of these searches and making an interactive project so users can gather information about each actor/movie when a search is made. Another fun game to play is to try and get the highest possible Bacon number. 

## Functionality and MVP

* Search Functionality
    * Enter a name into the search box and get the appropriate data back
* Display Data
    * Use D3 to get a node map to display 
* Proper data visualization 
    * Create animations for each search to show great transitions and skill with JavaScript
* Implement movie data
    * Use search response and make an API call for more information on each movie/actor
* Incorporate clean user interaction with movie data
    * Use API response to generate turning pages on each actor/movie shown for a users search. User JavaScript to create a page flipping action. 

## Wireframes

This is the general idea of what features are on my page

![Wireframe](https://github.com/mkochalko/6degreesofbacon/blob/master/public/javascripts/images/6DegWireframe.png)

## Architecture and Technologies

This project will implement the following technologies:
* `JavaScript` for clean user interaction and website transitions
* Oracle of Bacon API for connection/link requests and information
* `D3.js` for data visualization
* IMDB API for any and all movie/actor information


## Implementation Timeline

#### Day 1: 
Setup all project files to get webpack up and running. Create an entry file with the minimal headers and items for the site including the initial search

#### Day 2: 
Learn the proper way to make the API call for the actor link information. Be able to return the correct response and shape it for the map properly

#### Day 3: 
Setup D3 Node map to display default map. Initially the node map will show a center node and multiple lines that connect off of the center node. Then display search result onto the node map in a smooth animation. 

#### Day 4: 
Get the correct IMDB response information
Create successful API calls for all movie and actor information. Select only the information that will be shown on the node map

#### Day 5: 
Use vanilla JS to display interactive movie data from search results. The goal is to create a flipping page effect when a user clicks on a specific movie or actor. 

