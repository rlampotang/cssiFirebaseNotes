console.log("wow!!");

let googleUser;

window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('logged in as ', user.displayName);
            googleUser = user;
        } else {
            window.location = 'index.html';
        }
    });
}

function handleNoteSubmit() {
    // 1. Get info from the form.
    // 2. Format the data & write to DB.
      // firebase.database.ref(`users/${googleUser.uid}`).push({
            // title: noteTitle.value
            // text: ...
      // })
    // 3. Clear out the form.
}