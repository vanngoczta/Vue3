<template>
  <div class="home">
    
    <HelloWorld2 msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld2 from "@/components/HelloWorld2.vue";

export default {
  name: "HomeView2",
  components: {
    HelloWorld2,
  },
};
</script>
