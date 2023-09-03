<template>
  <div class="store_">
    <Header title="店铺" />
    <div class="content">
      <div class="cover" />
      <div class="main">
        <div class="main-header">
          {{ title }}
          <img .src="img" />
        </div>
        <van-tabs color="#ffc400" v-model:active="active" class="tabs">
          <van-tab
            v-for="(item, index) in storeData"
            :key="index"
            :title="`${item.name}`"
            class="tab"
          >
            <FoodList :index="index" :item="item" />
          </van-tab>
        </van-tabs>
        <van-action-bar class="action-bar">
          <van-action-bar-icon
            icon="chat-o"
            text="客服"
            dot
            @click="contactService"
          />
          <van-action-bar-icon
            icon="cart-o"
            text="购物车"
            :badge="store.getters.cartListCount"
          />
          <van-action-bar-button
            type="warning"
            text="加入购物车"
            @click="addToCart"
          />
          <van-action-bar-button
            type="danger"
            text="立即购买"
            @click="buyNow"
          />
        </van-action-bar>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header.vue";
import { toRefs, reactive } from "vue";
import FoodList from "./FoodList.vue";
import { Toast } from "vant";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: { Header, FoodList },
  setup() {
    const store = useStore();
    const router = useRouter();

    const contactService = () => {
      Toast.fail("待开发");
    };

    let data = reactive({
      title: "鱼拿酸菜鱼",
      img: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
      storeData: [
        {
          name: "点菜",
          data: {
            content: "点菜",
            items: [
              {
                text: "热销套餐",
                children: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "招牌酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 0,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "藤椒酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 1,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "招牌酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 2,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "藤椒酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 3,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "招牌酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 4,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "藤椒酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 5,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "招牌酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 6,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "藤椒酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 7,
                    add: true,
                  },
                ],
              },
              {
                text: "澳洲肥牛",
                children: [
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                    title: "酸汤肥牛",
                    num: 0,
                    price: 25.0,
                    id: 3,
                    add: true,
                  },
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                    title: "香辣肥牛",
                    num: 0,
                    price: 25.0,
                    id: 4,
                    add: true,
                  },
                ],
              },
              {
                text: "超级折扣",
                children: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "无骨酸菜鱼+肥牛双拼",
                    num: 0,
                    price: 25.0,
                    id: 5,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "香辣水煮鱼+肥牛双拼",
                    num: 0,
                    price: 25.0,
                    id: 6,
                    add: true,
                  },
                ],
              },
            ],
          },
        },
        { name: "评价", data: { content: "评价" } },
        { name: "商家", data: { content: "商家" } },
      ],
    });

    const buyNow = () => {
      addToCart("buy");
    };

    const addToCart = (type) => {
      let cartList = [];
      data.storeData.forEach((item) => {
        item.data.items?.forEach((subItem) => {
          subItem.children.forEach((grandItem) => {
            if (grandItem.num > 0) {
              cartList.push(grandItem);
            }
          });
        });
      });
      if (cartList.length == 0) {
        Toast.fail("请选择商品");
        return;
      }
      store.commit("ADDCART", cartList);
      type == "buy" ? jump2Cart() : "";
    };

    const jump2Cart = () => {
      router.push("./cart");
    };

    return {
      ...toRefs(data),
      contactService,
      addToCart,
      buyNow,
      store,
    };
  },
};
</script>
<style lang="less" scoped>
.store_ {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .content {
    background-color: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    .cover {
      background: url("../../assets/yuna.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .main {
      padding: 0 10px;
      position: relative;
      top: -15px;
      border-radius: 20px 20px 0 0;
      background-color: #fff;
      flex: 1;
      display: flex;
      flex-direction: column;
      //overflow: hidden;
      .action-bar {
        height: 50px;
      }
      .tabs {
        flex: 1;
        display: flex;
        flex-direction: column;
        /deep/ .van-tabs__content {
          flex: 1;
          .tab {
            height: 100%;
            //position: relative;
          }
        }
      }
      .main-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin: 0 10px;
        top: -10px;
        font-size: 22px;
        font-weight: 500;
        img {
          width: 80px;
          height: 80px;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>
