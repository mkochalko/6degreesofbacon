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
        <div class="modal-footer-links">
            <div id="directions" >Directions</div>
            <div id="contact-me" >Contact Me</div>
        </div>
        <section id="footer-modal" class="footer hidden">
            <div class="footer-modal-screen"></div>
            <div class="footer-modal-content">
                <div class="footer-container"
                    <div class="footer-modal-information">
                        <h4>Contact me</h4>
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
                    <span class="footer-close-modal">X</span>
                </div>
            </div>
        </section>
        <section id="modal" class="sidebar hidden">
            <div class="modal-screen"></div>
            <div class="modal-content">
                <div class="sidebar-contents">
                    <div class="directions-container">
                        <h2>Directions</h2>
                        <h6>- Search for any actor/actress and find their bacon number!</h6>
                        <h6>- Once a search is complete, click on the movie node to find out information about the movie</h6>
                        <h6>- Keep searching to build out a tree of connections</h6>
                        <h6>- A Bacon number is the number of links one actor/actress has with other actors/actresses untill a connection with Kevin Bacon is found.</h6>
                        <h6>- Higher numbers are harder to find!</h6>
                    </div>
                    <span class="close-modal">X</span>
                </div>
                
            </div>
        </section>
        `
    }

    addEventListeners() {
        let directions = this.container.querySelector("#directions")
        directions.addEventListener("click", (e) => {
            let modal = this.container.querySelector('#modal');
            modal.classList.remove('hidden')
        })

        let closeModal = this.container.querySelector(".close-modal")
        closeModal.addEventListener("click", (e) => {
            let modal = this.container.querySelector('#modal');
            modal.classList.add('hidden')
        })

        let contact = this.container.querySelector("#contact-me")
        contact.addEventListener("click", (e) => {
            let modal = this.container.querySelector('#footer-modal');
            modal.classList.remove('hidden')
        })

        let closeFooterModal = this.container.querySelector(".footer-close-modal")
        closeFooterModal.addEventListener("click", (e) => {
            let modal = this.container.querySelector('#footer-modal');
            modal.classList.add('hidden')
        })
    }
}

module.exports = Sidebar;