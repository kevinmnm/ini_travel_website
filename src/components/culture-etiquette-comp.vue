<template>
   <div class='etiquette-section'>
      <div class='etiquette-section-wrap'>
         <div class='etiquette-title'><u>Etiquette</u></div>
         <br>
         <div class='etiquette-content'>{{ content }}</div>
         <br>
         <div class='etiquette-content' style="font-weight: bold;">{{ content2 }}</div>
         
         <ul class='etiquette-ul'>
            <li>Never use your left hand for anything. Don't touch anyone with it, don't eat with it, don't pick things up with it – as it's considered the hand you use to wipe yourself in the bathroom. If you're left-handed and suddenly everyone looks at you with disgust, that's what's going through their minds.</li>
            <li>Remember to remove your shoes or sandals at the door to a house, and don't show the soles of your feet to anyone.</li>
            <li>Use your right thumb to point at things - pointing with the index finger is considered rude.</li>
            <li>Always bend slightly when meeting or greeting an Indonesian older than you or in a position of authority.</li>
            <li>Put your resting bitch-face away. Looking at someone the wrong way can be interpreted as disrespectful. </li>
         </ul>
      </div>
      <br><br>
   </div>
</template>

<script>
export default {
   name: "etiquetteComp",
   data(){
      return {
         content: `Indonesia may seem like a difficult place to get around in, and for Westerners it's definitely a travel experience that you have to prepare for. But, the rich traditions, history and culture are worth the difficulty of following the rules of etiquette.`,
         content2: `These are just basic pointers to follow if you find yourself in a social situation in Indonesia.`
      }
   }
}
</script>

<style scoped>
.etiquette-ul li{
   margin: 10px;
}
.etiquette-ul{
   text-align: left;
   padding: 10px;
   background: whiteSmoke;
   border-radius: 5px;
}

.etiquette-content{
   position: relative;
   width: 100%;
   text-align: left;
   text-indent: 15px;
}

.etiquette-title{
   position: relative;
   font-size: 30px;
   font-weight: bold;
   user-select: none;
}

.etiquette-section-wrap{
   position: relative;
   width: 80%;
   margin: auto;
}

.etiquette-section{
   position: relative;
   width: 75%;
   margin: auto;
   margin-top: 100px;
   text-underline-position: under;
}

</style>