class FailedOracle {
    constructor(container, response) {
        this.container = container;
        this.response = response;
    }


    render() {
        for (let i = 0; i < this.response.data.matches.length; i++) {
            this.container.innerHTML += `<button class="failed-response-options">${this.response.data.matches[i]}</button>`
        }

        // this.addEventListeners()
    }
}

module.exports = FailedOracle;