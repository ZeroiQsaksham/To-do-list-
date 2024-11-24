import React from 'react';

function Todolist(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          className="fa-solid fa-trash icon-delete"
          onClick={() => {
            props.deleteItem(props.index); // Call delete function
          }}
        ></i>
      </span>
    </li>
  );
}

export default Todolist;
