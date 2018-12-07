const initState = [
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
];

const donationsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    default:
      return state;
  }
};

export default donationsReducer;
