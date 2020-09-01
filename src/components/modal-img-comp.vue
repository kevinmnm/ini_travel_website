<template>
  <div class='modal-img-wrap'>
      <div class='img-flex'>
         <div class='close-modal-img' @click.self="close_out()" v-show='close_x'>X</div>
         <div class='img-wrap' @click.self="zoom_out($event)" v-for="all in imgs" :key='all.file'>

            <img 
            @click.self="zoom_in($event)" 
            class='imgs' 
            :class="{'show_ani': fade_in, 'opacity-0': !fade_in}" 
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
         window_innerHeight: null,
         window_scrollY: null,
         imgs_top: null,
         fade_in: false,
         img_el: null,
         imgs_rect: null,
         close_x: false
      }
   },
   methods: {
      zoom_in(e){ //Applying to img
         e.target.classList.add('zoom-in-img');
         e.target.parentNode.classList.add('zoom-in');
         e.target.classList.remove('imgs');
         e.target.parentNode.classList.remove('img-wrap');
         document.body.style.overflow = 'hidden';
         this.close_x = true;
      },
      zoom_out(e){ //Applying to img-wrap
         e.target.classList.add('img-wrap');
         e.target.childNodes[0].classList.add('imgs');
         e.target.classList.remove('zoom-in');
         e.target.childNodes[0].classList.remove('zoom-in-img');
         document.body.style.overflow = 'auto';
         this.close_x = false;
      },
      close_out(){
         let zoom_in_img = document.querySelectorAll('.zoom-in-img');
         let zoom_in = document.querySelectorAll('.zoom-in');
         document.body.style.overflow = 'auto';

         for (let i=0; i<zoom_in.length; i++){
            zoom_in_img[i].classList.add('imgs');
            zoom_in_img[i].classList.remove('zoom-in-img');
            zoom_in[i].classList.add('img-wrap');
            zoom_in[i].classList.remove('zoom-in');
         }
      },
      scroll_trigger(){
         this.img_el = document.querySelector('.img-wrap');
         this.imgs_rect = this.img_el.getBoundingClientRect();
         this.window_innerHeight = window.innerHeight;
         let half_height = this.imgs_rect.height / 2;
         let el_top = this.imgs_rect.top;

         if (window.scrollY >=  el_top + half_height){
            this.fade_in = true;
         }
      }
   },
   created(){
      window.addEventListener('scroll', this.scroll_trigger);
   },
   destroyed(){
      window.removeEventListener('scroll', this.scroll_trigger);
   }
}
</script>

<style scoped>

.close-modal-img{
   position: fixed;
   top: 10px;
   right: 10px;
   z-index: 6;
   font-size: 30px;
   cursor: pointer;
   color: white;
   font-weight: bold;
   text-shadow: 0 0 5px black;
}

.close-modal-img:hover{
   color: red;
}

.opacity-0{
   opacity: 0;
}

.show_ani{
   animation: show_ani 0.5s linear;
}

@keyframes show_ani{
   from {
      top: 50px;
      opacity: 0;
   }
   to {
      top: 10px;
      opacity: 1;
   }
}

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
   box-shadow: 0 0 10px black;
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

@media only screen and (max-width: 700px) {
   .zoom-in-img{
      width: 90%;
      height: 90%;
   }
}

</style>