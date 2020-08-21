<template>
   <div class="container" :class="{change: add_class}" @click="animator()">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
   </div>
</template>

<script>
export default {
   name: "hamburgerIcon",
   data() {
      return {
         add_class: false,
      };
   },
   methods: {
      animator() {
         this.add_class = !this.add_class;
      }
   },
   watch: {
      add_class(){
         this.$emit('expand-nav', this.add_class);
      }
   }
};
</script>

<style scoped>
.container {
   display: inline-block;
   cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
   width: 35px;
   height: 5px;
   background-color: white;
   margin: 6px 0;
   transition: 0.3s;
   border-radius: 2px;
}

.change .bar1 {
   -webkit-transform: rotate(-45deg) translate(-9px, 6px);
   transform: rotate(-45deg) translate(-9px, 6px);
   background-color: white;
}

.change .bar2 {
   opacity: 0;
   background-color: white;
}

.change .bar3 {
   -webkit-transform: rotate(45deg) translate(-8px, -8px);
   transform: rotate(45deg) translate(-8px, -8px);
   background-color: white;
}

</style>