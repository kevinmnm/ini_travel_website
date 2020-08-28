<template>
   <div class="page-wrapper">

      <div v-if='show_which === 1'>
         <img src="../assets/logo.png" alt="logo img" />
         <div class="title">
            Log into
            <i>Inidream</i>
         </div>
         <div class="title_minor">
            New?
            <a class='signup-link' @click.prevent="show_which = 2">Sign Up Here</a>
         </div>
         <hr />
         <div class='message'>{{ message }}</div>
         <br />
         <div class="flex-wrapper-login">
            <div class="input-field">
               <input type="text" placeholder="Username" v-model='username' @input='allow_submit()'/>
               <input type="passoword" placeholder="Password" v-model='password' @input='allow_submit()' />
               <div @click='login()' :class="{'submit-disabled': toggle_disable, 'submit': !toggle_disable}">LOG IN</div>
            </div>
            <div class="seperator">
               <div>OR</div>
            </div>
            <div class="alternate">
               <div @click="third_provider($event)">Login with Google</div>
               <div @click="third_provider($event)">Login with Facebook</div>
               <div @click="third_provider($event)">Login with Twitter</div>
            </div>
         </div>
         <div class='powered'>Powered with Google Firebse</div>
      </div>

      <!-- <div class="cred" v-show="!show_signup">
         <div>
            <u>*Use these credentials*</u>
         </div>
         <div>
            Username:
            <b>iniuser</b>
         </div>
         <div>
            Password:
            <b>inipass</b>
         </div>
      </div> -->

      <signup-comp 
      v-else-if="show_which === 2" 
      @back-button="show_which = 1" 
      @logged-in="loggedin_func($event)">
      </signup-comp>


<!---logged.displayName, logged.photoURL, logged.email, logged.emailVerified, logged.uid--->
      <div class='profile' v-else-if='show_which === 3'>
         <router-link class='backb' :to="{name: 'Home'}">&#8630; Back to Home</router-link>
         <h1>{{ display_name || user_email }}</h1>

         <h2><u>Profile</u></h2>
         <img class="profile-img" :src="logged.photoURL" alt="Profile img" /> <br>

         <div class="profile-row">
            <div>Display Name: </div>
            <div>{{ logged.displayName }}</div>
         </div>

         <div class='profile-row'>
            <div>Email: </div>
            <div>{{ logged.email }}</div>
         </div>

         <div class='profile-row'>
            <div>Email Verified: </div>
            <div>{{ logged.emailVerified ? 'Yes' : 'No' }}</div>
         </div>

         <div class='profile-row'>
            <div>Unique ID: </div>
            <div>{{ logged.uid }}</div>
         </div>

         <button class='dash-logout' @click='signOut()'>Log Out</button>

      </div>

   </div>
</template>

<script>
let firebase = require('firebase/app');
// import firebaseConfig from "@/firebase.js";
// firebase.initializeApp(firebaseConfig);

import {signOut_func} from "@/firebase.js"
import signup_comp from "@/components/signup-comp.vue"

export default {
   name: "loginComp",
   components: {
      "signup-comp": signup_comp
   },
   data(){
      return {
         show_which: 1,
         username: '',
         password: '',
         toggle_disable: true,
         logged: null,
         message: '',
         display_name: '',
         user_email: '',
         user_info: []
      }
   },
   methods: {
      signOut: signOut_func,

      third_provider(e){
         let eti = e.target.innerHTML;
         let provider;

         if (eti.includes('Google')){
            provider = new firebase.auth.GoogleAuthProvider();
         } else if (eti.includes('Facebook')){
            provider = new firebase.auth.FacebookAuthProvider();
         } else if (eti.includes('Twitter')){
            provider = new firebase.auth.TwitterAuthProvider();
         }  

         firebase.auth().signInWithPopup(provider).then((user) => {
            this.display_name = user.displayName;
            this.user_email = user.email;
         }).catch(error => {
            this.message = error;
         });
      },

      login(){
         if (!this.toggle_disable){
            firebase.auth().signInWithEmailAndPassword(this.username, this.password).catch( error => {
               this.message = error;
            });
         }
      },
      allow_submit(){
         if (this.username && this.password){
            this.toggle_disable = false;
         } else {
            this.toggle_disable = true;
         }
      },
      loggedin_func(e){
         this.logged = e;
         if (e){
            this.show_which = 3;
         }
      }
   },
   created(){
      firebase.auth().onAuthStateChanged( user => {
         if (user) {
            this.show_which = 2;
         }
      });
   }
};
</script>

<style scoped>

