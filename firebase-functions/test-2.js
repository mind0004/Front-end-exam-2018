const updateOverview = donation => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  })
    .then(function(result) {
      return result * 2;
    })
    .then(function(result) {
      return result * 2;
    })
    .then(function(result) {
      console.log("FINAL RESULT: ", result);
      return result * 2;
    });
};

const b = updateOverview();

console.log(b);
