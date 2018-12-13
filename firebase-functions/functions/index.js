const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
admin.firestore().settings({ timestampsInSnapshots: true });

//Get week and month
const now = new Date();

function getWeekNumber() {
  let now = new Date();
  let onejan = new Date(now.getFullYear(), 0, 1);
  return Math.ceil(((now - onejan) / 86400000 + onejan.getDay() + 1) / 7);
}
const currentWeek = getWeekNumber(); //get week number, e.g. 50
const currentMonth = now.getMonth() + 1; //january = 0
const currentYear = now.getFullYear();

//######################################################
//######################################################
//######################################################

//Update Overview
const handleOverview = donation => {
  const amount = Number(donation.amount);

  let thisMonth,
    thisWeek,
    inTotal,
    topDonors,
    donationsByType,
    donationsByMonth;

  return new Promise(function(resolve, reject) {
    //Get overview
    return admin
      .firestore()
      .collection("overview")
      .doc("all")
      .onSnapshot(doc => {
        const overview = doc.data();
        setTimeout(() => {
          resolve(overview);
        }, 1000);
      });
  })
    .then(function(overview) {
      console.log("v.15");
      console.log("OLD OVERVIEW: ", overview);
      //resolve(overview);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(overview);
        }, 1000);
      });
    })
    .then(function(overview) {
      //Calculate new overview

      //inTotal
      inTotal = overview.inTotal + amount;
      overview.inTotal = inTotal;

      //thisMonth
      thisMonth = updateThisMonth(overview, amount);
      overview.thisMonth = thisMonth;

      //thisWeek
      thisWeek = updateThisWeek(overview, amount);
      overview.thisWeek = thisWeek;

      //donationsByMonth
      donationsByMonth = updateDonationsByMonth(overview, amount);
      overview.donationsByMonth = donationsByMonth;

      //Current month and week
      overview.currentMonth = currentMonth;
      overview.currentWeek = currentWeek;

      //topDonors
      topDonors = updateTopDonors(overview, donation);
      overview.topDonors = topDonors;

      //donationsByType
      donationsByType = updateDonationsByType(overview, donation);
      overview.donationsByType = donationsByType;

      //Continue
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(overview);
        }, 1000);
      });
    })
    .then(function(overview) {
      console.log("NEW OVERVIEW: ", overview);

      return admin
        .firestore()
        .collection("overview")
        .doc("all")
        .update(overview)
        .then(doc => console.log("Overview updated!"));
    });
};

//Calculate this month
const updateThisMonth = (overview, amount) => {
  let thisMonth;
  if (overview.currentMonth === currentMonth) {
    thisMonth = overview.thisMonth + amount;
  } else {
    thisMonth = amount;
  }
  return thisMonth;
};

//Calculate this week
const updateThisWeek = (overview, amount) => {
  let thisWeek;
  if (overview.currentWeek === currentWeek) {
    thisWeek = overview.thisWeek + amount;
  } else {
    thisWeek = amount;
  }
  return thisWeek;
};

//Calculate donationsByMonth
const updateDonationsByMonth = (overview, amount) => {
  let donationsByMonth = overview.donationsByMonth.slice(0); //make copy

  //Check if current monht already exists (returns true or false)
  const doesCurrentDonationsByMonthExist = overview.donationsByMonth.some(
    a => a.month === currentMonth - 1 + "/" + currentYear
  );

  if (doesCurrentDonationsByMonthExist) {
    //Month exists already, add new amount
    donationsByMonth[donationsByMonth.length - 1].amount =
      donationsByMonth[donationsByMonth.length - 1].amount + amount;
  } else {
    //New month, create and add
    donationsByMonth.push({
      month: currentMonth - 1 + "/" + currentYear,
      amount: amount
    });
  }
  return donationsByMonth;
};

//calculate topDonors
const updateTopDonors = (overview, donation) => {
  let topDonors = overview.topDonors.slice(0); //make copy
  let newDonation = { name: donation.name, amount: donation.amount };
  topDonors.push(newDonation);

  topDonors.sort((a, b) => {
    return Number(a.amount) < Number(b.amount) ? true : false;
  });

  topDonors.pop();
  return topDonors;
};

const updateDonationsByType = (overview, donation) => {
  let donationsByType = Object.assign({}, overview.donationsByType); //clone object

  if (donation.type === "one-time") {
    donationsByType.oneTime = donationsByType.oneTime + 1;
  } else if (donation.type === "monthly") {
    donationsByType.monthly = donationsByType.monthly + 1;
  } else if (donation.type === "yearly") {
    donationsByType.yearly = donationsByType.yearly + 1;
  }
  return donationsByType;
};

//Event listener when a new donation has been made
exports.newDonation = functions.firestore
  .document("donations/{donationsId}")
  .onCreate(doc => {
    const donation = doc.data();
    console.log("NEW DONATION: ", donation);
    return handleOverview(donation);
  });


  let person = {
    [b]: "Mindaugas",
    age: 15,
    sex: "Verryyy active boii",
    b: "dsadasd",
  }

 let b = "name";

 person[b]
 person.name

 person.b
