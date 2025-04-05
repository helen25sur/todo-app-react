import { Component } from 'react';

import './item-status-filter.scss';

export default class ItemStatusFilter extends Component {

  state = {
    status: 'all'
  }

  onChangeStatus = (status) => {
    this.setState({
      status
    });
    this.props.filterItems(status);
  }

  render() {

    return (
      <div className='btn-group' role='group'>
        <button type='button'
          className={this.state.status === 'all' ? 'btn btn-warning' : 'btn btn-outline-warning'}
          onClick={() => this.onChangeStatus('all')}>
          All
        </button>
        <button type='button'
          className={this.state.status === 'active' ? 'btn btn-warning' : 'btn btn-outline-warning'}
          onClick={() => this.onChangeStatus('active')}>
          Active
        </button>
        <button type='button'
          className={this.state.status === 'done' ? 'btn btn-warning' : 'btn btn-outline-warning'}
          onClick={() => this.onChangeStatus('done')}>
          Done
        </button>
      </div>
    )

  }
}