<template>
  <div class="container">
    <div class="content">
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location" />
          <span>位置</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="main">
        <div class="main_bg">
          <div class="search">
            <input type="text" />
            <div class="search_text">搜索</div>
          </div>
          <div class="classify">
            <div class="big_classify">
              <div v-for="(item, index) in big_classify" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                <div>{{ item.name }}</div>
              </div>
            </div>
            <div class="small_classify">
              <div v-for="(item, index) in small_classify" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="tabs">
          <van-tabs v-model:active="active">
            <van-tab
              v-for="(item, index) in content_nav_list"
              :key="index"
              :title="`${item.tab}`"
            >
              <StoreList :list="item.data" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../../components/Footer.vue";
import { reactive, toRefs } from "vue";
import StoreList from "./components/StoreList.vue";
export default {
  setup() {
    let data = reactive({
      big_classify: [
        { name: "美食", icon: "icon-apple-and-pear" },
        { name: "甜点饮品", icon: "icon-tianpin" },
        { name: "超市便利", icon: "icon-chaoshi" },
        { name: "生鲜果蔬", icon: "icon-shuiguo" },
        { name: "滴团买药", icon: "icon-yaopin" },
      ],
      small_classify: [
        { name: "午餐", icon: "icon-iconfonttubiaozhizuo-1" },
        { name: "买酒", icon: "icon-iconfonttubiaozhizuo-" },
        { name: "新鲜水果", icon: "icon-iconfonttubiaozhizuo-9" },
        { name: "汉堡披萨", icon: "icon-iconfonttubiaozhizuo-6" },
        { name: "休闲饮品", icon: "icon-iconfonttubiaozhizuo-8" },
        { name: "夜宵", icon: "icon-iconfonttubiaozhizuo-3" },
        { name: "吐司", icon: "icon-iconfonttubiaozhizuo-5" },
        { name: "跑腿", icon: "icon-paotuiAPP" },
        { name: "美人佳丽", icon: "icon-iconfonttubiaozhizuo-2" },
        { name: "全部分类", icon: "icon-fenlei" },
      ],
      content_nav_list: [
        {
          tab: "天天神券",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
              title: "隆江猪脚饭",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
        {
          tab: "减配送费",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
        {
          tab: "点评高分",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
        {
          tab: "会员满减",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
      ],
    });
    return {
      ...toRefs(data),
    };
  },
  components: { Footer, StoreList },
};
</script>

<style lang="less" scoped>
/deep/ .van-tabs__wrap {
  border-radius: 10px;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  .content {
    flex: 1;
    overflow-y: auto;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;
      background-image: linear-gradient(#ffc400, #fff);
      font-size: 20px;
      font-weight: 400;
      .location {
        font-size: 14px;
        span {
          margin: 0 5px;
        }
      }
    }
    .main {
      margin-top: -30px;
      .tabs {
        margin: 0 10px 0px 10px;
      }
      .main_bg {
        padding: 10px 20px 0 20px;
        border-radius: 30px 30px 0 0;
        background-image: linear-gradient(#fff, #f5f5f5);
        .classify {
          padding: 20px 0;
          .big_classify {
            display: flex;
            div {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .icon {
                width: 50px;
                height: 50px;
                margin-bottom: 5px;
              }
            }
          }
          .small_classify {
            display: flex;
            flex-flow: row wrap;
            margin-top: 20px;
            div {
              margin-bottom: 10px;
              width: 20%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .icon {
                width: 30px;
                height: 30px;
                margin-bottom: 5px;
              }
            }
          }
        }
        .search {
          position: relative;
          input {
            width: 100%;
            height: 30px;
            border-radius: 20px;
            border: 1px solid #ffc400;
          }
          .search_text {
            width: 50px;
            height: 32px;
            border-radius: 16px;
            text-align: center;
            font-size: 14px;
            background-color: #ffc400;
            line-height: 32px;
            position: absolute;
            top: 1px;
            right: -6px;
          }
        }
      }
    }
  }
}
</style>
