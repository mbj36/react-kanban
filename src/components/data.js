export const boardData = {
  lanes: [
    {
      id: 'planned',
      title: 'Planned',
      cards: [
        {
          id: 'Card1',
          title: 'Write Blog',
          description: 'Can AI make memes',
          due: '2020-12-30',
          assignedTo: 'James'
        },
        {
          id: 'Card2',
          title: 'Pay Rent',
          description: 'Transfer via NEFT',
          assignedTo: 'Jeny',
          due: '2020-12-20'
        },
        {
          id: 'Card3',
          title: 'Do Exercise',
          description: 'Transfer via NEFT',
          assignedTo: 'Jeny',
          due: '20/12/2020'
        },
      ],
    },
    {
      id: 'started',
      title: 'Started',
      cards: [],
    },
    {
      id: 'done',
      title: 'Done',
      cards: [],
    },
  ],
};
