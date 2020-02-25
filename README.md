# [6 Degree's of Bacon](http://six-deg-of-bacon.herokuapp.com/)

![Home Screen](https://github.com/mkochalko/6degreesofbacon/blob/master/public/javascripts/images/home_screen.png)

## Background

6 Degree's of Bacon is a data visualization app based off of the features created at Oracle of Bacon. This is a fun way to search for actors/actresses and how they connect back to Kevin Bacon! My focus for this project will be on the visualization aspect of these searches and making an interactive project so users can gather information about each connecting movie when a search is made. Another fun game to play is to try and get the highest possible Bacon number. 

## Technologies

This project implemented the following technologies:
* `JavaScript` for clean user interaction and website transitions
* Oracle of Bacon API for connection/link requests and information
* `D3.js` with user of the force layout for data visualization
* OMDB API for all movie information

## Features

#### Search Functionality
A user is able to enter any actor/acresses name into the search input and hit submit to start the search. The application proceeds to call the Oracle of Bacon API to search for connections and beings to build out the node tree using D3 forced graph layout. 

![](https://github.com/mkochalko/6degreesofbacon/blob/master/public/javascripts/images/BaconSearchGif.gif)

Below is the code to add a new path from the center node. The `nextNode()` and `nextLink()` are separated since they are built with different information but the two functions act the same. First check if the count is 0, meaning that this is the first new node being added. If so, the new nodes source will always be the center node, otherwise the nodes source will be the previous node. `addPath()` is what is triggered upon searching a name. The initial `setTimeout()` allows the connection information from the Oracle API call to be written to the DOM before we start our new path. The iteration through the array of connection information takes place and adds nodes/links with an increasing `setTimeout()` interval which is what renders each of these nodes individually. `startSimulation()` will add these new nodes/links the the force layout, giving them set forces and position so they can interact properly with the rest of the nodes already rendered. The `setTimout()` at the bottom will just stop the simulation after 10 seconds. Since users have the ability to click on movie nodes to see more information, sometimes it can be difficult to click on a moving node. This will stop the simulation and keep the graph from moving, until the next action.

```
function nextNode(title, count) {
    let nodeNumber = nodes.length + 1
    let newNode;
    if (count === 0) {
      newNode = { "number": 2, "value": title, "target": "null", "source": 1}
    } else {
      newNode = { "number": nodeNumber, "value": title, "target": "null", "source": nodes[nodeNumber - 2] }
    }
    nodes.push(newNode);
}

function nextLink(count) {
    let nextLink;
    let lastNode = nodes.length
    if (count === 0) {
      nextLink = { "source": 0, "target": lastNode - 1, "distance": 5 }
    } else {
      nextLink = { "source": nodes[lastNode - 2], "target": nodes[lastNode - 1], "distance": 5 }
    }
    newLink = nextLink;
    links.push(nextLink);
}

function addPath() {
    setTimeout(() => {
      oracleSearchArray = document.getElementsByClassName("result");
      let oracleArray = [];

      for (let i = 0; i < oracleSearchArray.length - 1; i++) {
        oracleArray.unshift(oracleSearchArray[i].innerHTML)
      }

      let count = 0;
      while (count < oracleArray.length) {
        let internalCount = count
        setTimeout(() => {
          nextNode(oracleArray[internalCount], internalCount);
          nextLink(internalCount);

          startSimulation();

          internalCount++;
        }, 1000 * count)
        count++;
      }
    }, 1000)
    setTimeout(() => {
      simulation.stop()
    }, 10000)
}
```

#### Movie Info
Once a search is complete, the user has the ability to click on any of the movie nodes to find out more information about the selected movie. 

![](https://github.com/mkochalko/6degreesofbacon/blob/master/public/javascripts/images/MoviePopoutGif.gif) 


## Challanges

One of the major challanges working with this project was implementing D3 force graph layout. This took quite a bit of time to research and incorprate into the code to get the application working as intended. However, even though this was a challenge it was great to be able to learn all about D3 and the many things one can do with a forced layout. 


