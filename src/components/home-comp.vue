<template>
   <div>
      <div class='img-wrapper'>
         <img class="font-img-full" alt="front-img" :src="require(`../assets/${img_src2}`)" draggable="false"/>
         <div class='dots-wrapper'>
            <span>&#x25CF;</span>
            <span>&#x25CF;</span>
            <span>&#x25CF;</span>
         </div>
         <div class="arrow-left">&#60;</div>
         <div class="arrow-right">&#62;</div>
      </div>

      <div class='content-wrapper'>
         asdfadf
      </div>
   </div>
</template>

<script>

export default {
   name: "homeComp",
   data(){
      return {
         img_src1: 'front1_2400x1600.jpg',
         img_src2: 'front2_1980x1080.png'
      }
   }
}
</script>

<style scoped>

.arrow-left,
.arrow-right{
   position: absolute;
   font-weight: bold;
   color: white;
   font-size: 60px;
   top: calc(50% - 30px);
   cursor: pointer;
   opacity: 0.3;
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
   font-size: 20px;
   width: 100px;
   text-align: center;
   letter-spacing: 10px;
   user-select: none;
   left: calc(50% - 50px);
   color: lightGrey;
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