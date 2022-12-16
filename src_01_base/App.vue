<template>
<div>
  <img src="./assets/logo.png" alt="logo">
  <school></school>
  <student> </student>
</div>
</template>

<script>
// 引入组件
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  components:{
  School,Student
  }
}
</script>

<style scoped>

</style>
