import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onMovieSearch = this.onMovieSearch.bind(this);
  }

  onMovieSearch(event) {
    const value = event.target.value;

    this.setState({
      term: value
    });
    this.props.movieSearch(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={this.onMovieSearch}
          value={this.state.term}
          placeholder="Search for a movie"
        />
      </div>
    );
  }
};
SearchBar.propTypes = {
  movieSearch: PropTypes.func.isRequired
}

export default SearchBar;
