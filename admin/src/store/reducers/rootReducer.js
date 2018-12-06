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
  ],
  overview: {
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
  }
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
