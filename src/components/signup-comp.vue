<template>
   <div class="page-wrap">
      <div class='back' @click='back()'>&#8630; Back to Log-In</div>
      <img src="../assets/logo.png" alt="logo img" />
      <div class="title">
         Sign Up For
         <i>Inidream</i>
      </div>
      <form class="form" @submit.prevent="register_user()">
         <input type='text' v-model='new_email' placeholder='Email' required />
         <input type='password' v-model='new_pw' placeholder='Password' required />
         <input type='password' v-model='new_pw_match' placeholder='Re-type Password' required />
         <br>
         <input type='text' v-model='display_id' placeholder='Display ID' />
         <div class='row-view'>
            <input type='text' v-model='first_name' placeholder="First Name" />
            <input type='text' v-model='last_name' placeholder="Last Name" />
         </div>
         <input type='tel' v-model='phone_number' placeholder='Phone' />
         <button disabled>Subimt</button>
      </form>
   </div>
</template>

<script>
const firebase = require('firebase');
import firebaseConfig from "@/firebase.js";
firebase.initializeApp(firebaseConfig);

export default {
   name: "signupComp",
   data(){
      return {
         new_email: '',
         new_pw: '',
         new_pw_match: '',
         display_id: '',
         first_name: '',
         last_name: '',
         phone_number: null
      }
   },
   methods: {
      register_user(){
         firebase.auth().createUserWithEmailAndPassword(this.new_email, this.new_pw);
      },
      back(){
         this.$emit('back-button');
      }
   }
};
</script>

<style scoped>

.back{
   position: absolute;
   top: 0;
   left: 0;
   cursor: pointer;
   font-size: 15px;
   color: darkGrey;
   z-index: 1;
}

.back:hover{
   color: black;
}

button{
   display: block;
   margin-top: 15px;
   font-size: 20px;
   background-color: white;
   border: none;
   box-shadow: 0 0 3px black;
   outline: none;
   padding: 5px;
}

button:disabled{
   background-color: whiteSmoke;
   box-shadow: none;
   cursor: not-allowed;
}

input{
   box-sizing: border-box;
   font-size: 18px;
   display: block;
   padding: 5px;
   font-family: 'Nunito', sans-serif;
}

input:focus{
   outline-color: blue;
}

.row-view{
   display: flex;
   flex-direction: row;
}

.row-view input{
   width: 50%;
   box-sizing: border-box;
}

.form{
   position: relative;
   display: flex;
   flex-direction: column;
}

.title {
   position: relative;
   font-weight: bold;
   font-family: "Nunito", sans-serif;
   font-size: 25px;
   margin-bottom: 10px;
}

img {
   position: relative;
   margin: auto;
   width: 150px;
   height: 150px;
   user-select: none;
}

.page-wrap {
   position: relative;
   top: 7%;
   width: 80%;
   height: 70%;
   margin: auto;
   user-select: none;
}
</style>