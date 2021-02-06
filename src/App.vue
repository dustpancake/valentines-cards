<template>
  <div id="app">
    <div id="header">
      <Header />
    </div>
    <router-view/>
  </div>
</template>


<style>
.valentine {
    background-color: pink;
    color: #151515;
    outline-color: pink;
}
.valentine:hover{
    background-color: #F5A9E1;
}
</style>


<script>
import Header from "@/components/Header"

export default {
  name: "App",
  components: {
    Header
  }
}
</script>