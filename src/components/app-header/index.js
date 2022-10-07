const AppHeader = (props) => {
  return (
    <header
      className='app-header 
              d-flex justify-content-between align-items-center'>
      <h1>Todo List</h1>
      <span>{props.toDo} need to do, {props.done} done</span>
    </header>
  )
}

export default AppHeader;
