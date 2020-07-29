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
          assignedTo: 'james',
        },
        {
          id: 'Card2',
          title: 'Pay Rent',
          description: 'Transfer via NEFT',
          assignedTo: 'jeny',
          due: '2020-12-20',
        },
      ],
    },
    {
      id: 'started',
      title: 'Started',
      cards: [
        {
          id: 'Card3',
          title: 'Do Exercise',
          description: '100 squats',
          assignedTo: 'jeny',
          due: '2020-12-20',
        },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      cards: [],
    },
  ],
};
