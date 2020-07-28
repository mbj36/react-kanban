export const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned',
      cards: [
        {
          id: 'Card1',
          title: 'Write Blog',
          description: 'Can AI make memes',
          due: '30/12/2020',
          assignedTo: 'James'
        },
        {
          id: 'Card2',
          title: 'Pay Rent',
          description: 'Transfer via NEFT',
          assignedTo: 'Jeny',
          due: '20/12/2020'
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
      id: 'lane2',
      title: 'Started',
      cards: [],
    },
    {
      id: 'lane3',
      title: 'Done',
      label: '0/0',
      cards: [],
    },
  ],
};
