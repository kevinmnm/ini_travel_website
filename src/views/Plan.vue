<template>
   <div>
      <plan-comp
         id="covid"
         :last-updated="last_updated"
         :total-cases="total_cases"
         :total-recovered="total_deaths"
         :total-deaths="total_recovered"
      ></plan-comp>
   </div>
</template>

<script>
import plan_comp from "@/components/plan-comp.vue";

export default {
   name: "PlanPageComp",
   components: {
      "plan-comp": plan_comp
   },
   data() {
      return {
         last_updated: null, //Date
         total_cases: null, //Active
         total_deaths: null, //Deaths
         total_recovered: null, //Recovered
      };
   },
   methods: {
      add_commas(num) {
         return (num = new Intl.NumberFormat("en-IN").format(num));
      },
   },
   created() {
      let covid = new XMLHttpRequest();

      covid.onreadystatechange = () => {
         if (covid.status === 200 && covid.readyState === 4) {
            let covid_parsed = JSON.parse(covid.responseText);
            let covid_parsed_recent = covid_parsed[covid_parsed.length - 1];

            this.last_updated = covid_parsed_recent.Date.substring(0, 10);
            this.total_cases = this.add_commas(covid_parsed_recent.Active);
            this.total_deaths = this.add_commas(covid_parsed_recent.Deaths);
            this.total_recovered = this.add_commas(
               covid_parsed_recent.Recovered
            );
         }
      };
      covid.open("GET", "https://api.covid19api.com/total/country/indonesia");
      covid.send();
   },
};
</script>

<style>
</style>