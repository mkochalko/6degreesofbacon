

class FailedOracleHeader {
    constructor(container) {
        this.container = container;
    }


    render() {
        this.container.innerHTML += 'We did not find any matches, did you mean?'
    }
}

module.exports = FailedOracleHeader;