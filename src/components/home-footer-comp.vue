<template>
   <div class="footer">
      <div class='footer-content'>
         <img :src="require('../assets/logo.png')" alt="Footer logo img" /> INIDREAM
      </div>
      <div class='footer-credit'>
         <router-link :to="{name: 'Policy', params: {id: 'privacy'}, hash: '#privacy_section'}">Privacy Policy</router-link> |
         <router-link :to="{name: 'Policy', params: {id: 'terms'}, hash: '#terms_section'}">Terms and Conditions</router-link> |
         <router-link :to="{name: 'Policy', params: {id: 'contact'}, hash: 'contact_section'}">Contact Us</router-link>

      </div>
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

.footer{
   position: relative;
   top: calc(100% - 100px);
   left: 0;
   width: 100%;
   height: 100px;
   background: black;
   color: white;
   padding-top: 10px;
   user-select: none;
}

img{
   width: 30px;
   height: 30px;
}

</style>