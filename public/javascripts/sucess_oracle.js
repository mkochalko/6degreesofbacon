
class SuccessOracle {

    constructor(container, response) {
        this.container = container;
        this.response = response;
    }


    render() {
        for(let i = 0; i < this.response.data.link.length; i++) {
            this.container.innerHTML += `<div>${this.response.data.link[i]}</div>`
        }   
    }
}

module.exports = SuccessOracle;