<template>
  <van-tree-select
    v-if="index == 0"
    v-model:main-active-index="active"
    :items="items"
    height="80%"
    @click-nav="clickNav"
  >
    <template #content>
      <van-checkbox-group v-model="checked" shape="square">
        <div v-for="(subItem, index) in subItems" :key="index" class="sub-item">
          <div class="subItem-left">
            <img .src="subItem.pic" alt="" />
            <div class="subItem-left-right">
              <div>{{ subItem.title }}</div>
              <div>
                <van-stepper
                  v-model="subItem.num"
                  min="0"
                  input-width="28px"
                  button-size="25px"
                  @change="changeNum"
                />
              </div>
            </div>
          </div>
          <div>${{ subItem.price }}</div>
        </div>
      </van-checkbox-group>
    </template>
  </van-tree-select>

  <div v-else>{{ item.data.content }}</div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  props: ["index", "item"],
  setup(props) {
    let subItems = [];
    const items = props.item.data?.items?.map((i, index) => {
      if (index == 0) {
        subItems = i.children;
      }
      return {
        text: i.text,
      };
    });

    let data = reactive({
      active: 0,
      items,
      subItems,
    });

    const clickNav = (index) => {
      data.active = index;
      props.item.data?.items?.forEach((element, i) => {
        if (index === i) data.subItems = element.children;
      });
    };

    const changeNum = (value, detail) => {
      console.log(value);
      console.log(detail);
      console.log(data.subItems);
    };

    return {
      ...toRefs(data),
      clickNav,
      changeNum,
    };
  },
};
</script>
<style lang="less" scoped>
.van-tree-select {
  position: absolute;
  bottom: 44;
  // top: 44;
  left: 0;
  right: 0;
  .sub-item {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    font-weight: 500;
    font-size: 16px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
    .subItem-left {
      display: flex;
      .subItem-left-right {
        margin-left: 6px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}
</style>
