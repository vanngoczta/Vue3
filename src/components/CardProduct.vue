<template>

    <a-card hoverable style="width: 100%">
        <template #cover>
            <img alt="example" src="https://picsum.photos/200/300" />
        </template>
        <a-card-meta title="Europe Street beat">
            <template #description>
                <a-input-number id="inputNumber" v-model:value="value" :min="0" :max="10" />
               <a-button type="primary" @click="()=>openNotification(value)">Thêm vào giỏ</a-button>
                <div>
                </div>
            </template>
        </a-card-meta>
    </a-card>

</template>

<script>
import { notification } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
export default {
    name: "CardProduct",
    props: {
        msg: String,
    },
    setup() {
        const value = ref(0);
        const openNotification =
            (value) => {
                notification.open({
                    message: 'Notification Title',
                    description: `Đã thêm ${value} sản phẩm vào giỏ hàng.`,
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            };

        return {
            openNotification,
            value


        };
    }
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
