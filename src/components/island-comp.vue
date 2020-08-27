<template>
  <div class='island-section'>
     <div>
        <div class='island-title'><u>Islands</u></div>
        <br>
        <div class='island-loop' v-for="all in islands" :key="all.des">
           <div class='island-name'>{{ all.island }}</div>
           <div class='island-img-wrap'>
              <img class='island-img' :src="require(`@/assets/${all.img}`)" alt="island img" />
           </div>
           <code class='size' v-html="'Size: ' + all.size"></code><br><br>
           <div class='des'>{{ all.des }}</div>
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

.island-loop{
   margin-bottom: 30px;
   box-shadow: 0 0 2px black;
}

.size{color:green;}

.des{
   text-align: left;
   padding: 5px;
}

.island-img{
   position: relative;
   object-fit: contain;
   width: 100%;
}

.island-img-wrap{
   position: relative;
   width: 100%;
}

.island-name{
   font-size: 30px;
   font-weight: bold;
   user-select: none;
   padding: 5px;
   background: #202020;
   color: white;
}

.island-title{
   font-size: 30px;
   font-weight: bold;
}

.island-section{
   position: relative;
   text-underline-position: under;
   width: 75%;
   margin: auto;
}

</style>