.powered{
   position: absolute;
   width: 150px;
   left: calc(50% - 75px);
   bottom: 100;
   margin-top: 30px;
   z-index: 1;
   font-size: 14px;
   color: darkGrey;
}

.dash-logout{
   position: relative;
   width: 150px;
   padding: 5px;
   font-weight: bold;
   background: black;
   color: white;
   border-radius: 5px;
   box-shadow: 0 0 2px grey;
   margin: auto;
   margin-top: 20px;
   font-size: 20px;
   cursor: pointer;
   outline: none;
   border: none;
}
.dash-logout:hover{
   background:brown;
   color: white;
}

.backb{
   position: absolute;
   top: 0;
   left: 0;
   cursor: pointer;
   font-size: 15px;
   color: darkGrey;
   z-index: 1;
   font-family: 'Nunito', sans-serif;
   text-decoration: none;
}

.backb:hover{
   color: black;
   font-weight: bold;
}

.message{
   position: relative;
   color: red;
   font-weight: bold;
   font-size: 15px;
   height: 17px;
}

.profile-row div{
   border: 1px solid orange;
   width: 45%;
   box-sizing: border-box;
   padding: 2px;
   font-size: 20px;
   word-wrap: break-word;
}

@media only screen and (max-width: 1000px) {
   .profile-row div{
      font-size: 15px;
   }
}

@media only screen and (max-width: 600px) {
   .profile-row div{
      font-size: 12px;
   }
}

.profile-row div:nth-child(even){
   text-align: left;
   padding-left: 10px;
}

.profile-row div:nth-child(odd){
   text-align: right;
   padding-right: 10px;
   font-weight: bold;
}

.profile-row{
   position: relative;
   display: flex;
   justify-content: center;
   flex-direction: row;
   flex-wrap: wrap;
   width: 100%;
}
.profile{
   margin-top: 30px;
   display: flex;
   flex-direction: column;
   text-align: center;
}
.signup-link{
   color: blue;
   cursor: pointer;
}
.signup-link:hover{
   color: brown;
}

.seperator {
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-size: 15px;
   flex-wrap: wrap;
}

/* .cred {
   color: darkGrey;
   width: 100px;
   margin: auto;
   margin-top: 30px;
   width: 50%;
}
.cred:hover {
   color: black;
} */

.alternate {
   width: 40%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
}

.alternate div {
   border: 1px solid darkGrey;
   width: 80%;
   margin: auto;
   height: 20%;
   font-size: 18px;
   font-weight: bold;
   cursor: pointer;
   user-select: none;
   word-wrap: break-word;
   padding: 10px;
}

.alternate div:hover {
   background-color: whiteSmoke;
}

input,
.submit-disabled,
.submit {
   position: relative;
   display: block;
   width: 90%;
   font-size: 20px;
   margin: 0 auto;
   border: none;
}

input {
   padding: 5px;
   margin-bottom: 1px;
   border-bottom: 1px solid lightGrey !important;
}

input:focus,
input:active {
   outline: 0;
   border: none;
   background-color: whiteSmoke;
}

.submit{
   /* background-color: #eedfc9; */
   background: white;
   box-shadow: 0 0 3px black;
   color: #101010;
   margin-top: 10px;
   padding: 5px;
   user-select: none;
   cursor: pointer;
}

.submit-disabled {
   background-color: whiteSmoke;
   color: lightGrey;
   margin-top: 10px;
   padding: 5px;
   user-select: none;
   cursor: not-allowed;
}

.input-field {
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 40%;
   height: 100%;
   outline: none;
}

.flex-wrapper-login {
   position: relative;
   width: 100%;
   height: 50%;
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: center;
}

.title_minor {
   position: relative;
   text-align: center;
   font-weight: bold;
   font-size: 18px;
   margin: 5px;
}

.title {
   position: relative;
   text-align: center;
   font-weight: bold;
   font-size: 25px;
}

.page-wrapper {
   position: relative;
   top: 7%;
   width: 80%;
   height: 70%;
   margin: auto;
   font-family: "Nunito", sans-serif;
   text-underline-position: under;
}

@media only screen and (max-width: 700px) {
   .flex-wrapper-login {
      flex-direction: column;
      height: auto;
      justify-content: center;
   }

   .input-field {
      width: 80%;
      margin: auto;
      margin-bottom: 10px;
   }

   .alternate {
      width: 80%;
      margin: auto;
      margin-top: 5px;
   }
}

@media only screen and (max-width: 500px) {
   .alternate div {
      font-size: 14px;
   }
}

img {
   position: relative;
   margin: auto;
   width: 150px;
   height: 150px;
   user-select: none;
}
/* .profile-img{
   width: auto;
   height: auto;
} */
</style>