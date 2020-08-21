<template>

   <div class="page-wrapper">
      <div>
         <img src="../assets/logo.png" alt="logo img" />
         <div class="title">Log into Inidream</div>
         <br>
         <div class="flex-wrapper-login">
            <div class="input-field">
               <input type="text" placeholder="Username" />
               <input type="passoword" placeholder="Password" />
               <div class="submit">LOG IN</div>
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
      <div class='cred'>
            <div><u>*Use these credentials*</u></div>
            <div>Username: <b>iniuser</b></div>
            <div>Password: <b>inipass</b></div>
      </div>
   </div>

</template>

<script>
export default {
   name: "loginComp"
}
</script>

<style scoped>

.seperator{
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-size: 15px;
   flex-wrap: wrap;
}

.cred{
   color: darkGrey;
   width: 100px;
   margin: auto;
   margin-top: 30px;
   width: 50%;
}
.cred:hover{
   color: black;
}

.alternate{
   width: 40%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
}

.alternate div{
   border: 1px solid darkGrey;
   width: 80%;
   margin: auto;
   height: 20%;
   font-size: 20px;
   line-height: 2.9;
   font-weight: bold;
   cursor: pointer;
}

.alternate div:hover {
   background-color: darkGrey;
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

input{
   padding: 5px;
   margin-bottom: 1px;
   border-bottom: 1px solid lightGrey !important;
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

.title {
   position: relative;
   text-align: center;
   font-weight: bold;
   font-size: 25px;
}

.page-wrapper {
   position: relative;
   top: 15%;
   width: 80%;
   height: 70%;
   margin: auto;
   font-family: "Nunito", sans-serif;
}

@media only screen and (max-width: 700px) {
  .flex-wrapper-login{
     flex-direction: column;
     height: auto;
     justify-content: center;
  }

  .input-field{
     width: 80%;
     margin: auto;
     margin-bottom: 10px;
  }

  .alternate{
     width: 80%;
     margin: auto;
     margin-top: 5px;
  }
}

@media only screen and (max-width: 500px) {
   .alternate div{
      font-size: 14px;
   }
}

img {
   position: relative;
   margin: auto;
   width: 100px;
   height: 100px;
   user-select: none;
}
</style>