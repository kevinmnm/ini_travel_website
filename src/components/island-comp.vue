<template>
  <div class='island-section'>
     <div>
        <div class='island-title'><u>Islands</u></div>
        <br>
        <div v-for="all in islands" :key="all.des">
           <div class='island-name'>{{ all.island }}</div>
           <div>
              <img :src="require(`@/assets/${all.img}`)" />
           </div>
           <div>{{  }}</div>
        </div>
     </div>
  </div>
</template>

<script>
import islands_list from "@/islands.js"

export default {
   name: "islandComp",
   data(){
      return{
         islands: islands_list
      }
   }
}
</script>

<style scoped>
.island-name{
   font-size: 25px;
   font-weight: bold;
}

.island-title{
   font-size: 30px;
   font-weight: bold;
}

.island-section{
   text-underline-position: under;
   width: 75%;
   margin: auto;
}

</style>