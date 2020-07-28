import React from 'react';

function Card(props) {
  return (
    <div class="text-sm mt-2 px-2 bg-gray-100 rounded text-black">
      <div class="p-2 rounded mt-1 cursor-pointer hover:bg-grey-lighter">
        {props.title}

        <div class="py-2">Due - {props.due}</div>

        <div class="text-right py-2">Members - {props.assignedTo}</div>
      </div>
    </div>
  );
}

export default Card;
