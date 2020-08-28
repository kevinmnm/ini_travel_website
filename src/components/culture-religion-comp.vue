<template>
   <div class='religion-section'>
      <div class='religion-wrapper'>
         <div class='religion-heading'><u>Religion</u></div><br>
         <code class='religion-source'><i>Source content: wikipedia.org</i></code>
         <br><br>
         <div class='religion-content'>{{ content }}</div>
         <br>
         <img class='religion-graph' :src="require('@/assets/religion_graph_1.jpg')" draggable='false' />
         <br>
         <img class='religion-graph' :src="require('@/assets/religion_graph_2.jpg')" draggable='false' />
      </div>
      <br>
   </div>
</template>

<script>
export default {
   name: "religionComp",
   data(){
      return{
         content: `Indonesia is officially a republic with a compromise made between the ideas of an Islamic state and a secular state. Indonesia has the world's largest Muslim population and the first principle of Indonesia's philosophical foundation, Pancasila requires its citizens to "believe in the one and only God". Consequently, atheists in Indonesia experience official discrimination in the context of registration of births and marriages and the issuance of identity cards. In addition, Aceh officially enforces Sharia law and is notorious for its discriminatory practices towards religious and sexual minorities. There are also pro-Sharia movements in other parts of the country with overwhelming Muslim majorities.`
      }
   }
};
</script>

<style scoped>

.religion-graph{
   position: relative;
   width: 100%;
   margin-top: 10px;
}

.religion-content{
   position: relative;
   text-align: left;
   text-indent: 20px;
}
.religion-wrapper{
   position: relative;
   width: 75%;
   margin: auto;
}
.religion-source{
   color: lightGrey;
   padding-top: 10px;
}

.religion-heading{
   font-size: 30px;
   font-weight: bold;
   user-select: none;
}

.religion-section{
   position: relative;
   top: 50px;
   background: #2a3326;
   color: white;
   padding-top: 30px;
   text-underline-position: under;
}

</style>