<<<<<<< HEAD
const signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      window.location = 'writeNote.html';
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
=======
console.log('loaded');

function signIn() {
    console.log('sign in clicked');
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            console.log(token, user);
            window.location = "writeNote.html";
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            
            
            console.log(errorCode, errorMessage, email, credential);
            console.log(error);
        });
}
>>>>>>> 330306548164ec3d61221d594d0d73a9c94ceb3f
