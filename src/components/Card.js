import React from 'react';

function Card(props) {
  return (
    <div draggable onDragStart={props.onDragStart} onDrop={props.onDrop} onClick={() => props.onClick()} className="text-sm mt-2 px-2 bg-gray-100 rounded text-black">
      <div className="p-2 rounded mt-1 cursor-pointer hover:bg-grey-lighter">
        {props.title}

        <div className="py-2">Due - {props.due}</div>

        <div className="text-right py-2">Members - {props.assignedTo}</div>
      </div>
    </div>
  );
}

export default Card;
