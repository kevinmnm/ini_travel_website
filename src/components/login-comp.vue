<template>
   <div class="page-wrapper">
      <img src="../assets/logo.png" alt="logo img" />
      <div class="title">Log into Inidream</div>
      <div class="flex-wrapper-login">
         <div class="input-field">
            <input type="text" placeholder="Username" />
            <input type="passowrd" placeholder="Password" />
            <div class="submit">LOG IN</div>
         </div>
         <div class="alternate">
            <div></div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "loginComp",
};
</script>

<style scoped>

.alternate{
   width: 50%;
   background-color: skyBlue;
}

input,
.submit{
   position: relative;
   display: block;
   width: 90%;
   font-size: 20px;
   margin: 0 auto;
   border: none;
}

input:focus,
input:active{
   outline: 0;
   border: none;
   background-color: whiteSmoke;
}

.submit{
   background-color: whiteSmoke;
   color: lightGrey;
   margin-top: 10px;
   padding: 5px;
}

.input-field {
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 50%;
   height: 100%;
   background-color: pink;
   margin: auto;
   outline: none;
}

.flex-wrapper-login {
   position: relative;
   width: 100%;
   height: 50%;
   display: flex;
   flex-wrap: wrap;
   border: 1px solid purple;
}

.title {
   position: relative;
   text-align: center;
   font-weight: bold;
   font-size: 25px;
}

.page-wrapper {
   position: relative;
   top: 20%;
   width: 80%;
   height: 70%;
   margin: auto;
   border: 1px solid black;
   font-family: "Nunito", sans-serif;
}

img {
   position: relative;
   margin: auto;
   width: 50px;
   height: 50px;
}
</style>