<template>
   <div>
      <div class='img-wrapper'>

         <transition name='main-img' mode='out-in'>
            <img class="font-img-full" v-if="show_img === 1" alt="front-img1" :src="require(`../assets/${img_src1}`)" draggable="false" key="1"/>
            <img class="font-img-full" v-else-if="show_img === 2" alt="front-img2" :src="require(`../assets/${img_src2}`)" draggable="false" key="2" />
            <img class="font-img-full" v-else alt="front-img3" :src="require(`../assets/${img_src3}`)" draggable="false" key="3" />
         </transition>

         <div class='dots-wrapper'>
            <span :class="{white: circle1}">&#x25CF;</span>
            <span :class="{white: circle2}">&#x25CF;</span>
            <span :class="{white: circle3}">&#x25CF;</span>
         </div>
         <div class="arrow-left" @click="prev_img()">&#60;</div>
         <div class="arrow-right" @click="next_img()">&#62;</div>
      </div>

      <home-content-comp></home-content-comp>
   </div>
</template>

<script>
import home_content_comp from "@/components/home-content-comp.vue"

export default {
   name: "homeComp",
   components: {
      "home-content-comp": home_content_comp
   },
   data(){
      return {
         img_src1: 'front1_2400x1600.jpg',
         img_src2: 'front2_1980x1080.png',
         img_src3: 'front3_1980x1080.png',
         show_img: 1,
         circle1: null,
         circle2: null,
         circle3: null
      }
   },
   methods: {
      prev_img(){
         (this.show_img === 1) ? this.show_img = 3 : this.show_img--;
      },
      next_img(){
         (this.show_img === 3) ? this.show_img = 1 : this.show_img++;
      }
   },
   watch: {
      show_img: {
         immediate: true,
         handler(){
            if (this.show_img === 1){
               this.circle1 = true;
               this.circle2 = false;
               this.circle3 = false;
            } else if (this.show_img === 2){
               this.circle1 = false;
               this.circle2 = true;
               this.circle3 = false;
            } else {
               this.circle1 = false;
               this.circle2 = false;
               this.circle3 = true;
            }
         }
      }
   }
}
</script>

<style scoped>

.main-img-enter-active,
.main-img-leave-active{
   transition: all 0.1s;
}

.main-img-enter{
   opacity: 0;
}

.main-img-enter-to{
   opacity: 1;
}

.main-img-leave{
   opacity: 1;
}

.main-img-leave-to{
   opacity: 0;
}

.white{color:white;}

.arrow-left,
.arrow-right{
   position: absolute;
   font-weight: bold;
   color: white;
   font-size: 90px;
   top: calc(50% - 45px);
   cursor: pointer;
   opacity: 0.3;
   text-shadow: 0 0 5px black;
}
.arrow-left:hover,
.arrow-right:hover{
   opacity: 1;
}

.arrow-left{
   left: 20px;
}

.arrow-right{
   right: 20px;
}

.dots-wrapper{
   position: absolute;
   display: block;
   bottom: 20px;
   font-size: 35px;
   width: 100px;
   text-align: center;
   letter-spacing: 10px;
   user-select: none;
   left: calc(50% - 50px);
   color: grey;
}

.font-img-full{
   position: relative;
   height: 100%;
   width: 100%;
   object-fit: cover;
}

.img-wrapper{
   position: absolute;
   top: 50px;
   left: 0;
   width: 100%;
   height: calc(100% - 50px);
   vertical-align: baseline;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-select: none;
}

.content-wrapper{
   position: absolute;
   top: 100%;
   width: 100%;
   height: auto;
}

</style>