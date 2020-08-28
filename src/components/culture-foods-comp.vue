<template>
   <div class="culture-foods-section">
      <br />
      <div class="foods-wrap">
         <div class="foods-title">
            <u>Foods</u>
         </div>
         <br />
         <div class="foods-content-flex">
            <div @click='view_img(all)' :class="{'foods-img-wrap': !all.trigger, 'view-img-wrap': all.trigger}" v-for="all in foods" :key="all.img">
               <img
                  :alt="all.img"
                  :src="require(`@/assets/${all.img}`)"
                  draggable="false" 
                  :class="{'foods-img': !all.trigger, 'view-img': all.trigger}"
               />
            </div>
         </div>
      </div>
      <br />
   </div>
</template>

<script>
import foods_list from "@/foods.js";

export default {
   name: "foodComp",
   data() {
      return {
         foods: foods_list
      }
   },
   methods: {
      view_img(all){
         all.trigger = !all.trigger;
      }
   }
};
</script>

<style scoped>
.foods-img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   cursor: zoom-in;
   border-radius: 10px;
}

.foods-img:hover {
   box-shadow: 0 0 5px black;
   border-radius: 1px;
}

.foods-img-wrap {
   position: relative;
   width: 125px;
   height: 125px;
   margin: auto;
   margin: 15px;
}

.foods-img-wrap:hover {
   transform: scale(1.05);
}

@media only screen and (max-width: 700px) {
   .foods-img-wrap {
      width: 100%;
      height: 100%;
   }
}

.foods-content-flex {
   position: relative;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-around;
}

.foods-title {
   font-size: 30px;
   font-weight: bold;
   user-select: none;
}

.foods-wrap {
   position: relative;
   margin: auto;
   width: 75%;
}

.culture-foods-section {
   position: relative;
   width: 100%;
   text-underline-position: under;
   background: rgb(240, 253, 240);
   user-select: none;
}

.view-img{
   position: relative;
   width: 80%;
   height: 90%;
   top: 5%;
   margin: auto;
   object-fit: contain;
}

.view-img-wrap{
   position: fixed;
   top: 0;
   left: 0;
   z-index: 50;
   width: 100%;
   height: 100%;
   background: rgb(0,0,0,0.5);
}
</style>