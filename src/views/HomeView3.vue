<template>
  <div class="home">
    <HelloWorld3 msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld3 from "@/components/HelloWorld3.vue";

export default {
  name: "HomeView3",
  components: {
    HelloWorld3,
  },
};
</script>
