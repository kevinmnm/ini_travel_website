<template>
   <div class='plan-page'>
      <div id='covid_section' class='data-title'><u><b>Indonesia COVID-19 Status</b></u></div>
      <div style='color:brown;'><u>Real-time data</u></div><br>

      <div class='data-date' title='UTC'>{{ lastUpdated }}</div>

      <div class='flex-data'>
         <div class='label'>Total Cases</div>
         <div class='data'>{{ totalCases }}</div>

         <div class='label'>Total Recovered</div>
         <div class='data'>{{ totalRecovered }}</div>

         <div class='label'>Total Deaths</div>
         <div class='data'>{{ totalDeaths }}</div>
      </div>

      <brief-covid-comp></brief-covid-comp>

      <visa-comp id='visa_section'></visa-comp>

      <essentials-comp id='essentials_section'></essentials-comp>
      <br>
   </div>
</template>

<script>
import brief_covid_comp from "@/components/brief-covid-comp.vue"
import visa_comp from "@/components/visa-comp.vue"
import essentials_comp from "@/components/essentials-comp.vue"

export default {
   name: "planComp",
   components: {
      "brief-covid-comp": brief_covid_comp,
      "visa-comp": visa_comp,
      "essentials-comp": essentials_comp
   },
   props: {
      lastUpdated: String,
      totalCases: String,
      totalRecovered: String,
      totalDeaths: String
   },
   data(){
      return {
         time_zone: 'UTC',
      }
   }
}



</script>

<style scoped>

.flex-data div{
   padding: 5px;
}

.data{
   font-size: 18px;
   font-weight: bold;
}

.data-date{
   color: 	maroon;
   font-family: Arial, sans-serif;
   font-weight: bold;
   font-size: 22px;
}

.label{
   background: red;
   font-size: 20px;
   color:white;
}

.flex-data{
   position: relative;
   display: flex;
   flex-direction: column;
   width: 65%;
   margin: auto;
   border: 2px solid red;
}

.data-title{
   font-size: 3.5vw;
   margin-bottom: 15px;
}
@media only screen and (max-width: 700px) {
   .data-title{
      font-size: 30px;
   }
}
.plan-page{
   position: relative;
   top: 70px;
   text-underline-position: under;
   font-family: 'Nunito', sans-serif;
}

</style>