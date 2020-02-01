const axios = require('axios');
const SuccessOracle = require('./sucess_oracle');
const FailedOracleContainer = require('./failed_oracle_container');

class Search {
    constructor(container) {
        this.container = container
    }
    
    render() {
        // console.log(this.container)
        this.container.innerHTML = Search.markup(this);
        // this.clickMeButton = this.container.querySelector('.search-oracle');
        this.addEventListeners();
    }

    static markup() {
        return `
            <h1 class="title">What's Their Bacon Number?</h1>
            <div class="search-header-container">
                <h3 class="search-header-container-item">Kevin Bacon</h3>
                <h4 class="search-header-container-item">to</h4>
                <input class="search-input search-header-container-item" list="actors" type="text">
                <button id="oracle-search" type="submit" class="search-oracle search-header-container-item">Submit</button>
            </div>
            <div class="oracle-response hidden"></div>
            <div class="failed-oracle-response-container"><div class="failed-oracle-header"></div><div class="failed-oracle-response"></div></div>
            <div class="d3-node-map"></div>
        `
    }

    addEventListeners() {
        let button = this.container.querySelector('.search-oracle');
        button.addEventListener("click", () => {
            this.container.querySelector('.oracle-response').innerHTML = ''
            let search = this.container.querySelector('.search-input').value;
            let configuredSearch = search.split(" ").join("+");
            axios.get(`/search?string=${configuredSearch}`)
                .then((response) => {
                    if (response.data.status === 'success') {
                        new SuccessOracle(this.container.querySelector('.oracle-response'), response).render();
                    } else if (response.data.status === 'spellcheck') {
                        new FailedOracleContainer(this.container.querySelector('.failed-oracle-response-container'), response).render();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        )


        
        
        let failedSearchButton = this.container.querySelector(".failed-oracle-response");
        // console.log(failedSearchButton)
        failedSearchButton.addEventListener("click", (e) => {
            this.container.querySelector('.oracle-response').innerHTML = ''
            this.container.querySelector('.failed-oracle-response-container').innerHTML = ''
            this.container.querySelector('.search-input').value = e.target.innerText

            document.getElementById("oracle-search").click();
            // let search = e.target.innerText;
            // let configuredSearch = search.split(" ").join("+");
            // axios.get(`/search?string=${configuredSearch}`)
            //     .then((response) => {
            //         if (response.data.status === 'success') {
            //             new SuccessOracle(this.container.querySelector('.oracle-response'), response).render();
            //         } else if (response.data.status === 'spellcheck') {
            //             new FailedOracleContainer(this.container.querySelector('.failed-oracle-response-container'), response).render();
            //         }
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
            }
        )
    }

}

module.exports = Search;