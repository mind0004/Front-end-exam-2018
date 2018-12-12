const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
admin.firestore().settings({ timestampsInSnapshots: true });

//Get week and month
const now = new Date();
const currentMonth = now.getMonth() + 1; //january = 0
const currentYear = now.getFullYear();

function getWeekNumber() {
  let now = new Date();
  let onejan = new Date(now.getFullYear(), 0, 1);
  return Math.ceil(((now - onejan) / 86400000 + onejan.getDay() + 1) / 7);
}
const currentWeek = getWeekNumber(); //get week number, e.g. 50

const updateOverview = (oldData, newDonation) => {
  const amount = Number(newDonation.amount);

  //Calculate donations by month
  let donationsByMonth;
  const calculateDonationsByMonth = () => {
    donationsByMonth = oldData.donationsByMonth.slice(0);
    const doesCurrentDonationsByMonthExist = oldData.donationsByMonth.some(
      a => a.month === currentMonth - 1 + "/" + currentYear
    );

    if (doesCurrentDonationsByMonthExist) {
      donationsByMonth[donationsByMonth.length - 1].amount =
        donationsByMonth[donationsByMonth.length - 1].amount + amount;
    } else {
      donationsByMonth.shift();
      donationsByMonth.push({
        amount: amount,
        month: currentMonth - 1 + "/" + currentYear
      });
    }
  };
  calculateDonationsByMonth();
  console.log(donationsByMonth);

  //Calculate inTotal
  let inTotal = oldData.inTotal + amount;

  //Calculate thisMonth
  let thisMonth;
  const calculateThisMonth = () => {
    if (oldData.currentMonth === currentMonth) {
      thisMonth = oldData.thisMonth + amount;
    } else {
      thisMonth = amount;
    }
  };
  calculateThisMonth();

  //Calculate thisWeek
  let thisWeek;
  const calculateThisWeek = () => {
    if (oldData.currentWeek === currentWeek) {
      thisWeek = oldData.thisWeek + amount;
    } else {
      thisWeek = amount;
    }
  };
  calculateThisMonth();

  let newOverview = {
    currency: "$",
    donationsByMonth: donationsByMonth,
    currentMonth: currentMonth,
    currentWeek: currentWeek,
    donationsByType: { monthly: 2012, oneTime: 14288, yearly: 982 },
    inTotal: inTotal,
    thisMonth: thisMonth,
    thisWeek: thisWeek,
    topDonors: [
      { amount: "390", name: "Berto Robert" },
      { amount: "230", name: "Alex Kenny" },
      { amount: "210", name: "Jeremy Johhny" },
      { amount: "190", name: "Susan Boyle" },
      { amount: "130", name: "Cleorge Gooney" },
      { amount: "110", name: "Jindaugas Mukna" }
    ]
  };

  console.log("NEW OVER: ");
  console.log(newOverview);

  return admin
    .firestore()
    .collection("overview")
    .doc("all")
    .update(newOverview)
    .then(doc => console.log("Overview updated!"));
};

exports.updateOverview = functions.firestore
  .document("donations/{donationsId}")
  .onCreate(doc => {
    console.log(doc.data());

    const newDonation = doc.data();
    let oldData = {};
    //Save old data to update
    admin
      .firestore()
      .collection("overview")
      .get()
      .then(function(querySnapshot) {
        console.log("QUEEERYYY: ");
        console.log(querySnapshot);
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          oldData = doc.data();
          console.log("OLD OVER: ");
          console.log(oldData);
          updateOverview(oldData, newDonation);
        });
      });
  });
