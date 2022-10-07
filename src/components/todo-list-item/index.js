import './todo-list-item.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { Component } from 'react';

export default class TodoListItem extends Component {

  constructor() {
    super();

    this.state = {
      // done: false,
      important: false
    }
  }

  // onLabelClick = () => {
  //   this.setState((state) => {
  //     return {
  //       done: !state.done
  //     }
  //   });
  // }

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    });
  }

  render() {
    const { label, done, onDeleted, onToggleDone } = this.props;

    const { important } = this.state;

    let classNames = !done ? 'todo-list-item' : 'todo-list-item done';
    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className='todo-list-item-label'
          onClick={onToggleDone}
        >
          {label}
        </span>
        <button type="button"
          onClick={this.onMarkImportant}
          className="btn btn-success btn-sm">
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button type="button"
          className="btn btn-danger btn-sm"
          onClick={onDeleted}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </span>
    )
  }
}
