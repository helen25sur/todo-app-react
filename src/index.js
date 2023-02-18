import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import AppHeader from './components/app-header';
import SearchBar from './components/search-bar';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import PanelAddItem from './components/panel-add-item';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends Component {

  state = {
    todoData: [
      { label: 'Do something', important: false, id: 1, done: false },
      { label: 'Just do it!', important: true, id: 2, done: false },
      { label: 'Sleep... zzzz', important: false, id: 3, done: false }
    ],
    term: '',
    status: 'all'
  }

  deleteItem = (id) => {
    this.setState((state) => {
      const nState = state.todoData.filter((el) => el.id !== id);
      return { todoData: nState }
    });
  }

  // addItem = (text) => {
  //   const item = { // створимо об'єкт, 
  //     label: text, // додамо текст, який отримуємо
  //     important: false, // назначаємо важливість
  //     done: false
  //   };
  //   // const prevId = this.state.todoData[this.state.todoData.length - 1].id;
  //   // const id = prevId + 1;
  //   // item.id = id;
  //   // const nState = [...this.state.todoData, item];
  //   // console.log(nState);
  //   // this.setState({
  //   //   todoData: nState
  //   // });

  //   this.setState((state) => { // для зміни стану, передаємо ф-цію
  //     const todoData = state.todoData; // для зручності, змінна масиву
  //     // збережемо останній існуючий ідентифікатор
  //     const prevId = todoData[todoData.length - 1].id;

  //     const id = prevId + 1; // збільшимо 
  //     item.id = id; // додамо властивістю в новий об'єкт

  //     const nState = [...todoData]; // копіюємо масив в нову змінну
  //     nState.push(item); // додаємо новий об'єкт
  //     console.log(nState);
  //     return { todoData: nState } // повертаємо
  //   })
  // }

  addItem = (text) => {
    const item = {
      label: text,
      important: false
    }

    this.setState(({ todoData }) => {
      const prevId = todoData[todoData.length - 1].id
      const id = prevId + 1
      item.id = id
      const newState = [...todoData]
      newState.push(item)
      console.log(newState);
      return { todoData: newState }
    })

  }

  onToggleDone = (id) => {
    const nArr = [...this.state.todoData];
    nArr.map((el) => {
      if (el.id === id) el.done = !el.done;
      return el;
    });
    this.setState({
      todoData: nArr
    })
  }

  saveTerm = (text) => {
    this.setState({
      term: text
    });
  }

  search = (term) => {
    console.log(term);
    term = term.toLowerCase();
    const nArr = [...this.state.todoData];
    console.log('102', nArr);
    console.log('103', nArr.filter(el => el.label.toLowerCase().includes(term)));
    return nArr.filter(el => el.label.toLowerCase().includes(term));
    // items.filter(item => item.label.toLowerCase().includes(term.toLowerCase()));
  }

  saveFilterStatus = (nStatus) => {
    console.log('filter', nStatus);
    this.setState({
      status: nStatus
    });

  }

  filterItems = (status, items) => {
    if (status === 'active') {
      return [...items].filter(el => !el.done);
    } else if (status === 'done') {
      return [...items].filter(el => el.done);
    }
    return [...items];
  }

  render() {
    const countDone = this.state.todoData.filter(el => el.done).length;
    const countTodo = this.state.todoData.length - countDone;

    let visibleItems = this.search(this.state.term);
    console.log(visibleItems);
    visibleItems = this.filterItems(this.state.status, visibleItems);
    return (
      <div className='container todo-app'>
        <AppHeader toDo={countTodo} done={countDone} />
        <div className='d-flex mb-3 top-panel'>
          <SearchBar
            searchItems={this.saveTerm} />
          <ItemStatusFilter
            filterItems={this.saveFilterStatus} />
        </div>
        <TodoList
          todos={visibleItems}
          onDeletedMain={this.deleteItem}
          onToggleDone={this.onToggleDone} />
        <PanelAddItem
          onAddedItem={this.addItem}
        />
      </div>
    )
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

