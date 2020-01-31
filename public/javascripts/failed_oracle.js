class FailedOracle {
    constructor(container, response) {
        this.container = container;
        this.response = response;
    }


    render() {
        this.container.innerHTML += '<div>We did not find any matches, did you mean?</div>'
        for (let i = 0; i < this.response.data.matches.length; i++) {
            this.container.innerHTML += `<div><button class="failed-response-options">${this.response.data.matches[i]}</button></div>`
        }

        // this.addEventListeners()
    }
}

module.exports = FailedOracle;