const initState = [
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
];

const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    default:
      return state;
  }
};

export default messagesReducer;
