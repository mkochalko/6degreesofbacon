const FailedOracle = require('./failed_oracle');
const FailedOracleHeader = require('./failed_oracle_header');


class FailedOracleContainer {
    constructor(container, response) {
        this.container = container;
        this.response = response;
    }


    render() {
        new FailedOracleHeader(this.container.querySelector('.failed-oracle-header')).render();
        new FailedOracle(this.container.querySelector('.failed-oracle-response'), this.response).render();
    }
}

module.exports = FailedOracleContainer;