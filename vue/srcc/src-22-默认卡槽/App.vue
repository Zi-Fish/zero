<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <ul>
        <li v-for="(f, index) in foods" :key="index">{{ f }}</li>
      </ul>
      <img src="https://s3.ax1x.com/2021/01/16/srjlq0.jpg" alt="" srcset="" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <ul>
        <li v-for="(d, index) in films" :key="index">{{ d }}</li>
      </ul>
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>