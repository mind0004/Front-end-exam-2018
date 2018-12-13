const overview = {
  currentWeek: "50",
  currentMonth: "11",
  donationsByMonth: [
    { amount: 5000, month: "03/2018" },
    { amount: 3900, month: "04/2018" },
    { month: "05/2018", amount: 5500 },
    { amount: 2500, month: "06/2018" },
    { amount: 1200, month: "07/2018" },
    { amount: 600, month: "08/2018" },
    { month: "09/2018", amount: 1980 },
    { month: "10/2018", amount: 8000 },
    { amount: 3750, month: "11/2018" }
  ],
  thisWeek: 50,
  inTotal: 28200,
  currency: "$",
  topDonors: [
    { name: "Berto Robert", amount: "390" },
    { name: "Alex Kenny", amount: "230" },
    { name: "Jeremy Johhny", amount: "210" },
    { name: "Susan Boyle", amount: "190" },
    { name: "Cleorge Gooney", amount: "130" },
    { name: "Jindaugas Mukna", amount: "110" }
  ],
  thisMonth: 50,
  donationsByType: { oneTime: 14288, yearly: 982, monthly: 2012 }
};
const donation = {
  amount: 50,
  month: "11/2018",
  name: "Jeremy",
  type: "yearly"
};
const amount = donation.amount;

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

//***************************************** */

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

const b = updateDonationsByType(overview, donation);
console.log(overview.donationsByType);
console.log(b);
console.log(currentMonth);
