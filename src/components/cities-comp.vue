<template>
   <div class="cities-section">
      <div class="cities-title">
         <u>Cities</u>
      </div>
      <br />

      <!------ Modal --------------->
      <div class="cities-modal-wrap" v-show="modal_show" @click.self="hide_modal()">
         <div class="modal-content">
            <div class='modal-title'>{{ modal_name }}</div>
            <br>
            <div class="modal-img-wrap">
               <img
                  class="modal-img"
                  :src="require(`@/assets/${modal_img}`)"
                  alt="modal img"
                  draggable="false"
               />
            </div>
            <br>
            <div class='modal-des'>{{ modal_des }}</div>
         </div>
      </div>
      <!---------------------------->

      <div class="cities-flex">
         <div
            class="cities-img-wrap"
            v-for="all in cities"
            :key="all.city_des"
            @click="show_modal(all)"
         >
            <div class="hidden-text">{{ all.city_name }}</div>

            <img
               class="cities-img"
               :src="require(`@/assets/${all.city_img}`)"
               alt="city img"
               draggable="false"
            />
         </div>
      </div>
      <br />
      <br />
   </div>
</template>

<script>
import cities_list from "@/cities.js";

export default {
   name: "citiesComp",
   data() {
      return {
         cities: cities_list,
         modal_name: "",
         modal_img: "bandung.png",
         modal_des: "",
         modal_show: false,
      };
   },
   methods: {
      show_modal(all) {
         this.modal_name = all.city_name;
         this.modal_img = all.city_img;
         this.modal_des = all.city_des;
         this.modal_show = true;
         document.body.style.overflow = "hidden";
      },
      hide_modal() {
         this.modal_show = false;
         document.body.style.overflow = "auto";
      },
   },
};
</script>

<style scoped>

.modal-des{
   width: 95%;
   padding: 10px;
   text-align: left;
   text-indent: 20px;
}

.modal-title{
   font-size: 30px;
   font-weight: bold;
}

.modal-img-wrap{
   position: relative;
   width: 100%;
   overflow: hidden;
}
.modal-img {
   position: relative;
   object-fit: contain;
   height: 100%;
   width: 100%;
   border-radius: 5px;
}

.modal-content {
   position: relative;
   width: 70%;
   margin: auto;
   padding: 10px;
   background: white;
   cursor: default;
   word-wrap: break-word;
}

.cities-modal-wrap {
   position: fixed;
   z-index: 5;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgb(0, 0, 0, 0.85);
   color: white;
   cursor: pointer;
   overflow: auto;
   color: black;
}

.hidden-text {
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

.cities-img {
   position: relative;
   object-fit: cover;
   height: 100%;
   width: 100%;
   cursor: zoom-in;
   opacity: 0.2;
   transition: 0.2s;
}

.cities-img:hover {
   opacity: 1;
}

.cities-img-wrap {
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

.cities-img-wrap:hover {
   border-radius: 10px;
}

.cities-flex {
   position: relative;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-around;
}

.cities-title {
   font-size: 30px;
   font-weight: bold;
   user-select: none;
}

.cities-section {
   position: relative;
   text-underline-position: under;
   width: 75%;
   margin: auto;
   margin-top: 75px;
}
</style>