<template>
<div class="student">
  <h2>学生姓名:{{name}}</h2>
  <h2>学生年龄:{{age}}</h2>
  <button @click="show">点击显示姓名</button>
</div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return{
      name:'鱼仔',
      age:18
    }
  },methods:{
    show(){
      alert(this.name)
    }
  }
}
</script>

<style scoped>
.student{
  background-color: cadetblue;
}
</style>