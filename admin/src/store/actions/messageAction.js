export const searchByName = term => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    let searchNameResults = [];

    firestore
      .collection("messages")
      .where("name", "==", term)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          searchNameResults.push(doc.data());
        });
        dispatch({ type: "SEARCH_NAME_SUCCESS", searchNameResults });
      })
      .catch(err => {
        dispatch({ type: "SEARCH_NAME_ERROR" }, err);
      });
  };
};
