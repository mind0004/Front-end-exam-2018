const initState = {
  currency: "$",
  inTotal: 28000,
  thisMonth: 122,
  thisWeek: 12.5,

  donationsByMonth: [
    {
      month: "03/2018",
      amount: 5000
    },
    {
      month: "04/2018",
      amount: 3900
    },
    {
      month: "05/2018",
      amount: 2500
    },
    {
      month: "06/2018",
      amount: 2300
    },
    {
      month: "07/2018",
      amount: 1200
    },
    {
      month: "08/2018",
      amount: 600
    },
    {
      month: "09/2018",
      amount: 1980
    },
    {
      month: "10/2018",
      amount: 8000
    },
    {
      month: "11/2018",
      amount: 3700
    }
  ],

  donationsByType: {
    monthly: 50,
    oneTime: 14288,
    yearly: 29
  },
  topDonors: [
    {
      amount: 390,
      name: "Berto Robert"
    },
    {
      amount: 230,
      name: "Alex Kenny"
    },
    {
      amount: 210,
      name: "Jeremy Johhny"
    },
    {
      amount: 190,
      name: "Susan Boyle"
    },
    {
      amount: 130,
      name: "Cleorge Gooney"
    },
    {
      amount: 110,
      name: "Jindaugas Mukna"
    }
  ]
};

const overviewReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    default:
      return state;
  }
};

export default overviewReducer;
