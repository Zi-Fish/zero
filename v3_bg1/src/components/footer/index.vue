<template>
    <div class="footer">
      <div class="site">备案号：<a href="https://beian.miit.gov.cn" target="_blank">蜀ICP备2022016594号-1</a></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer{
    position: fixed;
    bottom: 0.5rem;
    margin-top: 10px;
    width: 100%;
    height: 1rem;
  }
  .site{
    text-align: center;
    color: #000;
  }
  a{
    tab-size: 1rem;
    color: rgb(63, 24, 162);
    text-decoration: none;
  }
  </style>