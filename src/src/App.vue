<template>
  <div id="app">
    <head-bar></head-bar>
    <el-row>
      <el-col :span="4"><div class="grid-side"></div></el-col>
      <el-col :span="16"><router-view/></el-col>
      <el-col :span="4"><div class="grid-side"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.grid-side {
    border-radius: 4px;
    min-height: 36px;
}
</style>
