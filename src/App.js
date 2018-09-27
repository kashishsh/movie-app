import _ from 'lodash';

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import Movies from './services/Movies';

import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.Movies = new Movies();
    this.state = {
      movies: []
    };
  }
  async showPopularMovies() {
    const movies = await this.Movies.getPopularMovies();

    this.setState(prevState => {
      return {
        movies
      }
    });
  }
  componentDidMount() {
    this.showPopularMovies();
  }
  async movieSearch(term) {
    if(!term) {
      this.showPopularMovies();

      return;
    }

    const movies = await this.Movies.getMovies(term);

    this.setState(prevState => {
      return {
        movies
      }
    });
  }
  render() {
    const movieSearch = _.debounce(term => { this.movieSearch(term) }, 300);

    return (
      <div>
        <h1 className="heading">Movies App</h1>
        <SearchBar movieSearch={movieSearch} />
        <MovieList
          movies={this.state.movies}
        />
      </div>
    );
  }
}
