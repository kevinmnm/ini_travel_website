<template>
  <div class='modal-img-wrap'>
      <div class='img-flex'>
         <div :class="{'img-wrap': !zoom, 'zoom-in': zoom}" v-for="all in imgs" :key='all.file' @click="zoomer($event)">
            
            <img 
            :class="{'imgs': !zoom, 'zoom-in-img': zoom}" 
            :src="require('@/assets/' + all.file)" 
            alt='modal img' 
            draggable='false' 
            />
            
         </div>
      </div>
  </div>
</template>

<script>
const img_list = [
   {
      file: 'modal_img_1.png'
   },
   {
      file: 'modal_img_2.png'
   },
   {
      file: 'modal_img_3.png'
   },
   {
      file: 'modal_img_4.png'
   },
   {
      file: 'modal_img_5.png'
   }
];

export default {
   name: "modalImgComp",
   data(){
      return{
         imgs: img_list,
         zoom: false
      }
   },
   methods: {
      zoomer(e){
         if (e.target.classList.contains('zoom-in')){
            this.zoom = false;
         } else {
            this.zoom = true;
         }
      }
   }
}
</script>

<style scoped>

.imgs{
   position: absolute;
   height: 220px;
   width: 155px;
   left: 10px;
   top: 10px;
   cursor: zoom-in;
   transition: all 0.1s linear;
}
.imgs:hover{
   transform: scale(1.1);
   box-shadow: 0 0 7px black;
}
.img-wrap{
   position: relative;
   height: 240px;
   width: 175px;
}
.img-flex{
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   padding: 3px;
   justify-content: space-around;
}
.modal-img-wrap{
   position: relative;
   margin-top: 65px;
   margin: auto;
   width: 80%;
   box-sizing: border-box;
   user-select: none;
}

.zoom-in{
   position: fixed !important;
   z-index: 5 !important;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   background-color: rgb(0,0,0,0.1);
   cursor: zoom-out;
}
.zoom-in-img{
   position: relative;
   display: block;
   margin: auto;
   cursor: default;
   height: 90%;
   top: 5%;
   object-fit: cover;
   /* width: 620px;
   height: 877px; */
   
}

@media only screen and (max-width: 700px) {

}

</style>