<template>
   <div class="page-wrapper">

      <div v-if="show_which === 1">
         <img src="../assets/logo.png" alt="logo img" />
         <div class="title">
            Log into
            <i>Inidream</i>
         </div>
         <div class="title_minor">
            New?
            <a class='signup-link' @click="show_which = 2">Sign Up Here</a>
         </div>
         <hr />
         <br />
         <div class="flex-wrapper-login">
            <div class="input-field">
               <input type="text" placeholder="Username" v-model='username' @input='allow_submit()'/>
               <input type="passoword" placeholder="Password" v-model='password' @input='allow_submit()' />
               <div :class="{'submit-disabled': toggle_disable, 'submit': !toggle_disable}">LOG IN</div>
            </div>
            <div class="seperator">
               <div>OR</div>
            </div>
            <div class="alternate">
               <div>Login with Google</div>
               <div>Login with Apple</div>
               <div>Login with Facebook</div>
               <div>Login with Twitter</div>
            </div>
         </div>
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
      @back-button='show_which = 1'
      @logged-in='loggedin_func($event)'>
      </signup-comp>

      <div class='profile' v-else-if='show_which === 3'>
         <h2>Dashboard</h2>
         <div>USER INFO***: {{ logged }}</div> <br><br>
         <div>DISPLAY NAME***: {{ logged.displayName }}</div>
         <button @click='signOut()'>Log Out</button>
      </div>


   </div>
</template>

<script>
// require('firebase/app');
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
         logged_user: null
      }
   },
   methods: {
      signOut: signOut_func,

      allow_submit(){
         if (this.username && this.password){
            this.toggle_disable = false;
         } else {
            this.toggle_disable = true;
         }
      },
      loggedin_func(e){
         this.logged_user = e;
         e ? this.show_which = 3 : this.show_which = 1;
      }
   }
};
</script>

<style scoped>
.profile{
   margin-top: 500px;
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
   line-height: 2.9;
   font-weight: bold;
   cursor: pointer;
   user-select: none;
   word-wrap: break-word;
   padding: 2px;
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
   text-underline-position: under;
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
</style>