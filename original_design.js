
        // d3.select(".d3-node-map").append("svg")

          // let nodes = [
          //     { "number": 1, "value": '', "target": "null", "source": "null" },
          //     { "number": 2, "value": '', "target": 8, "source": 1, "radius": 5 },
          //     { "number": 3, "value": '', "target": 9, "source": 1, "radius": 5 },
          //     { "number": 4, "value": '', "target": 10, "source": 1, "radius": 5 },
          //     { "number": 5, "value": '', "target": 11, "source": 1, "radius": 5 },
          //     { "number": 6, "value": '', "target": 12, "source": 1, "radius": 5 },
          //     { "number": 7, "value": '', "target": 13, "source": 1, "radius": 5 },
          //     { "number": 8, "value": '', "target": 14, "source": 2, "radius": 5 },
          //     { "number": 9, "value": '', "target": 15, "source": 3, "radius": 5 },
          //     { "number": 10, "value": '', "target": 16, "source": 4, "radius": 5 },
          //     { "number": 11, "value": '', "target": 17, "source": 5, "radius": 5 },
          //     { "number": 12, "value": '', "target": 18, "source": 6 },
          //     { "number": 13, "value": '', "target": 19, "source": 7 },
          //     { "number": 14, "value": '', "target": 20, "source": 8 },
          //     { "number": 15, "value": '', "target": 21, "source": 9 },
          //     { "number": 16, "value": '', "target": 22, "source": 10 },
          //     { "number": 17, "value": '', "target": 23, "source": 11 },
          //     { "number": 18, "value": '', "target": 24, "source": 12 },
          //     { "number": 19, "value": '', "target": 25, "source": 13 },
          //     { "number": 20, "value": '', "target": 26, "source": 14 },
          //     { "number": 21, "value": '', "target": 27, "source": 15 },
          //     { "number": 22, "value": '', "target": 28, "source": 16 },
          //     { "number": 23, "value": '', "target": 29, "source": 17 },
          //     { "number": 24, "value": '', "target": 30, "source": 18 },
          //     { "number": 25, "value": '', "target": 31, "source": 19 },
          //     { "number": 26, "value": '', "target": 32, "source": 20 },
          //     { "number": 27, "value": '', "target": 33, "source": 21 },
          //     { "number": 28, "value": '', "target": 34, "source": 22 },
          //     { "number": 29, "value": '', "target": 35, "source": 23 },
          //     { "number": 30, "value": '', "target": 36, "source": 24 },
          //     { "number": 31, "value": '', "target": 37, "source": 25 },
          //     { "number": 32, "value": '', "target": 38, "source": 26 },
          //     { "number": 33, "value": '', "target": 39, "source": 27 },
          //     { "number": 34, "value": '', "target": 40, "source": 28 },
          //     { "number": 35, "value": '', "target": 41, "source": 29 },
          //     { "number": 36, "value": '', "target": 42, "source": 30 },
          //     { "number": 37, "value": '', "target": 43, "source": 31 },
          //     { "number": 38, "value": '', "target": 44, "source": 32 },
          //     { "number": 39, "value": '', "target": 45, "source": 33 },
          //     { "number": 40, "value": '', "target": 46, "source": 34 },
          //     { "number": 41, "value": '', "target": 47, "source": 35 },
          //     { "number": 42, "value": '', "target": 48, "source": 36 },
          //     { "number": 43, "value": '', "target": 49, "source": 37 },
          //     { "number": 44, "value": '', "target": 50, "source": 38 },
          //     { "number": 45, "value": '', "target": 51, "source": 39 },
          //     { "number": 46, "value": '', "target": 52, "source": 40 },
          //     { "number": 47, "value": '', "target": 53, "source": 41 },
          //     { "number": 48, "value": '', "target": 54, "source": 42 },
          //     { "number": 49, "value": '', "target": 55, "source": 43 },
          //     { "number": 50, "value": '', "target": 56, "source": 44 },
          //     { "number": 51, "value": '', "target": 57, "source": 45 },
          //     { "number": 52, "value": '', "target": 58, "source": 46 },
          //     { "number": 53, "value": '', "target": 59, "source": 47 },
          //     { "number": 54, "value": '', "target": 60, "source": 48 },
          //     { "number": 55, "value": '', "target": 61, "source": 49 },
          //     { "number": 56, "value": '', "target": "null", "source": 50 },
          //     { "number": 57, "value": '', "target": "null", "source": 51 },
          //     { "number": 58, "value": '', "target": "null", "source": 52 },
          //     { "number": 59, "value": '', "target": "null", "source": 53 },
          //     { "number": 60, "value": '', "target": "null", "source": 54 },
          //     { "number": 61, "value": '', "target": "null", "source": 55 }

          //   ]

          //   let links = [
          //     { "source": 0, "target": 1, "distance": 5 },
          //     { "source": 0, "target": 2, "distance": 5 },
          //     { "source": 0, "target": 3, "distance": 5 },
          //     { "source": 0, "target": 4, "distance": 5 },
          //     { "source": 0, "target": 5, "distance": 5 },
          //     { "source": 0, "target": 6, "distance": 5 },
          //     { "source": 1, "target": 7, "distance": 5 },
          //     { "source": 2, "target": 8, "distance": 5 },
          //     { "source": 3, "target": 9, "distance": 5 },
          //     { "source": 4, "target": 10, "distance": 5 },
          //     { "source": 5, "target": 11, "distance": 5 },
          //     { "source": 6, "target": 12, "distance": 5 },
          //     { "source": 7, "target": 13, "distance": 5 },
          //     { "source": 8, "target": 14, "distance": 5 },
          //     { "source": 9, "target": 15, "distance": 5 },
          //     { "source": 10, "target": 16, "distance": 5 },
          //     { "source": 11, "target": 17, "distance": 5 },
          //     { "source": 12, "target": 18, "distance": 5 },
          //     { "source": 13, "target": 19, "distance": 5 },
          //     { "source": 14, "target": 20, "distance": 5 },
          //     { "source": 15, "target": 21, "distance": 5 },
          //     { "source": 16, "target": 22, "distance": 5 },
          //     { "source": 17, "target": 23, "distance": 5 },
          //     { "source": 18, "target": 24, "distance": 5 },
          //     { "source": 19, "target": 25, "distance": 5 },
          //     { "source": 20, "target": 26, "distance": 5 },
          //     { "source": 21, "target": 27, "distance": 5 },
          //     { "source": 22, "target": 28, "distance": 5 },
          //     { "source": 23, "target": 29, "distance": 5 },
          //     { "source": 24, "target": 30, "distance": 5 },
          //     { "source": 25, "target": 31, "distance": 5 },
          //     { "source": 26, "target": 32, "distance": 5 },
          //     { "source": 27, "target": 33, "distance": 5 },
          //     { "source": 28, "target": 34, "distance": 5 },
          //     { "source": 29, "target": 35, "distance": 5 },
          //     { "source": 30, "target": 36, "distance": 5 },
          //     { "source": 31, "target": 37, "distance": 5 },
          //     { "source": 32, "target": 38, "distance": 5 },
          //     { "source": 33, "target": 39, "distance": 5 },
          //     { "source": 34, "target": 40, "distance": 5 },
          //     { "source": 35, "target": 41, "distance": 5 },
          //     { "source": 36, "target": 42, "distance": 5 },
          //     { "source": 37, "target": 43, "distance": 5 },
          //     { "source": 38, "target": 44, "distance": 5 },
          //     { "source": 39, "target": 45, "distance": 5 },
          //     { "source": 40, "target": 46, "distance": 5 },
          //     { "source": 41, "target": 47, "distance": 5 },
          //     { "source": 42, "target": 48, "distance": 5 },
          //     { "source": 43, "target": 49, "distance": 5 },
          //     { "source": 44, "target": 50, "distance": 5 },
          //     { "source": 45, "target": 51, "distance": 5 },
          //     { "source": 46, "target": 52, "distance": 5 },
          //     { "source": 47, "target": 53, "distance": 5 },
          //     { "source": 48, "target": 54, "distance": 5 },
          //     { "source": 49, "target": 55, "distance": 5 },
          //     { "source": 50, "target": 56, "distance": 5 },
          //     { "source": 51, "target": 57, "distance": 5 },
          //     { "source": 52, "target": 58, "distance": 5 },
          //     { "source": 53, "target": 59, "distance": 5 },
          //     { "source": 54, "target": 60, "distance": 5 }
          //   ]

          // // console.log(d3)


          // const simulation = d3.forceSimulation()
          //   .nodes(nodes);

          //   function dist(d) {
          //     return d.distance / 2
          //   }

          //   function updateDist(d) {
          //     return d.distance + 40
          //   }

          // var link_force = d3.forceLink(links).distance(function (d) { return 5 }).strength(1)

          //   simulation
          //     .force("charge_force", d3.forceManyBody().strength(-150))
          //     .force("center_force", d3.forceCenter(width / 2, height / 3))
          //     .force('collision', d3.forceCollide().radius(20))
          //     .force("links", link_force);

          // let button;
          // document.addEventListener("DOMContentLoaded", () => {
          //   submitButton = document.getElementById("oracle-search")
          //   submitButton.addEventListener("click", updateNode)
          // })

          //   //add tick instructions: 
          //   simulation.on("tick", tickActions);
          //   // console.log(d3)
          //   // console.log(document.getElementById("oracle-search"))
          //   // let button = d3.select(document.getElementById("oracle-search"));
          //   // console.log(button)
          //   // let submitButton = Array.from(button)
          //   // console.log(submitButton)
          //   // button.on("click", updateNode)

          //   // draw lines for the links 
          //   var link = svg.append("g")
          //       .attr("class", "links")
          //     .selectAll("line")
          //     .data(links)
          //     .enter().append("line")
          //       .attr("stroke-width", 3)
          //       .style("stroke", "#43BEE5")

          //   // link.enter().insert("path", "g")
          //   //   .attr("class", "link")

          //   // //draw circles for the links 
          //   var node = svg.selectAll(".node")
          //       .data(nodes)
          //       .enter()
          //       .append("g")
          //       .attr("class", "node")
          //       .attr("width", 20)
          //   // console.log(node)
          //     node.append("circle")
          //       .attr("r", 6)
          //       .attr("fill", "#F40058")
          //       .attr("id", function(d){return d.number;})
          //       .on("click", click)

          //     node.append("text")
          //       .attr("value", "")
          //       .text(function (d) { return d.value })



          //   // var node = svg.append("g")
          //   //   .attr("class", "nodes")
          //   //   .selectAll("circle")
          //   //   .data(nodes)
          //   //   .enter()
          //   //   .append("circle")
          //   //   .attr("r", 12)
          //   //   .attr("fill", circleColor)
          //   //   .on("click", click);

          //   // node.append("text")
          //   //     .attr("dx", 12)
          //   //     .attr("dy", ".35em")
          //   //     .text(function (d) { return d.value })

          //   function circleColor(d) {
          //         return "#F40058";
          //     }

          //     //Function to choose the line color and thickness 
          //     //If the link type is "A" return green 
          //     //If the link type is "E" return red 
          //     function linkColor(d) {
          //         return "#43BEE5";
          //     }

          //     function tickActions() {
          //       // console.log(node)
          //       // debugger;
          //         //update circle positions each tick of the simulation 
          //         console.log(node.select("circle"))
          //         node.select("circle")
          //           .attr("cx", function (d) { return d.x; })
          //           .attr("cy", function (d) { return d.y; });

          //         node.select("text")
          //           .attr("x", function (d) { return d.x; })
          //           .attr("y", function (d) { return d.y; });

          //         //update link positions 
          //         //simply tells one end of the line to follow one node around
          //         //and the other end of the line to follow the other node around
          //         link
          //           .attr("x1", function (d) { return d.source.x; })
          //           .attr("y1", function (d) { return d.source.y; })
          //           .attr("x2", function (d) { return d.target.x; })
          //           .attr("y2", function (d) { return d.target.y; });
          //       } 

          //     function click(d) {
          //       // console.log(d3.select("g"))
          //       let root = node.filter(function (d, i) {return i === 1 })
          //       // console.log(root)
          //       // console.log(root.selectAll("g.child"))


          //       // node.filter(function (d, i) { return i === 0 }).select("text")
          //       //   .text("Kevin Bacon")

          //       // d3.select(this)
          //       //   .attr("r", 26)
          //       //   .attr("value", "Test")
          //       //   .style("fill", "lightsteelblue");



          //       d3.selectAll("circle").style("fill", "blue")
          //         .attr("r", 12);//reset all node colors
          //       d3.selectAll("line").style("stroke", "green");//reset the color for all links
          //       d3.selectAll("text").text(" ") //reset the text for all nodes


          //       let test = "Kevin Bacon"
          //       let oracleArray = ["David Koechner", "My One and Only", "Kevin Bacon"]
          //       let reversedOracleArray = oracleArray.reverse();
          //       let randomIndex = Math.ceil(Math.random() * 11) + 1
          //       // console.log(randomIndex)
          //       let randomNode = node.filter(function (d) { return d.number === randomIndex })
          //       // console.log(randomNode)
          //       // console.log("randomNode above")

          //       let count = 1
          //       let actorIndex = 0
          //       // console.log(d)
          //       while (d) {
          //         // console.log(d)
          //         // console.log(this)
          //         // console.log(reversedOracleArray[count - 1])
          //         // console.log(count - 1)

          //         let thisD = d
          //         let currentNode = node.filter(function (d) { return d.number === thisD.number })
          //         // console.log(currentNode)
          //         let overlayText = (reversedOracleArray) => {
          //           currentNode.select("text")
          //             .attr("value", reversedOracleArray[actorIndex])
          //             .text(reversedOracleArray[actorIndex])

          //           actorIndex++
          //           // console.log(currentNode.select("text"))
          //         }
          //         // debugger;
          //         // console.log(node.select("circle").filter(function (d) { console.log(d); return }))
          //         let updateCircle = (reversedOracleArray) => {currentNode.select("circle").style("fill", "red")
          //           .transition()
          //           .duration(1000)
          //           .attr("r", 30)

          //           overlayText(reversedOracleArray)
          //         }

          //         let circleTime = count * 750
          //         let textTime = 200

          //         let promiseTimeout = (circleTime) => new Promise((udpateCircle, reject) => {
          //           setTimeout(() => {
          //             updateCircle(reversedOracleArray)
          //           }, circleTime)
          //         });
          //           //, (750 * count))



          //           // .text(function (d) { console.log(d); return reversedOracleArray[count - 1] })


          //         promiseTimeout(circleTime)
          //         //.then(overlayText(), () => {console.log("rejected")})
          //         //.then()

          //         if (d.number === 1) {
          //           setTimeout(() => {link.filter(function (d) { return d.target.number === randomIndex})
          //             .transition()
          //             .duration(1000)
          //             .style("stroke", "red")
          //             .attr("distance", 40)}, (900 * count))


          //         } else if (d.target != "null") {
          //           setTimeout(() => {link.filter(function (d) { return d.target.number === thisD.target })
          //             .transition()
          //             .duration(1000)
          //             .style("stroke", "red")
          //             .attr("distance", 40)}, (900 * count))

          //         }

          //         if (d.number === 1) {
          //           d = nodes[randomIndex - 1];
          //         } else {
          //           d = nodes[d.target - 1];
          //         }
          //         count++
          //       }
          //     }


          //     // let givenLinks = [];
          //     function updateForce() {
          //       simulation
          //         .force("charge_force", d3.forceManyBody().strength(-200))
          //         .force('collision', d3.forceCollide().radius(20).strength(1))
          //         .force("links", link_force);

          //       simulation.alpha(1).restart()

          //       // Restart the force layout.
          //       // force
          //       //   .nodes(nodes)
          //       //   .links(links)
          //       //   .start();

          //       // Update links.
          //     //   link = link.data(links, function (d) { return d.target.id; });

          //     //   link.exit().remove();

          //     //   link.enter().insert("line", ".node")
          //     //     .attr("class", "link")
          //     //     .attr("stroke-width", 3)
          //     //     .style("stroke", linkColor);

          //     //   // Update nodes.
          //     //   node = node.data(nodes, function (d) { return d.id; });

          //     //   node.exit().remove();

          //     //   var nodeEnter = node.enter().append("g")
          //     //     .attr("class", "node")

          //     //   nodeEnter.append("circle")
          //     //     .attr("r", 30);

          //     //   nodeEnter.append("text")
          //     //     .attr("dy", ".35em")
          //     //     .text(function (d) { return d.value; });

          //     //   node.select("circle")
          //     //     .style("fill", "red");

          //     };


          //     function updateNode() {
          //       setTimeout(() => {
          //         // console.log(document.getElementsByClassName("result").length)
          //         if (document.getElementsByClassName("result").length > 0) {
          //           let root = node.filter(function (d, i) { return i === 0 })
          //         // console.log(d)
          //         // console.log(root.selectAll("g.child"))


          //         // node.filter(function (d, i) { return i === 0 }).select("text")
          //         //   .text("Kevin Bacon")

          //         // d3.select(this)
          //         //   .attr("r", 26)
          //         //   .attr("value", "Test")
          //         //   .style("fill", "lightsteelblue");



          //         // d3.selectAll("circle").style("fill", "#F40058")
          //         //   .attr("r", 6);//reset all node colors
          //         // d3.selectAll("line").style("stroke", "#43BEE5");//reset the color for all links
          //         // d3.selectAll("text").text(" ") //reset the text for all nodes


          //         let test = "Kevin Bacon"
          //         let oracleSearchArray = document.getElementsByClassName("result");
          //         // console.log(oracleSearchArray)
          //         let oracleArray = [];

          //         for (let i = 0; i < oracleSearchArray.length; i++) {
          //           oracleArray.push(oracleSearchArray[i].innerHTML)
          //         }


          //         let reversedOracleArray = oracleArray.reverse();
          //         let randomIndex = Math.ceil(Math.random() * 5) + 1
          //         // console.log(randomIndex)
          //         let randomNode = node.filter(function (d) { return d.number === randomIndex })
          //         // console.log(randomNode)
          //         // console.log("randomNode above")

          //         let count = 1
          //         let actorIndex = 0
          //         let circleSizeIndex = 1
          //         let d = root._groups[0][0].__data__
          //         while (d) {
          //           // console.log(d)
          //           // console.log(d._groups[0][0].__data__)
          //           // console.log(this)
          //           // console.log(reversedOracleArray[count - 1])
          //           // console.log(count - 1)


          //           let thisD = d
          //           let currentNode = node.filter(function (d) { return d.number === thisD.number })
          //           // let currentNode = d
          //           // console.log(currentNode)
          //           let overlayText = (reversedOracleArray) => {
          //             currentNode.select("text")
          //               .attr("class", "node-text")
          //               .attr("value", reversedOracleArray[actorIndex])
          //               .text(reversedOracleArray[actorIndex])
          //               .style("font-size", 10)

          //               // updateForce()
          //             actorIndex++
          //             // console.log(currentNode.select("text"))
          //           }
          //           // debugger;
          //           // console.log(node.select("circle").filter(function (d) { console.log(d); return }))
          //           let updateCircle = (reversedOracleArray) => {
          //             // console.log(circleSizeIndex);
          //             if (circleSizeIndex % 2 === 0 && circleSizeIndex !== 0 ) {
          //               currentNode.select("circle").style("fill", "#EFA500")
          //                 .transition()
          //                 .duration(1000)
          //                 .attr("r", 10)
          //             } else {
          //               currentNode.select("circle").style("fill", "#F40058")
          //                 .transition()
          //                 .duration(1000)
          //                 .attr("r", 30)
          //             }
          //             circleSizeIndex++

          //             setTimeout(() => {overlayText(reversedOracleArray)}, 800)
          //           }

          //           let circleTime = count * 750
          //           let textTime = 200

          //           let promiseTimeout = (circleTime) => new Promise((udpateCircle, reject) => {
          //             setTimeout(() => {
          //               updateCircle(reversedOracleArray)
          //             }, circleTime)
          //           });



          //           promiseTimeout(circleTime)
          //           //.then(overlayText(), () => {console.log("rejected")})
          //           //.then()
          //           let currentLink; 
          //           if (d.number === 1) {
          //             setTimeout((d) => {
          //               currentLink = link.filter(function (d) { return d.target.number === randomIndex })
          //               currentLink
          //                 .transition()
          //                 .duration(1000)
          //                 .style("stroke", "#41B853")



          //             }, (900 * count))

          //           } else if (count >= reversedOracleArray.length) {
          //               break
          //           } else if (d.target != "null") {
          //             setTimeout((d) => {
          //               currentLink = link.filter(function (d) { return d.target.number === thisD.target })
          //               currentLink
          //                 .transition()
          //                 .duration(1000)
          //                 .style("stroke", "#41B853")


          //             }, (900 * count))

          //           }

          //           if (d.number === 1) {
          //             d = nodes[randomIndex - 1];
          //           } else {
          //             d = nodes[d.target - 1];
          //           }
          //           count++
          //       }

          //       }}, 1000)
          //     }


          //     function addNodePath() {
          //       setTimeout(() => {

          //       let oracleSearchArray = document.getElementsByClassName("result");

          //       let oracleArray = [];

          //         for (let i = 0; i < oracleSearchArray.length - 1; i++) {
          //           oracleArray.unshift(oracleSearchArray[i].innerHTML)
          //         }
          //       let nodeCount = nodes.length + 1
          //       let newNodes = [];
          //       for (let i = 0; i < oracleSearchArray.length - 1; i++) {
          //         let source;
          //         if (newNodes.length === 0) {
          //           source = 1
          //         } else {
          //           source = newNodes[newNodes.length - 1].number
          //         }
          //         nodes.push({ "number": nodeCount, "value": oracleArray[i], "target": nodeCount + 1, "source": source})
          //         newNodes.push({ "number": nodeCount, "value": oracleArray[i], "target": nodeCount + 1, "source": source})
          //         nodeCount++
          //       }
          //       let linkCount = links.length + 1
          //       let newLinks = []
          //       for (let i = 0; i < oracleSearchArray.length - 1; i++) {
          //         let source;
          //         let target = linkCount + 1
          //         if (newLinks.length === 0) {
          //           source = 0
          //         } else {
          //           source = linkCount
          //         }
          //         // console.log(source)
          //         links.push({"source": nodes[source], "target": nodes[target], "distance": 100, "index": links.length - 1})
          //         newLinks.push({"source": source, "target": target, "distance": 100})
          //         // console.log(newLinks)
          //         // debugger;
          //         linkCount++
          //       }

          //       // console.log(nodes)
          //       // console.log(links)


          //       // simulation.nodes(newNodes)
          //       //   .links(newLinks)
          //       //   .start()


          //         // let addedNode = svg.selectAll(".node")
          //         // addedNode.enter()
          //         //   .append("g")
          //         //   .attr("class", "node")

          //         // addedNode.append("circle")
          //         //   .attr("r", 30)
          //         //   .attr("fill", "red")
          //         //   .attr("id", function (d) { return d.number; })

          //         // addedNode.append("text")
          //         //   .attr("dx", -20)
          //         //   .attr("dy", -8)
          //         //   .text(function (d) { return d.value })


          //         // let addedLink = svg.append("g")
          //         //   .attr("class", "links")
          //         //   .selectAll("line")
          //         //   .data(newLinks)
          //         //   .enter().append("line")
          //         //   .attr("stroke-width", 3)
          //         //   .style("stroke", "red")


          //       let new_link_force = d3.forceLink(newLinks).distance(function (d) { return d.distance }).strength(1)

          //       // simulation
          //       //   .force("charge_force", d3.forceManyBody().strength(-200))
          //       //   .force("center_force", d3.forceCenter(width / 2, height / 2))
          //       //   .force("links", new_link_force);


          //       simulation.alpha(1).restart()

          //       }, 1000)
          //     }