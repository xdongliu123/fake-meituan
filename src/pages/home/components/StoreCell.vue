<template>
  <div class="store">
    <img .src="data.pic" />
    <div class="description">
      <div class="title">{{ data.title }}</div>
      <div>已售 {{ data.sales }}</div>
      <div>起送费¥ {{ data.price }} 免配送费</div>
      <div class="labels">
        <div v-for="(label, index) in data.label" :key="index" class="label">
          {{ label }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style lang="less" scoped>
.store {
  margin-top: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    margin-right: 20px;
  }
  .description {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    .title {
      font-size: 15px;
      font-weight: 500;
    }
    .labels {
      display: flex;
      flex-wrap: wrap;
      .label {
        font-size: 9px;
        color: #333;
        padding: 5px;
        border-radius: 5px;
        margin: 5px;
        background-color: #ffc40047;
      }
    }
  }
}
</style>
