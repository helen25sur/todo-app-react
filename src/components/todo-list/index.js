import './todo-list.scss';
import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, onDeletedMain, onToggleDone }) => {

  const elements = todos.map((item) => {
    return (
      <li key={item.id} className='list-group-item'>
        <TodoListItem
          label={item.label}
          done={item.done}
          onDeleted={() => onDeletedMain(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
        />
      </li>
    )
  });

  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  )
}

export default TodoList;
