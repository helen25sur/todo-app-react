import './app-header.scss';

const AppHeader = (props) => {
  return (
    <header
      className='app-header 
              d-flex justify-content-between align-items-center'>
      <h1>Todo List</h1>
      <h2>Notes:</h2>
      <span>{props.toDo} need to do, {props.done} done</span>
      <hr />
    </header>
  )
}

export default AppHeader;
