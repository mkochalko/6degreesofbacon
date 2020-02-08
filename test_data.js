let nodes = [
    {"number": 1, "value": "Kevin Bacon", "target": "null", "source": "null"}
]

let links = [];

const simulation = d3.forceSimulation()
    .nodes(nodes)
    .force('link', d3.forceLink(links).distance(10))


let link_force = d3.forceLink(links).distance(function (d) {return 5 }).strength(1)

simulation
    .force("charge_force", d3.forceManyBody().strength(-150))
    .force("center_force", d3.forceCenter(width / 2, height / 3))
    .force("collision", d3.forceCollide().radius(20))
    .force("links", link_force)

let button;
document.addEventListener("DOMContentLoaded", () => {
    submitButton = document.getElementById("oracle-search")
    submitButton.addEventListener("click", addPath)
})

simulation.on("tick", tickActions);

var link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("stroke-width", 3)
    .style("stroke", "#43BEE5")

var node = svg.selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("width", 20)

node.append("circle")
    .attr("r", 6)
    .attr("fill", "#F40058")
    .attr("id", function(d){return d.number;})
    .on("click", click)

node.append("text")
    .attr("value", "")
    .text(function (d) { return d.value })

function tickActions() {
    // console.log(node.select("circle"))
    node.select("circle")
    .attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; });

    node.select("text")
    .attr("x", function (d) { return d.x; })
    .attr("y", function (d) { return d.y; });

    link
    .attr("x1", function (d) { return d.source.x; })
    .attr("y1", function (d) { return d.source.y; })
    .attr("x2", function (d) { return d.target.x; })
    .attr("y2", function (d) { return d.target.y; });
} 

function updateNode() {
    let link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", 3)
        .style("stroke", "#43BEE5")

    let node = svg.selectAll(".node")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("width", 20)

    node.append("circle")
        .attr("r", 6)
        .attr("fill", "#F40058")
        .attr("id", function (d) { return d.number; })
        .on("click", "click")

    node.append("text")
        .attr("value", "")
        .text(function (d) { return d.value })

    link_force = d3.forceLink(links).distance(function (d) { return 5 }).strength(1)

    simulation
        .force("charge_force", d3.forceManyBody().strength(-150))
        .force("center_force", d3.forceCenter(width / 2, height / 3))
        .force("collision", d3.forceCollide().radius(20))
        .force("links", link_force)

    simulation.alpha(1).restart()

}

function nextNode() {
    let nodeNumber = nodes.length + 1
    let newNode;
    if (nodes.length === 1) {
        newNode = { "number": 2, "value": nodeNumber, "target": "null", "source": 1}
    } else {
        newNode = { "number": nodeNumber, "value": nodeNumber, "target": "null", "source": nodes[nodeNumber - 2]}
    }

    nodes.push(newNode);
}

function nextLink() {
    let newLink;
    let lastNode = nodes.length
    if (nodes.length === 2) {
        newLink = { "source": 0, "target": 1, "distance": 5 }
    } else {
        newLink = { "source": nodes[lastNode - 1], "target": nodes[lastNode], "distance": 5 }
    }

    links.push(newLink);
}

function addPath() {
    nextNode();
    nextLink();
    console.log(nodes)
    console.log(links)
}