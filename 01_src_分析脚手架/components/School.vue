<template>
  <div>
<!--    <h2>学校名称:{{ schoolname }}</h2>-->
<!--    <h2>学校地址:{{ schooladdr }}</h2>-->
<!--    <button @click="show">点击提示学校名称</button>-->
<!--    <el-row>-->
<!--      <el-button type="primary" :loading="buttonloading" @click="change">{{ buttontext }}</el-button>-->
<!--      &lt;!&ndash;      <el-button type="primary">主要按钮</el-button>&ndash;&gt;-->
<!--      &lt;!&ndash;      <el-button type="success">成功按钮</el-button>&ndash;&gt;-->
<!--      &lt;!&ndash;      <el-button type="info">信息按钮</el-button>&ndash;&gt;-->
<!--      &lt;!&ndash;      <el-button type="warning">警告按钮</el-button>&ndash;&gt;-->
<!--      &lt;!&ndash;      <el-button type="danger">危险按钮</el-button>&ndash;&gt;-->
<!--    </el-row>-->
    <div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>


</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<!--<script>-->
<!--export default {-->
<!--  // eslint-disable-next-line vue/multi-word-component-names-->
<!--  name: "School",-->
<!--  data() {-->
<!--    return {-->
<!--      schoolname: '三六五学院',-->
<!--      schooladdr: '南京',-->
<!--      buttonloading: false,-->
<!--      buttontext: '点击加载'-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    show() {-->
<!--      alert(this.schoolname)-->
<!--    },-->
<!--    change() {-->
<!--      this.buttonloading = true-->
<!--      this.buttontext='加载中'-->
<!--      setTimeout(()=>{-->
<!--        console.log('wait')-->
<!--        this.buttonloading = false-->
<!--        this.buttontext='点击加载'-->
<!--        alert('加载成功')-->
<!--      },3000)-->


<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<style scoped>
.shcool {
  background-color: aqua;
}
</style>