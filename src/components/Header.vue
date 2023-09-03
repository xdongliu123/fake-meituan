<template>
  <div class="nav-bar">
    <div @click="back" class="back">
      <van-icon name="arrow-left" class="icon" />
    </div>
    <div>{{ title }}</div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  props: ["title"],

  setup() {
    const router = useRouter();
    const back = () => {
      console.log("xxxx");
      router.back();
    };
    return { back };
  },
};
</script>
<style lang="less" scoped>
.nav-bar {
  display: flex;
  background-color: #fff;
  height: 44px;
  font-size: 20px;
  border-bottom: 1px solid #d7d7d7;
  justify-content: center;
  align-items: center;

  .back {
    position: absolute;
    left: 10px;
  }
}
</style>
