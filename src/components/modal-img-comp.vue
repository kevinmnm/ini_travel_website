<template>
  <div class='modal-img-wrap'>
      <div class='img-flex'>
         <div class='img-wrap' @click.self="zoom_out($event)" v-for="all in imgs" :key='all.file'>
            
            <img 
            @click.self="zoom_in($event)" 
            class='imgs' 
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
         imgs: img_list
      }
   },
   methods: {
      zoom_in(e){ //Applying to img
         e.target.classList.add('zoom-in-img');
         e.target.parentNode.classList.add('zoom-in');
         e.target.classList.remove('imgs');
         e.target.parentNode.classList.remove('img-wrap');
         document.body.style.overflow = 'hidden';
      },
      zoom_out(e){ //Applying to img-wrap
         e.target.classList.add('img-wrap');
         e.target.childNodes[0].classList.add('imgs');
         e.target.classList.remove('zoom-in');
         e.target.childNodes[0].classList.remove('zoom-in-img');
         document.body.style.overflow = 'auto';
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

@media only screen and (max-width: 500px) {
   .img-wrap{
      position: relative;
      width: 90%;
      border: 1px solid green;
      text-align: center;
   }
   .imgs{
      position: relative;
      left: 0;
      top: 0;
      margin: auto;
      width: 100%;
      object-fit: cover;
   }
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
   margin: auto;
   margin-top: 65px;
   width: 85%;
   box-sizing: border-box;
   user-select: none;
}

.zoom-in{
   position: fixed;
   z-index: 5;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   background-color: rgb(0,0,0,0.7);
   cursor: zoom-out;
}
.zoom-in-img{
   position: relative;
   display: block;
   margin: auto;
   cursor: default;
   height: 90%;
   top: 5%;
   object-fit: contain;
   /* width: 620px;
   height: 877px; */
}

@media only screen and (max-width: 500px) {
   .zoom-in-img{
      width: 90%;
      height: 90%;
   }
}

</style>