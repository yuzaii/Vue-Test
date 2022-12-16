<template>
  <!--组建的结构-->
  <div class="demo1">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showname">点我提示学生姓名</button>
  </div>
</template>

<script>
// 组件交互的相关代码
//创建school组件


import Vue from "vue";

const Student = Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  // el: "#app", // 不能写el配置项 vm配置
  data() {
    return {
      name: "鱼仔",
      age: 18
    }
  }, methods: {
    showname() {
      alert(this.name)
    }
  },
})
export default Student
// export default school
</script>
<style>
/*组件的样式*/
.demo1 {
  background-color: orange;
}
</style>
