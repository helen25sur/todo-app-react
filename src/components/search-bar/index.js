import { Component } from 'react';
import './search-bar.scss';

export default class SearchBar extends Component {

  state = {
    label: ''
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
    this.props.searchItems(event.target.value);
  }

  render() {

    return (
      <input
        type='text'
        className='form-control search-bar'
        placeholder='Search'
        onChange={this.onLabelChange}
        value={this.state.label} />
    )
  }
}


