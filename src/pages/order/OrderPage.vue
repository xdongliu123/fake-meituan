<template>
  <div class="container">
    <div class="content">订单</div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
export default { components: { Footer } };
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
