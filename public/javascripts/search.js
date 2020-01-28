const axios = require('axios');
const SuccessOracle = require('./sucess_oracle');
const FailedOracle = require('./failed_oracle');

class Search {
    constructor(container) {
        this.container = container
        this.render()
    }
    
    render() {
        // console.log(this.container)
        this.container.innerHTML = Search.markup(this);
        // this.clickMeButton = this.container.querySelector('.search-oracle');

        this.addEventListeners();
    }

    static markup() {
        return `
            <h3>Kevin Bacon</h3>
            <h4>to</h4>
            <input class="search-input" list="actors" type="text">
            <button type="submit" class="search-oracle">Submit</button>
            <div class="oracle-response"></div>
        `
    }

    addEventListeners() {
        let button = this.container.querySelector('.search-oracle');
        button.addEventListener("click", () => {
            let search = this.container.querySelector('.search-input').value;
            let configuredSearch = search.split(" ").join("+");
            axios.get(`/search?string=${configuredSearch}`)
                .then((response) => {
                    if (response.data.status === 'success') {
                        new SuccessOracle(this.container.querySelector('.oracle-response'), response).render();
                    } else if (response.data.status === 'spellcheck') {
                        new FailedOracle(this.container.querySelector('.oracle-response'), response).render();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        )
        
        
        let failedSearchButton = this.container.querySelector(".oracle-response");
        // console.log(failedSearchButton)
        failedSearchButton.addEventListener("click", (e) => {
            this.container.querySelector('.oracle-response').innerHTML = ""
            this.container.querySelector('.search-input').value = e.target.innerText
            let search = e.target.innerText;
            let configuredSearch = search.split(" ").join("+");
            axios.get(`/search?string=${configuredSearch}`)
                .then((response) => {
                    if (response.data.status === 'success') {
                        new SuccessOracle(this.container.querySelector('.oracle-response'), response).render();
                    } else if (response.data.status === 'spellcheck') {
                        new FailedOracle(this.container.querySelector('.oracle-response'), response).render();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        )
    }

}

module.exports = Search;