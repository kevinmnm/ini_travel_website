<template>
   <div class="footer">
      <div class='footer-content'>
         <img :src="require('../assets/logo.png')" alt="Footer logo img" /> INITRAVEL
      </div>
      <div class='footer-credit'>
         <router-link :to="{name: 'Policy', params: {id: 'privacy'}, hash: '#privacy_section'}">Privacy Policy</router-link> |
         <router-link :to="{name: 'Policy', params: {id: 'terms'}, hash: '#terms_section'}">Terms and Conditions</router-link> |
         <router-link :to="{name: 'Policy', params: {id: 'contact'}, hash: '#contact_section'}">Contact Us</router-link>
      </div><br>
      <div class='dev'>Designed & Built By Kevin Song</div>
   </div>
</template>

<script>
export default {
   name: "homeFooterComp"
};
</script>

<style scoped>

.footer-credit a{
   color: lightGrey;
   text-underline-position: under;
}
.footer-credit a:hover{
   color: white;
}

.footer-credit{
   color: white !important;
   margin-top: 10px;
}

.footer-content{
   font-size: 30px;
}

.footer{
   position: relative;
   top: calc(100% - 100px);
   left: 0;
   width: 100%;
   height: 100px;
   background: black;
   color: white;
   user-select: none;
   padding-bottom: 5px;
   padding-top: 20px;
}

img{
   width: 25px;
   height: 25px;
}

@media only screen and (max-width: 400px) {
   .footer-credit{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      color: black !important;
   }

   .footer-credit a{
      display: block;
   }

   .footer{
      height: auto;
      padding-bottom: 20px;
   }
}

.dev{
   color: grey;
   cursor: pointer;
}
.dev:hover{color:white;}
</style>