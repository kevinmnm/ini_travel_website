<template>
  <div class='brief-covid'>
      <div class='titler'><u>Indonesia Travel Advisory</u></div>
      <div class='alerter'>Do Not Travel</div>
      <div class='article'>
         <adv-text></adv-text>
      </div>
   </div>
</template>

<script>
import advisory_text from "./travel-advisory-txt.vue"

export default {
   name: "briefCovidComp",
   components: {
      "adv-text": advisory_text
   }
}
</script>

<style scoped>
.article{
   border: 1px solid red;
   font-size: 20px;
   padding: 20px;
   text-align: left;
   box-shadow: 0 0 5px red;
}

.titler{
   font-size: 3.5vw;
   font-weight: bold;
   margin-bottom: 10px;
   text-underline-position: under;
}

.alerter{
   position: relative;
   width: 100%;
   background: red;
   color: white;
   font-size: 3.2vw;
   border-radius: 2px;
}

@media only screen and (max-width: 700px) {
   .titler{font-size: 30px;}
   .alerter{font-size: 30px;}
}

.brief-covid{
   position: relative;
   display: block;
   width: 80%;
   margin: auto;
   margin-top: 65px;
   margin-bottom: 20px;
}
</style>