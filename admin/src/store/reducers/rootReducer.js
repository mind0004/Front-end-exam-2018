const initState = {
  donations: [
    {
      id: 1,
      amount: 10,
      currency: "$",
      date: "05/12/2018",
      email: "jeremy@hotmail.com",
      name: "Jeremy Jonas",
      type: "one-time"
    },
    {
      id: 2,
      amount: 22,
      currency: "$",
      date: "03/11/2018",
      email: "boyler@hotmail.com",
      name: "Susan Boyle",
      type: "one-time"
    },
    {
      id: 3,
      amount: 300,
      currency: "$",
      date: "02/12/2018",
      email: "johnynsen@hotmail.com",
      name: "Johhny Mini",
      type: "recurring"
    }
  ],

  messages: [
    {
      id: 4,
      date: "02/12/2018",
      email: "boyler@hotmail.com",
      institute: "KEA",
      message: "Hej med jer",
      name: "Susan boyle"
    },
    {
      id: 5,
      date: "02/12/2018",
      email: "boyler@hotmail.com",
      institute: "KEA",
      message: "Hej med jer",
      name: "Susan boyle"
    },
    {
      id: 6,
      date: "02/12/2018",
      email: "boyler@hotmail.com",
      institute: "KEA",
      message: "Hej med jer",
      name: "Susan boyle"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
