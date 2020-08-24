<template>
   <div class="page-wrap">
      <img src="../assets/logo.png" alt="logo img" />
      <div class="title">
         Sign Up For
         <i>Inidream</i>
      </div>
      <div class="form"></div>
   </div>
</template>

<script>
import * as firebase from "firebase";
import firebaseConfig from "@/firebase.js";
firebase.initializeApp(firebaseConfig);

export default {};
</script>

<style scoped>
.title {
   position: relative;
   font-weight: bold;
   font-family: "Nunito", sans-serif;
   font-size: 25px;
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
}
</style>