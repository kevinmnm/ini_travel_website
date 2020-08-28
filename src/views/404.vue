<template>
   <div class="missing-page">
      <img class="missing-page-img" :src="require('@/assets/404.png')" alt="404.png" draggable="false" />
   </div>
</template>

<script>
export default {
   name: "missingPage"
};
</script>

<style scoped>

.missing-page-img{
   position: relative;
   object-fit: contain;
   width: 95%;
   height: 95%;
   top: 2.5%;
   margin: auto;
   overflow: hidden;
   border: 1px solid blue;
}

@media only screen and (max-width: 500px) {
   .missing-page-img{
      object-fit: scale-down;
   }
}

.missing-page{
   position: absolute;
   top: 50px;
   left: 0;
   width: 100%;
   height: calc(100% - 50px);
   overflow: auto;
   box-sizing: border-box;
   user-select: none;
}


</style>