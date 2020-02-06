let nodes = [
    {"number": 1, "value": "Kevin Bacon", "target": "null", "source": "null"}
]

let links = [];

const simulation = d3.forceSimulation()
    .nodes(nodes);


let link_force = d3.forceLink(links).distance(function (d) {return 5 }).strength(1)

simulation
    .force("charge_force", d3.forceManyBody().strength(-150))
    .force("center_force", d3.forceCenter(width / 2, height / 3))
    .force("collision", d3.forceCollide().radius(20))
    .force("links", link_force)

let button;
document.addEventListener("DOMContentLoaded", () => {
    submitButton = document.getElementById("oracle-search")
    submitButton.addEventListener("click", updateNode)
})

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
        .on("click", click)

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