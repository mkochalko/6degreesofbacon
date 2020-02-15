class Sidebar {
    constructor(container) {
        this.container = container
    }

    render() {
        this.container.innerHTML = Sidebar.markup(this)

        this.addEventListeners();
    }

    static markup() {
        return `
        <div id="directions" >Directions</div>
        <section id="modal" class="sidebar hidden">
            <div class="modal-screen"></div>
            <div class="modal-content">
                <div class="sidebar-contents">
                    <h4>Directions:</h4>
                    <h6>- Search any actor/actress and find their bacon number!</h6>
                    <h6>- A Bacon number is the number of links one actor/actress has with other actors/actresses untill a connection with Kevin Bacon is found.</h6>
                    <h6>- Higher numbers are harder to find!</h6>
                    <h6>- Keep searching to build out a tree of connections</h6>
                </div>
                <div class="footer-container">
                    <h4>Contact me</h4><br>
                    <div class="footer-links-container">
                        <div class="footer-section-container">
                            <a href="https://www.linkedin.com/in/mkochalko/" target="_blank"><img src="/javascripts/images/LinkedIn_logo_initials.png" alt="LinkedIn"></a>
                        </div>
                        <div class="footer-section-container">
                            <a href="https://github.com/mkochalko/6degreesofbacon" target="_blank"><img src="/javascripts/images/github.png" alt="GitHub"></a>
                        </div>
                        <div class="footer-section-container">
                            <a href="https://angel.co/matthew-kochalko" target="_blank"><img src="/javascripts/images/angellist.png" alt="AngleList"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `
    }

    addEventListeners() {
        let directions = this.container.querySelector("#directions")
        console.log(directions)
        directions.addEventListener("click", (e) => {
            let modal = this.container.querySelector('#modal');
            modal.classList.remove('hidden')
        })
    }
}

module.exports = Sidebar;