<template>
  <div class="login">
    <h1> LoginVN</h1>
    <fieldset>
      <legend>Dang ky</legend>
      <div>
        <label>ten dang nhap</label>
        <input />
      </div>
      <div>
        <label>Mat khau</label>
        <input type='password' />
      </div>
      <div>
        <label>Xac nhan mat khau</label>
        <input type='password' />
      </div>
      <div>
        <button> dang ky</button>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "RegisterVN",
  props: {
    msg: String,
  },
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
