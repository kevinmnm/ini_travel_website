<template>
   <div>
      <div class='img-wrapper'>
         <transition name='main-img' mode="out-in">
            <img class="front-img-full" v-if="show_img === 1" alt="front-img1" :src="require(`../assets/${img_src1}`)" draggable="false" key="q1"/>
            <img class="front-img-full" v-else-if="show_img === 2" alt="front-img2" :src="require(`../assets/${img_src2}`)" draggable="false" key="q2" />
            <img class="front-img-full" v-else alt="front-img3" :src="require(`../assets/${img_src3}`)" draggable="false" key="q3" />
         </transition>

         <div class='front-text-wrap'>
            <transition-group name='main-text'>
               <div class='front-text-1' key='123' v-show='main_text_1'>Welcome to INITRAVEL!</div>
               <div class='front-text-2' key='321' v-show='main_text_2'>This website is built with <span class='vue'>Vue.js</span> as a portfolio project.</div>
               <div class='front-text-3' key='132' v-show='main_text_3' onclick="window.open('https://github.com/kevinmnm/ini_travel_website')">GITHUB</div>
            </transition-group>
         </div>

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
         circle3: null,
         main_text_1: false,
         main_text_2: false,
         main_text_3: false
      }
   },
   methods: {
      prev_img(){
         this.main_text_1 = false;
         this.main_text_2 = false;
         this.main_text_3 = false;
         (this.show_img === 1) ? this.show_img = 3 : this.show_img--;
      },
      next_img(){
         this.main_text_1 = false;
         this.main_text_2 = false;
         this.main_text_3 = false;
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
   },
   mounted(){

      setTimeout(()=>{
         this.main_text_1 = true;
         setTimeout(()=>{
            this.main_text_2 = true;
            setTimeout(()=>{
               this.main_text_3 = true;
            },1000);
         },1000);
      },1000);

   }
}
</script>

<style scoped>

.main-text-enter{
   opacity: 0;
   transform: translateY(-100px);
}
.main-text-enter-to{
   opacity: 1;
}

.main-text-leave-to{
   opacity: 0;
   transform: scale(0.1);
}

.main-text-enter-active,
.main-text-leave-active{
   transition: 0.6s;
}


.front-text-1{
   font-family: 'Balsamiq Sans';
   /* color: rgb(98, 27, 27); */
   color: rgb(134, 34, 34);
   text-shadow: 0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white;
}

.front-text-1{
   font-weight: bold;
   font-size: 70px;
}

.front-text-2{
   position: relative;
   font-size: 50px;
   font-weight: bold;
   text-shadow: 0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white,0 0 30px white;
   margin-top: 70px;
   font-family: 'Balsamiq Sans';
   color: black;
}
.vue{
   color: green;
}

.front-text-3{
   position: relative;
   width: 150px;
   top: 60%;
   padding: 10px;
   padding-top: 20px;
   padding-bottom: 20px;
   left: calc(50% - 75px);
   font-size: 20px;
   text-align: center;
   margin-top: 50px;
   /* background: rgba(141, 37, 37, 0.404); */
   text-shadow: 0 0 20px white,0 0 20px white,0 0 20px white,0 0 20px white,0 0 20px white,0 0 20px white,0 0 20px white,0 0 20px white,0 0 20px white,0 0 20px white,0 0 20px white,0 0 20px white;
   color: black;
   border-radius: 2px;
   font-family: 'Nunito', sans-serif;
   cursor: pointer;
   font-weight: bold;
}

.front-text-3:hover{
   text-shadow: 0 0 20px brown,0 0 20px brown,0 0 20px brown,0 0 20px brown,0 0 20px brown,0 0 20px brown,0 0 20px brown,0 0 20px brown,0 0 20px brown,0 0 20px brown,0 0 20px brown,0 0 20px brown;
   color: white;
}

@media only screen and (max-width: 1000px) {
   .front-text-1{
      font-size: 50px;
   }

   .front-text-2{
      font-size: 30px;
   }

   .front-text-3{
      font-size: 18px;
   }
}

@media only screen and (max-width: 600px) {
   .front-text-1{
      font-size: 30px;
   }

   .front-text-2{
      font-size: 15px;
   }

   .front-text-3{
      font-size: 12px;
   }
}

.front-text-wrap{
   position: absolute;
   top: 10%;
   width: 80%;
   height: 80%;
   left: 10%;
   line-height: 1.6;
}

.main-img-enter-active,
.main-img-leave-active{
   transition: 0.1s;
}

.main-img-enter{
   opacity: 0;
   /* transform: scale(0.5) rotateZ(90deg); */
}

.main-img-leave-to{
   opacity: 0;
   /* transform: scale(0.5) rotateZ(-90deg); */
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

.front-img-full{
   position: relative;
   height: 100%;
   width: 100%;
   object-fit: cover;
   background-color: transparent;
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
   background-color: transparent;
}

.content-wrapper{
   position: absolute;
   top: 100%;
   width: 100%;
   height: auto;
}

</style>