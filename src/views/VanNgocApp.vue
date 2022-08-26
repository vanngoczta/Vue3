<template>
  <div class="about">
    <VanNgoc />
    <router-link to="/van-ngoc/register">Dang ky</router-link>
    <br />
    <router-link to="/van-ngoc/login">Dang nhap</router-link>
    <br />
    <router-link to="/van-ngoc/profile">Ho so ca nhan</router-link>
    <br />
    <router-link to="/van-ngoc/posts">bai dang</router-link>
    <router-view></router-view>
  </div>
</template>




<script>
// @ is an alias to /src
import VanNgoc from "@/components/vanngoc/VanNgoc.vue";

export default {
  name: "HomeView",
  components: {
    VanNgoc,
  },
};
</script>
