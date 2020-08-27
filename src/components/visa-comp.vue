<template>
   <div class="visa-page">
      <br>
      <div class='page-content'>
         <div class='visa-info'><u>Visa Info</u></div>
         <br>
         <code>*Applicable to US Citizens Only*</code>
         <br><br>
         <div class='visa-flex'>
            <div class='visa-type' v-for='(all, ind) in visa_info' :key='all + ind'>
               <div class='visa-title' @click='visa_shower(ind)'>{{ all.visa_type }}</div>
               <div class='visa-des' v-show='all.visa_show'>
                  <hr>
                  <div><span><u>Description:</u> </span> {{ ' '+all.visa_what }}</div>
                  <div><span><u>Purpose:</u> </span>{{ ' '+all.visa_who }}</div>
                  <div><span><u>Extension:</u></span>{{ ' '+all.visa_extend }}</div>
                  <div><span><u>Requirement:</u></span>{{ ' '+all.visa_requirement }}</div>
                  <div><span><u>Cost:</u></span>{{ ' '+all.visa_cost }}</div>
               </div>
            </div>
         </div>
      </div>
      <br>
   </div>
</template>

<script>
import visa_infos from "@/visa.js"

export default {
   name: "visaComp",
   data(){
      return{
         visa_info: visa_infos
      }
   },
   methods: {
      visa_shower(ind){
         this.visa_info[ind].visa_show = true;
      }
   }
};
</script>

<style scoped>
.visa-des{
   font-size: 18px;
   text-align: left;
}

.visa-des div{
   margin-bottom: 7px;
   color: rgb(66, 66, 66);
}

.visa-des span{
   color: black;
}

.visa-type{
   font-size: 22px;
   margin-bottom: 10px;
   padding: 5px;
   box-sizing: border-box;
   background: whiteSmoke;
   box-shadow: 0 0 2px black;
   border-radius: 3px;
   cursor: pointer;
}

.visa-type:hover{
   background: white;
}

code{
   color: red;
   font-weight: bold;
}

.visa-info{
   font-size: 30px;
   font-weight: bold;
}
.page-content{
   position: relative;
   width: 80%;
   margin: auto;
}

.visa-page {
   position: relative;
   /* background: rgb(222, 184, 135); */
   background: rgb(255,222,173);
   margin-top: 65px;
   text-underline-position: under;
}
</style>