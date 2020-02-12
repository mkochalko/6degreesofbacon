class SuccessMovieSearch {

    constructor(container, response) {
        this.container = container;
        this.response = response;
    }


    render() {
        // console.log(this.response)
        this.container.innerHTML += `
            <div class="movie-info-container">
                <h3 id="1" value="${this.response.Title}" class="movie-info-item">Year: ${this.response.Year}</h3>
                <h3 id="2" value="${this.response.Title}" class="movie-info-item">Rated: ${this.response.Rated}</h3>
                <h3 id="3" value="${this.response.Title}" class="movie-info-item">Released: ${this.response.Released}</h3>
                <h3 id="4" value="${this.response.Title}" class="movie-info-item">Runtime: ${this.response.Runtime}</h3>
                <h3 id="5" value="${this.response.Title}" class="movie-info-item">IMDB Rating: ${this.response.imdbRating}</h3>
                <h3 id="6" value="${this.response.Title}" class="movie-info-item">Box Office Earnings: ${this.response.BoxOffice}</h3>
            </div>
        `
    }

    static markup() {
        return `
            <div class="movie-info-container">
                <h3>Year: ${this.response.Year}</h3>
                <h3>Rated: ${this.response.Rated}</h3>
                <h3>Released: ${this.response.Released}</h3>
                <h3>Runtime: ${this.response.Runtime}</h3>
                <h3>Director: ${this.response.Director}</h3>
            </div>
        `
    }
}

module.exports = SuccessMovieSearch;