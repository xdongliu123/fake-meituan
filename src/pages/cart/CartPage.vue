<template>
  <div class="container">
    <Header title="购物车" />
    <Empty v-if="showEmpty" class="empty" />
    <FoodList v-else />
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";
import Empty from "../../components/Empty.vue";
import FoodList from "./FoodList.vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { onMounted } from "vue";
export default {
  components: { Header, Footer, Empty, FoodList },
  setup() {
    const store = useStore();
    let showEmpty = ref(false);
    onMounted(() => {
      showEmpty.value = store.state.cartList.length === 0;
    });
    return {
      showEmpty,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .empty {
    font-size: 20px;
    text-align: center;
    flex: 1;
  }
}
</style>
