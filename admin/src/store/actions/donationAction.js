export const searchDonationsName = term => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    //Access profile and uid using getState()
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const searchNameResults = [];

    firestore
      .collection("donations")
      .where("name", "==", term)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          searchNameResults.push(doc.data());
        });
        dispatch({ type: "SEARCH_NAME_SUCCESS" }, searchNameResults);
      })
      .catch(err => {
        dispatch({ type: "SEARCH_NAME_ERROR" }, err);
      });
  };
};
