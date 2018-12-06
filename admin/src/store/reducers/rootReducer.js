const initState = {
  donations: [
    {
      amount: 10,
      currency: "$",
      date: "05/12/2018",
      email: "jeremy@hotmail.com",
      name: "Jeremy Jonas",
      type: "one-time"
    },
    {
      amount: 22,
      currency: "$",
      date: "03/11/2018",
      email: "boyler@hotmail.com",
      name: "Susan Boyle",
      type: "one-time"
    },
    {
      amount: 300,
      currency: "$",
      date: "02/12/2018",
      email: "johnynsen@hotmail.com",
      name: "Johhny Mini",
      type: "recurring"
    }
  ],
  messages: []
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
