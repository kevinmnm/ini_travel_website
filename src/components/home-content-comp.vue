<template>
   <div class='content-wrapper'>
      <div class='flex-wrap'>
         <router-link :to="{name: 'Plan', params: {id: 'main'}, hash: '#covid_section'}">
            <img :src="require('@/assets/reader.svg')" alt="reader" />
            Plan Your Trip
         </router-link>
         <router-link :to="{name: 'Places', params: {id: 'main'}, hash: '#islands_section'}">
            <img :src="require('@/assets/umbrella.svg')" alt="umbrella" />
            Places To Go
         </router-link>
         <router-link :to="{name: 'Culture', params: {id: 'main'}, hash: '#religion_section'}">
            <img :src="require('@/assets/praying.svg')" alt="praying" />
            Learn The Culture
         </router-link>
      </div>

      <brief-covid-comp></brief-covid-comp>

      <modal-img-comp></modal-img-comp>

      <home-footer-comp></home-footer-comp>

   </div>
</template>

<script>
import brief_covid_comp from "@/components/brief-covid-comp.vue"
import home_footer_comp from "@/components/home-footer-comp.vue"
import modal_img_comp from "@/components/modal-img-comp.vue"

export default {
   name: "homeContentComp",
   components: {
      "brief-covid-comp":  brief_covid_comp,
      "home-footer-comp": home_footer_comp,
      "modal-img-comp": modal_img_comp
   }
}
</script>

<style scoped>

.flex-wrap{
   display: flex;
   flex-wrap: wrap;
   width: 80%;
   margin: auto;
   justify-content: space-around;
   margin-top: 65px;
   user-select: none;
}

.flex-wrap a {
   display: block;
   border: 3px solid rgb(107, 56, 50);
   width: 200px;
   height: 200px;
   box-sizing: border-box;
   margin-bottom: 10px;
   padding: 10px;
   border-radius: 5px;
   box-shadow: 0 0 5px darkGrey;
   text-decoration: none;
   font-size: 20px;
   font-weight: bold;
   background-color: whiteSmoke;
   color: brown;
} 

.flex-wrap a:hover{box-shadow: 0 0 15px darkGrey;background:white;}

</style>