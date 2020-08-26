<template>
<div>
  <home-comp></home-comp>

  </div>
</template>

<script>
import home_comp from "@/components/home-comp.vue"

export default {
  name: 'Home',
  components: {
     "home-comp": home_comp
  }
}
</script>
