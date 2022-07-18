import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdOutlineImageSearch } from 'react-icons/md';
import {
  SearchHeader,
  SearchForm,
  SearchFormInput,
  SearchButton,
} from './SearchBar.styled';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      toast.warn('Please specify your query!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <MdOutlineImageSearch style={{ width: 30, height: 30 }} />
          </SearchButton>

          <SearchFormInput
            type="text"
            name="query"
            value={query}
            onChange={this.handleChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

export default SearchBar;
