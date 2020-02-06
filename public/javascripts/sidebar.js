class Sidebar {
    constructor(container) {
        this.container = container
    }

    render() {
        this.container.innerHTML = Sidebar.markup(this)
    }

    static markup() {
        return `
        <div class="sidebar">
            <div class="sidebar-contents">
                <h4>Directions</h4>
                <h6>Search any actor/actress and find their bacon number!</h6>
                <h6>A Bacon number is the number of links one actor/actress has with other actors/actresses untill a connection with Kevin Bacon is found.</h6>
                <h6>Since Kevin Bacon has so many connections the higher numbers are harder to find!</h6>
            </div>
        </div>
        `
    }
}

module.exports = Sidebar;