<template>
  <div class='essentials-page'>
     <div class='essentials-title'><u>Essentials</u></div>
     <!-- <div class='source'><i>Content source: www.asherfergusson.com</i></div> -->
     <br>
     <div class='essentials-content' v-for='all in essentials' :key='all.item'>

        <div class='essentials-content-title' :style='{"text-align": all.align}'>{{ all.item }}</div>

        <div 
        class='essentials-content-des' 
        :style="{ 'left': (all.align === 'left') ? '0' : '30%' }">
         {{ all.description }}
        </div>

        <br>
     </div>
  </div>
</template>

<script>
import essentials_list from "@/essentials.js"

export default {
   name: "essentialsComp",
   data(){
      return{
         essentials: essentials_list
      }
   }
}
</script>

<style scoped>

.essentials-content-title{
   font-size: 20px;
   font-weight: bold;
   color: brown;
   margin-top: 20px;
}

.essentials-content-des{
   position: absolute;
   position: relative;
   width: 70%;
   text-align: left;
   text-indent: 20px;
   font-size: 16px;
   color: #101010;
   margin-bottom: 20px;
}

.essentials-title{
   font-size: 30px;
   font-weight: bold;
}

.source{
   position: relative;
   color: grey;
   margin-top: 5px;
   display: block;
}

.essentials-page{
   position: relative;
   text-underline-position: under;
   width: 75%;
   margin: auto;
   margin-top: 65px;
}

</style>