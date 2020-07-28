import React, { useState } from 'react';
import { boardData } from './data';
import Card from './Card';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
  },
};

Modal.setAppElement('#root');

function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [data, setData] = useState(boardData.lanes);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [taskState, setTaskState] = useState('planned');
  const [assignedTo, setAssignedTo] = useState('jeny');

  const addTask = (e) => {
    e.preventDefault();
    const constructedStructure = {
      id: 'Card1',
      title,
      description,
      assignedTo,
      due: date,
    };

    let newData = [...data];

    if (newData.filter((ele) => ele.id === taskState)) {
      newData
        .filter((ele) => ele.id === taskState)[0]
        .cards.push(constructedStructure);
    }

    setData(newData);

    setTitle('');
    setDescription('');
    setDate('');
    setIsOpen(false);
  };

  const editTask = (title, assignedTo, due, taskState, description) => {
    setTitle(title);
    setDescription(description);
    setAssignedTo(assignedTo);
    setDate(due);
    setTaskState(taskState);
    setIsOpen(true);

    // const constructedStructure = {
    //   id: 'Card1',
    //   title,
    //   description,
    //   assignedTo,
    //   due: date,
    // };

    // let newData = [...data];

    // if (newData.filter((ele) => ele.id === taskState)) {
    //   newData
    //     .filter((ele) => ele.id === taskState)[0]
    //     .cards.push(constructedStructure);
    // }

    // setData(newData);

    // setTitle('');
    // setDescription('');
    // setDate('');
    // setTaskState('');
    // setAssignedTo('');
    // setIsOpen(false);
  };

  //   console.log(data);
  return (
    <div>
      <div className="flex mb-4">
        <div className="w-full bg-blue-600 h-12 text-center p-3 text-white font-bold">
          ClearTax Board
        </div>
      </div>
      <h3 className="pl-5 font-bold text-center">Task Board</h3>
      <div className="px-4 pt-10">
        <div className="flex flex-wrap justify-center -mx-2">
          {data &&
            data.map((ele, index) => {
              return (
                <div
                  key={index}
                  className="w-1/5 ml-10 px-4 text-white rounded pt-2 pb-4 font-bold bg-blue-600"
                >
                  {ele.title}

                  {ele.cards &&
                    ele.cards.map((card, index) => {
                      return (
                        <Card
                          key={index}
                          title={card.title}
                          assignedTo={card.assignedTo}
                          due={card.due}
                          onClick={() =>
                            editTask(
                              card.title,
                              card.assignedTo,
                              card.due,
                              ele.title,
                              card.description
                            )
                          }
                          onDrop={() => {
                            console.log('Drag done');
                          }}
                          onDragStart={(e) => console.log('Drag Start')}
                        />
                      );
                    })}

                  <div
                    className="text-sm mt-2 px-2 bg-gray-100 rounded text-black"
                    onClick={() => {
                      setIsOpen(true);
                      setTitle('');
                      setDescription('');
                      setDate('');
                    }}
                  >
                    <div className="flex p-2 rounded mt-1 cursor-pointer hover:bg-grey-lighter">
                      <svg
                        height="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
                      </svg>

                      <p className="px-2">Add Task</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className="flex justify-between m-4">
          <div className="font-bold text-lg">Task</div>
          <button onClick={() => setIsOpen(false)}>
            <svg
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z" />
            </svg>
          </button>
        </div>
        <form className="m-4">
          <input
            className="mt-3 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
          />

          <textarea
            className="mt-3 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            row={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
          />

          <input
            className="mt-3 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Due Date"
          />

          <select
            className="mt-3 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            name="state"
            onChange={(e) => setTaskState(e.target.value)}
            value={taskState}
            id="state"
          >
            <option value="planned">Planned</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
          </select>

          <select
            className="mt-3 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            name="state"
            onChange={(e) => setAssignedTo(e.target.value)}
            value={assignedTo}
            id="assigned"
          >
            <option value="james">James</option>
            <option value="jeny">Jeny</option>
          </select>

          <div className="text-center mt-2">
            <button
              onClick={(e) => addTask(e)}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Home;
