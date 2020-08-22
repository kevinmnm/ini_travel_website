<template>
   <div class="footer">
      <div class='footer-content'>
         <img :src="require('../assets/logo.png')" alt="Footer logo img" /> INIDREAM
      </div>
      <div class='footer-credit'>
         <router-link>Cookie Policy</router-link> |
         <router-link>Privacy Policy</router-link> |
         <router-link>Terms and Conditions</router-link> |
         <router-link>Contact Us</router-link>

      </div>
   </div>
</template>

<script>
export default {};
</script>

<style scoped>

.footer-credit{color: white !important;}

.footer{
   position: relative;
   top: calc(100% - 100px);
   left: 0;
   width: 100%;
   height: 100px;
   background: black;
   color: white;
}

img{
   width: 50px;
   height: 50px;
}

</style>