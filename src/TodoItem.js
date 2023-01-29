import './TodoItem.css';

function TodoItem(props) {

  const onComplete = (msg) => {
    alert(msg)
  }
  const onDelete = (msg) => {
    alert(msg)
  }
  return (
    <li className="TodoItem">
      <span
        onClick={() => onComplete('ya completaste el Todo ' + props.text)}
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        onClick={() => onDelete('ya borraste el Todo ' + props.text)}
        className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };