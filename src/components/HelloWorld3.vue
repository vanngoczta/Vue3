<template>
<div class="main"> 
<h1>Login</h1>
  <div >
    <label>Username: </label>
    <input>
    <br>
    <label type="password">Password: </label>
    <input>
    <br>
   
  </div>
   <button>Submit</button>
</div>
  
</template>

<script>
export default {
  name: "HelloWorld3",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
label{
  margin: 10px 20px;
}
input{
  margin: 10px
}
.main{
  border-radius: 3px;
  padding: 20px 0;
  max-width: 500px;
  background-color: rgb(21,32,43);
  margin: auto;
  color: while;
}
button{
  padding: 7px 12px;
}
</style>
