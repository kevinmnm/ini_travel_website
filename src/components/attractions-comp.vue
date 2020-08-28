<template>
   <div class='attractions-section'>
      <div class='attractions-title'><u>Attractions</u></div>
      <code class='attractions-source'>Content source: planetware.com</code>
      <br>
      <div class='attractions-content' v-for="all in attractions" :key="all.des">
         <div class='attractions-content-title'>{{ all.name }}</div>
         <div class='attractions-img-wrap'>
            <img class='attractions-img' :src="require(`@/assets/${all.img}`)" alt='attraction img' draggable='false' />
         </div>
         <div class='attractions-des'>{{ all.des }}</div>
      </div>
   </div>
</template>

<script>
import attractions_list from "@/attractions.js"

export default {
   name: "attractionsComp",
   data(){
      return {
         attractions: attractions_list
      }
   }
};
</script>

<style scoped>

.attractions-des{
   text-align: left;
   text-indent: 20px;
   word-wrap: break-word;
}

.attractions-img{
   position: relative;
   object-fit: contain;
   width: 100%;
   height: 100%;
   border-radius: 10%;
}

.attractions-img-wrap{
   position: relative;
   width: 100%;
   overflow: hidden;
}

.attractions-content-title{
   font-size: 25px;
   margin-top: 30px;
   font-weight: bold;
}
.attractions-content{
   position: relative;
   width: 100%;
}
.attractions-title{
   font-size: 30px;
   font-weight: bold;
   user-select: none;
}

.attractions-section{
   position: relative;
   top: 70px;
   text-underline-position: under;
   width: 75%;
   margin: auto;
}

.attractions-source{
   color: grey;
}
</style>