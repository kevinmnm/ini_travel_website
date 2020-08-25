

let firebase = require('firebase');

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

/*************************/
/*Goes to signup-comp.vue*/
/*************************/

export function register_user_func(){
   firebase.auth().createUserWithEmailAndPassword(this.new_email, this.new_pw).then( result => {
      this.logged = result;

      if (this.display_id){
         result.user.updateProfile({
            displayName: this.display_id
         });
      }
   }).catch( error => {
      alert(error);
   });
}

export function signOut_func(){
   firebase.auth().signOut();
   alert('signed out');
}


export default firebaseConfig;
