import React from 'react';
import { data } from './data';
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
  },
};

function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
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
            data.lanes.map((ele) => {
              return (
                <div className="w-1/5 ml-10 px-4 text-white rounded pt-2 pb-4 font-bold bg-blue-600">
                  {ele.title}

                  {ele.cards &&
                    ele.cards.map((card) => {
                      return (
                        <Card
                          title={card.title}
                          assignedTo={card.assignedTo}
                          due={card.due}
                        />
                      );
                    })}

                  <div
                    class="text-sm mt-2 px-2 bg-gray-100 rounded text-black"
                    onClick={() => setIsOpen(true)}
                  >
                    <div class="flex p-2 rounded mt-1 cursor-pointer hover:bg-grey-lighter">
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
        <div className="flex">
          <div className="font-bold">Add Task</div>
          <button onClick={() => setIsOpen(false)}>close</button>
        </div>
        <form>
          <input />
        </form>
      </Modal>
    </div>
  );
}

export default Home;
