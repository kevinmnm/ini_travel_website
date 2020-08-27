<template>
  <div class='cities-section'>
     <div class='cities-title'><u>Cities</u></div>
     <br>
     <div class='cities-loop'>
        <div class='cities-name'></div>
        <div class='cities-img-wrap'>
           <img class='cities-img' :src="require(`@/assets/${}`)" alt="cities img" />
        </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.cities-title{
   font-size: 30px;
   font-weight: bold;
}

.cities-section{
   position: relative;
   margin-top: 75px;
   text-underline-position: under;
   width: 75%;
   margin: auto;
}

</style>