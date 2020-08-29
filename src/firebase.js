

let firebase = require('firebase/app');

let firebaseConfig = {
   apiKey: "AIzaSyAw4B7kCH72jPUdK2vO4leJCHtLAcb9aWs",
   authDomain: "ini-dream.firebaseapp.com",
   databaseURL: "https://ini-dream.firebaseio.com",
   projectId: "ini-dream",
   storageBucket: "ini-dream.appspot.com",
   messagingSenderId: "354563634921",
   appId: "1:354563634921:web:9597d7a1bca3f63475a278",
   measurementId: "G-FW9SZXDE85",
};

/**
var actionCodeSettings = {
   // URL you want to redirect back to. The domain (www.example.com) for this
   // URL must be whitelisted in the Firebase Console.
   url: 'http://localhost:8080/login',
   // This must be true.
   handleCodeInApp: true
 };
 **/

/*************************/
/*Goes to signup-comp.vue*/
/*************************/

// export function register_user_func(){
//    firebase.auth().sendSignInLinkToEmail(this.new_email, actionCodeSettings)
//    .then(() => {
//       alert('email sent');
//    })
//    .then(() => {
//       if (firebase.auth().isSignInWithEmailLink(window.location.href)){
//          firebase.auth().createUserWithEmailAndPassword(this.new_email, this.new_pw);
//          alert('hello, thank you for signing up (first time trigger and once)');
//       } else {
//          alert('sssss');
//       }
//    })
//    .catch((error) => {
//       alert(error);
//    });
// }

let direct_upon = {
   url: 'http://localhost:8080/login',
   handleCodeInApp: true
 };

export function register_user_func(){
   if (this.new_pw !== this.new_pw_match){
      return this.error_message = 'Error: Passwords are not matching.';
   }
   
   firebase.auth().createUserWithEmailAndPassword(this.new_email, this.new_pw).then( result => {
      this.logged = result;

      if (this.display_id){
         result.user.updateProfile({
            displayName: this.display_id
         });
      }
   }).then(()=>{
      firebase.auth().currentUser.sendEmailVerification(direct_upon).then(()=>{
         alert('Verification email has been sent.');
      }).catch( error => {
         console.log(error);
      });
   }).catch( error => {
      this.error_message = 'Error: ' + error.message;
   });
}

export function signOut_func(){
   firebase.auth().signOut().then(() => {
      window.location.reload();
   }).catch(error => {
      alert(error);
   });
}


export default firebaseConfig;
