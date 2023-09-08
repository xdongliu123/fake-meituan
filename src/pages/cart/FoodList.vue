<template>
  <div class="food-list">
    <van-checkbox-group
      v-model="checked"
      class="checkbox-group"
      checked-color="#ee0a24"
      @change="handleChange"
    >
      <div
        v-for="(item, index) in store.state.cartList"
        :key="index"
        class="sub-item"
      >
        <div class="subItem-left">
          <van-checkbox :name="item.id" class="checkbox" />
          <img .src="item.pic" alt="" />
          <div class="subItem-left-right">
            <div>{{ item.title }}</div>
            <div>
              <van-stepper
                v-model="item.num"
                min="0"
                input-width="28px"
                button-size="25px"
                @change="changeNum"
              />
            </div>
          </div>
        </div>
        <div>${{ item.price }}</div>
      </div>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
      class="submit-bar"
    >
      <van-checkbox v-model="checkAll" @change="handleAllChange"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
export default {
  setup() {
    const store = useStore();
    let checked = ref([]);
    let checkAll = ref(true);
    const totalPrice = computed(() => {
      let total = 0;
      store.state.cartList.forEach((item) => {
        if (checked.value.includes(item.id)) {
          total += item.price * item.num;
        }
      });
      return total * 100;
    });

    // 在组件挂载时执行
    onMounted(() => {
      updateCheckAll();
    });

    function handleChange() {
      updateCheckAll();
    }

    function handleAllChange(value) {
      if (value) {
        checked.value = store.state.cartList.map((item) => item.id);
      } else {
        checked.value = [];
      }
    }

    const updateCheckAll = () => {
      let checkNum = 0;
      store.state.cartList.forEach((item) => {
        if (checked.value.includes(item.id)) {
          checkNum += 1;
        }
      });
      checkAll.value = checkNum === store.state.cartList.length;
    };

    return {
      store,
      checked,
      totalPrice,
      checkAll,
      handleChange,
      handleAllChange,
    };
  },
};
</script>
<style lang="less" scoped>
.food-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  .submit-bar {
    position: absolute;
    bottom: 0px;
  }
  .checkbox-group {
    position: absolute;
    overflow-y: auto;
    top: 5px;
    bottom: 55px;
    left: 10px;
    right: 10px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    flex: 1;

    .sub-item {
      margin: 10px;
      display: flex;
      justify-content: space-between;
      align-items: start;
      font-weight: 500;
      font-size: 16px;
      .checkbox {
        margin-left: 5px;
        margin-right: 10px;
      }
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
}
</style>
