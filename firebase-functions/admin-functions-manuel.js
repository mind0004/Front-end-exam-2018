//Temp update/disable security rules and run following in the browser

//Delete all items of collection
db.collection("donations")
  .get()
  .then(function(querySnapshot) {
    // Once we get the results, begin a batch
    var batch = db.batch();

    querySnapshot.forEach(function(doc) {
      // For each doc, add a delete operation to the batch
      batch.delete(doc.ref);
    });

    // Commit the batch
    console.log("done");
    return batch.commit();
  })
  .then(function() {
    // Delete completed!
    // ...
    console.log("done");
  });
