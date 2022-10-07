import { Component } from 'react';
import './panel-add-item.scss';

export default class PanelAddItem extends Component {

  state = {
    label: ''
  }

  onLabelChange = (event) => { // функція отримує об'єкт event
    this.setState({
      label: event.target.value // в стан компоненту записуємо значення,
      // яке записується в інпуті
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onAddedItem(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {
    // const { onAddedItem } = this.props;
    return (
      <form
        className='d-flex mt-3 panel-add-item'
        onSubmit={this.onSubmitForm}>
        <input
          className='form-control panel-add-item-input'
          type='text'
          placeholder='Write your task'
          aria-label='add task'
          onChange={this.onLabelChange}
          value={this.state.label} />
        <button type='submit'
          // onClick={() => onAddedItem('something')}
          className='btn btn-warning ms-2'>Add</button>
      </form>
    )
  }
}