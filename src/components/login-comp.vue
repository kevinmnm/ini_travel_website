<template>
   <div class="page-wrapper">

      <img class='setting-icon' @click="open_setting = true;" :src="require('@/assets/users-cog.svg')" alt="user-cog.svg" v-show="setting_cog" />

      <div class="setting-wrap" v-show="open_setting">
         <div class="setting-box">
            <div><u>Profile Setting</u></div>
            <input v-model="setting_name" type="text" @keydown.prevent.space placeholder="New Display Name" />
            <input v-model="setting_phone" type="tel" @keydown.prevent.space placeholder="New Phone Number" />
            <div>
               <div class='setting-confirm' @click="update_info()">Confirm</div>
               <div class='setting-cancel' @click="close_setting()">Cancel</div>
            </div>
         </div>
      </div>

      <div v-if='show_which === 1'>
         <img src="../assets/logo.png" @click="setting()" alt="logo img" />
         <div class="title">
            Log into
            <i>Initravel</i>
         </div>
         <div class="title_minor">
            New?
            <a class='signup-link' @click.prevent="show_which = 2">Sign Up Here</a>
         </div>
         <br>
         <hr />
         <br>
         <div class='message'>{{ message }}</div>
         <br />
         <div class="flex-wrapper-login">
            <div class="input-field">
               <input type="text" placeholder="Username" @keydown.space.prevent v-model='username' @input='allow_submit()'/>
               <input type="password" placeholder="Password" @keydown.space.prevent v-model='password' @input='allow_submit()' />
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
         <div class='powered' onclick="window.open('https://firebase.google.com/')">Integrated with Google Firebse</div>
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

         <div class='upload-img-wrap' v-show='change_img'>
            <div class='upload-img'>
               <div class='close-upload-img-wrap' @click='close_img()'>x</div>
               <div class='upload-img-title'>Upload New Image (200 x 200)</div>
               <div class='progress-bar'>
                  <div class='filler-text'>{{ progress_fill + '%' }}</div>
                  <div class='bar-filler' :style="{'width': progress_fill + '%'}"></div>
               </div>
               <input type='file' @change='upload_img($event)' class='img-uploader' name='img' accept='image/*' />
               <div class='done-button' v-show='show_done' @click='close_img()'>Done</div>
            </div>
         </div>

         <h2><u>Profile</u></h2>
         <img class="profile-img"
            :src="logged.photoURL ? logged.photoURL : require(`@/assets/${default_img}`)" 
            alt="Profile img" 
            @click='change_img = true;' 
            draggable='false' /> 

         <button class='dash-logout' @click='send_email()' v-show="!email_button">Verify Email</button>

         <br>

         <div class='profile-row'>
            <div>Email Verified: </div>
            <div 
            :class="{ 'green': logged.emailVerified, 'red': !logged.emailVerified }">
               {{ logged.emailVerified ? 'Yes' : 'No' }}
            </div>
         </div>

         <div class='profile-row'>
            <div>Email: </div>
            <div>{{ logged.email }}</div>
         </div>

         <div class="profile-row">
            <div>Display Name: </div>
            <div>{{ logged.displayName }}</div>
         </div>

         <div class="profile-row">
            <div>Phone Number: </div>
            <div>{{ user_phone }}</div>
         </div>

         <div class='profile-row'>
            <div>Unique ID: </div>
            <div>{{ logged.uid }}</div>
         </div>

         <button class='dash-logout' @click='signOut()'>Log Out</button>
         <br>
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
         user_phone: null,
         email_button: true,
         default_img: 'missing_img.png',
         activate_buttons: false,
         setting_name: '',
         setting_phone: null,
         open_setting: false,
         progress_fill: 0,
         change_img: false,
         show_done: false,
         uploading_file: null,
         setting_cog: false
         //photo_src: ''
      }
   },
   methods: {
      signOut: signOut_func,
      
      close_img(){
         // let x = firebase.storage().ref('user-list/' + this.logged.uid + '/img' + this.file_name);
         // console.log(x.location.path);
         this.change_img = false;
         this.uploading_file = null;
      },
      upload_img(e){
         let file = e.target.files[0];
         this.uploading_file = e.target.files[0];

         let storage_ref = firebase.storage().ref().child('user-list/' + this.logged.uid + '/img/' + file.name);

         //firebase.auth().currentUser.photoURL = this.storage_ref;

         storage_ref.put(file).then(snapshot => {
            snapshot.ref.getDownloadURL().then( url => {
               firebase.auth().currentUser.photoURL = url;
               console.log(url);
               localStorage.setItem('profile_img', file.name);
            });
         });

         storage_ref.put(file).on('state_changed', snapshot => {
            this.progress_fill = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         });

         // uploading.on('state_changed', function(snapshot){
         //    this.progress_fill = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         //    console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
         // }, function(){
         //     alert('success');
         // });
      },
      send_email(){
         firebase.auth().currentUser.sendEmailVerification()
         .then(()=>{
            alert('Email sent');
         });
      },
      update_info(){
         firebase.auth().currentUser.updateProfile({
            displayName: this.setting_name
         }).then(()=>{
            firebase.firestore().collection('user-list').doc(this.logged.uid).set({
               phone: this.setting_phone
            }).then(()=>{
               firebase.firestore().collection('user-list').doc(this.logged.uid).get().then( data =>{
                  this.user_phone = data.data().phone;
               });
            });
         }).then(()=>{
            alert('Update successful.');
            this.open_setting = false;
            this.setting_name = '';
            this.setting_phone = null;
         });
      },

      close_setting(){
         this.open_setting = false;
         this.setting_name = '',
         this.setting_phone = null
      },
      third_provider(e){
         let eti = e.target.innerHTML;
         let provider;

         if (eti.includes('Google')){
            provider = new firebase.auth.GoogleAuthProvider();
         } else if (eti.includes('Facebook')){
            provider = new firebase.auth.FacebookAuthProvider();
         } else if (eti.includes('Twitter')){
            this.message='Currently unavailable. Please try again with Google or Facebook login.'
            //provider = new firebase.auth.TwitterAuthProvider();
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
   watch: {
      progress_fill(){
         if (this.progress_fill === 100){
            this.show_done = true;
         } else {
            this.show_done = false;
         }
      }
   },
   created(){
      firebase.auth().onAuthStateChanged( user => {
         if (user) {
            this.show_which = 2;
            user.emailVerified ? this.email_button = true : this.email_button = false;

            firebase.firestore().collection('user-list').doc(user.uid).get().then( datas => {
               this.user_phone = datas.data().phone;
            });

            this.setting_cog = true;
         /************************** DO NOT DELETE THIS COMMENT ***********************************/
            // firebase.firestore().collection(user.uid).get().then( datas => {
            //    datas.docs.forEach( item => {
            //       this.user_phone = item.data().phone;
            //    });
            // });
         /*****************************************************************************************/

         } else {
            this.setting_cog = false;
         }

         if (localStorage.profile_img){
            console.log(localStorage.profile_img);
            let x = firebase.storage().ref().child('user-list/' + user.uid + '/img/' + localStorage.profile_img);
            user.photoURL = x;
            //this.photo_src = x;
         }
            
         //    this.pohoto_src = x;
         //    user.photoURL = x;
         //    return 
         // } else if (this.logged.photoURL){
         //    this.photo_src = this.logged.photoURL;
         //    return
         // } else {
         //    this.photo_src = 'require(`@/assets/${default_img}`)'
         // }


         // logged.photoURL ? logged.photoURL : require(`@/assets/${default_img}`)

      });

   }
}
</script>

<style scoped>

.close-upload-img-wrap{
   font-size: 40px;
   position: absolute;
   top: 5px;
   right: 15px;
   color: black;
   cursor: pointer;
   user-select: none;
}
.close-upload-img-wrap:hover{
   color: brown;
}

.done-button{
   font-size: 20px;
   padding: 3px;
   border: 1px solid black;
   width: 200px;
   position: relative;
   margin: 100px auto 0;
   cursor: pointer;
   user-select: none;
}
.done-button:hover{
   background: black;
   color: white;
}

.filler-text{
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   z-index: 1;
   text-align: center;
}

.bar-filler{
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   background: brown;
   text-align: center;
   color: black;
}

.upload-img-title{
   font-size: 30px;
}

.upload-img{
   position: relative;
   top: 5%;
   display: flex;
   margin: auto;
   width: 85%;
   height: 90%;
   background: white;
   overflow: auto;
   flex-direction: column;
   justify-content: center;
}

.upload-img-wrap{
   position: fixed;
   z-index: 10;
   background: rgb(0,0,0,0.7);
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
}

.img-uploader{
   display: block;
   width: 300px;
   background: grey;
}

.progress-bar{
   position: relative;
   height: 35px;
   width: 250px;
   box-sizing: border-box;
   border: 1px solid brown;
   margin: 30px auto 30px;
   font-size: 30px;
}

.setting-confirm,
.setting-cancel{
   width: 190px;
   padding: 10px;
   background: rgb(194, 52, 52);
   border-radius: 5px;
   box-sizing: border-box;
   margin: 10px !important;
   user-select: none;
   cursor: pointer;
}

.setting-confirm:active,
.setting-cancel:active{
   box-shadow: 0 0 5px black inset;
}

.setting-box div{
   margin: auto;
}

.setting-wrap{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background:rgb(255, 255, 255, 0.9);
   z-index: 10;
   color: white;
   font-size: 40px;
   text-underline-position: under;
}

.setting-box input{
   width: 60%;
}

.setting-box{
   position: relative;
   width: 80%;
   height: 80%;
   top: 10%;
   margin: auto;
   display: flex;
   flex-direction: column;
   background: rgb(77, 27, 4);
   border-radius: 10px;
}

.setting-icon{
   position: absolute;
   right: 0;
   width: 45px;
   height: 45px;
   cursor: pointer;
}

.red{
   color: rgb(190, 0, 0) !important;
   background: rgb(248, 182, 182) !important;
   font-weight: bold !important;
}

.green{
   color: green !important;
   background: rgb(191, 255, 191) !important;
   font-weight: bold !important;
}

.powered{
   position: absolute;
   width: 150px;
   left: calc(50% - 75px);
   bottom: 100;
   margin-top: 30px;
   z-index: 1;
   font-size: 14px;
   color: darkGrey;
   cursor: pointer;
   user-select: none;
}
.powered:hover{
   color: rgb(153, 54, 54);
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
   color: rgb(128, 128, 128);
   font-weight: bold;
   z-index: 1;
   font-family: 'Nunito', sans-serif;
   text-decoration: none;
}

.backb:hover{
   color: black;
}

.message{
   position: relative;
   color: red;
   font-weight: bold;
   font-size: 15px;
   height: 17px;
}

.profile-row div{
   width: 45%;
   box-sizing: border-box;
   padding: 2px;
   font-size: 20px;
   word-wrap: break-word;
   box-shadow: 0 0 3px black;
   background: white;
}

@media only screen and (max-width: 1000px) {
   .profile-row div{
      font-size: 16px;
   }
}

@media only screen and (max-width: 600px) {
   .profile-row div{
      font-size: 12px;
   }
}

.profile-row div:nth-child(even){
   text-align: center;
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
   width: 80%;
   margin: auto;
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
   box-shadow: 0 0 2px black;
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
   width: 75%;
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
.profile-img{
   position: relative;
   width: 150px;
   height: 150px;
   cursor: pointer;
}
</style>