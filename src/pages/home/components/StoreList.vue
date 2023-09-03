<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <StoreCell :data="item" @click="clickCell" />
    </li>
  </ul>
</template>
<script>
import StoreCell from "./StoreCell.vue";
import { useRouter } from "vue-router";
export default {
  props: ["list"],
  components: { StoreCell },
  setup() {
    const router = useRouter();
    function clickCell() {
      router.push("./store");
    }
    return {
      clickCell,
    };
  },
};
</script>
<style lang="less" scoped></style>
