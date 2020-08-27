<template>
   <div class="cities-section">
      <div class="cities-title">
         <u>Cities</u>
      </div>
      <br />
      <div class="cities-flex">
         <div class="cities-img-wrap" v-for="all in cities" :key="all.city_des">
               <div class='hidden-text'>{{ all.city_name }}</div>
               
               <img class='cities-img' :src="require(`@/assets/${all.city_img}`)" alt='city img' />
         </div>
      </div>
      <br><br>
   </div>
</template>

<script>
import cities_list from "@/cities.js";

export default {
   name: "citiesComp",
   data() {
      return {
         cities: cities_list,
      };
   },
};
</script>

<style scoped>

.hidden-text{
   position: absolute;
   color: white;
   font-size: 30px;
   width: 150px;
   left: calc(50% - 75px);
   top: 37%;
   user-select: none;
   cursor: pointer;
   opacity: 1;
}

.cities-img{
   position: relative;
   object-fit: cover;
   height: 100%;
   width: 100%;
   cursor: pointer;
   opacity: 0.2;
   transition: 0.2s;
}

.cities-img:hover{
   opacity:1;
}

.cities-img-wrap{
   position: relative;
   width: 200px;
   height: 200px;
   border-radius: 50%;
   overflow: hidden;
   margin: 15px;
   background: linear-gradient(rgba(29, 38, 113, 0.9), rgba(195, 55, 100, 0.9));
   transition: 0.2s;
   box-shadow: 0 0 3px black;
}

.cities-img-wrap:hover{
   border-radius: 10px;
}

.cities-flex{
   position: relative;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-around;
}

.cities-title {
   font-size: 30px;
   font-weight: bold;
}

.cities-section {
   position: relative;
   text-underline-position: under;
   width: 75%;
   margin: auto;
   margin-top: 75px;
}
</style>