export default class Movie {
  API_KEY = 'acea4942791de97028b001be419cd452';
  BASE_URL = `https://api.themoviedb.org/3`;
  async get(url) {
    const response = await fetch(`${url}&lang=EN_US`);
    const { results } = await response.json();

    return results;
  }
  getPopularMovies() {
    return this.get(`${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}`);
  }
  getMovies(term) {
    return this.get(`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${term}`);
  }
}
