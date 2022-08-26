<template>
  <div class="hello">

    <h1> Danh mục sản phẩm </h1>
   
    <a-row :gutter="[16,16]">
      <a-col :span="8" v-for="i in 100" :key="i">
      <CardProduct/>
      </a-col>


    </a-row>
  </div>
</template>

<script>
import { notification } from 'ant-design-vue';
import { defineComponent ,ref} from 'vue';
import CardProduct from './CardProduct.vue';
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    setup() {
        const value = ref(3);
        const openNotification = () => {
            notification.open({
                message: "Notification Title",
                description: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
                onClick: () => {
                    console.log("Notification Clicked!");
                },
            });
        };
        return {
            openNotification,
            value
        };
    },
    components: { CardProduct }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
