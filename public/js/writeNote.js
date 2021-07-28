<<<<<<< HEAD
console.log("wow!!");

=======
console.log('wow');
>>>>>>> 330306548164ec3d61221d594d0d73a9c94ceb3f
let googleUser;

window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
<<<<<<< HEAD
            console.log('logged in as ', user.displayName);
=======
            console.log('logged in as', user.displayName);
>>>>>>> 330306548164ec3d61221d594d0d73a9c94ceb3f
            googleUser = user;
        } else {
            window.location = 'index.html';
        }
    });
}

function handleNoteSubmit() {
<<<<<<< HEAD
    // 1. Get info from the form.
    // 2. Format the data & write to DB.
      // firebase.database.ref(`users/${googleUser.uid}`).push({
            // title: noteTitle.value
            // text: ...
      // })
    // 3. Clear out the form.
=======
    // 1. get info from the form
    // 2. format the data & write to db
    firebase.database().ref(`users/${googleUser.uid}`).push({
        title: noteTitle.value,
        text: noteText.value
    });
    // 3. clear out the form
>>>>>>> 330306548164ec3d61221d594d0d73a9c94ceb3f
}